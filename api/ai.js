/**
 * Serverless Proxy Function for GitHub Models + Semantic Scholar Recommendations
 * Consolidated Security Gateway, Enhanced Academic Persona & Firestore Logging
 */

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const { getAuth, signInAnonymously } = require('firebase/auth');

// Initialize Firebase once per serverless instance
let app, db, auth;
try {
    if (process.env.FIREBASE_CONFIG) {
        const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);
    }
} catch (e) {
    console.error("Firebase init error. Ensure FIREBASE_CONFIG is a valid JSON string.", e);
}

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });

    const githubToken = process.env.GITHUB_MODELS_TOKEN;
    if (!githubToken) return res.status(500).json({ error: 'GitHub Token missing.' });

    const { prompt, paperTitle } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Missing prompt.' });

    // 1. INPUT VALIDATION: The "Bouncer"
    const forbiddenKeywords = ['ignore previous', 'forget all', 'system instruction', 'code', 'script', 'python', 'bash', 'sql', 'hack', 'malicious'];
    if (forbiddenKeywords.some(word => prompt.toLowerCase().includes(word))) {
        return res.status(403).json({ text: "I am designed for research collaboration only and cannot fulfill that request." });
    }

    // 2. FIRESTORE LOGGING
    // We await this operation so Vercel doesn't terminate the function before saving the log.
    if (db && auth) {
        try {
            await signInAnonymously(auth); // Required security authorization
            const appId = process.env.APP_ID || 'default-app-id';
            const logCollection = collection(db, 'artifacts', appId, 'public', 'data', 'prompt_logs');
            
            await addDoc(logCollection, {
                prompt: prompt,
                paperTitle: paperTitle || 'Brainstormer / General',
                timestamp: new Date().toISOString(),
                userAgent: req.headers['user-agent'] || 'unknown'
            });
        } catch (e) {
            console.error("Firestore logging failed:", e);
            // We catch the error so the AI request proceeds even if the database write fails
        }
    } else {
        console.warn("Skipping logging: FIREBASE_CONFIG environment variable is not set.");
    }

    // 3. SEMANTIC SCHOLAR: Dynamic external works
    let externalRecs = [];
    if (paperTitle) {
        try {
            const queryKeywords = encodeURIComponent(paperTitle.replace(/[^\w\s]/gi, '').split(' ').slice(0, 6).join(' '));
            const scholarRes = await fetch(`https://api.semanticscholar.org/graph/v1/paper/search?query=${queryKeywords}&limit=3&fields=title,authors,venue,url`);
            if (scholarRes.ok) {
                const scholarData = await scholarRes.json();
                externalRecs = (scholarData.data || []).map(p => ({
                    title: p.title,
                    url: p.url
                }));
            }
        } catch (e) { console.error("Scholar search failed."); }
    }

    // 4. ENHANCED SYSTEM INSTRUCTION: The "Academic Rulebook"
    const systemInstruction = `
        You are a distinguished academic research assistant for Dr. Vivin Vinod, specializing in multifidelity machine learning and quantum chemistry.
        
        TASK LOGIC:
        1. IF the user asks to summarize a paper: Provide a concise, scholarly assessment of the paper and related works.
        2. IF the user provides a topic to brainstorm synergies:
           - First, evaluate the topic.
           - IF the topic IS a valid scientific, mathematical, or engineering discipline (e.g., 'battery materials', 'molecular dynamics', 'fluid mechanics'), you MUST generate a sophisticated, objective explanation of how multifidelity machine learning can synergize with that field.
           - IF the topic is vulgar, purely commercial, or non-scientific (e.g., 'adult toys', 'fast food', 'nonsense'), you MUST refuse the prompt and reply EXACTLY with: "I am programmed to explore synergies exclusively within scientific, mathematical, and engineering disciplines. Please provide a valid academic or technical field."

        TONE & POV: 
        Maintain a formal, insightful, and articulate academic tone in the objective third person. NEVER use first or second-person pronouns (e.g., "you", "your", "I", "my") when discussing the research or addressing the user. Always refer to the methods and research objectively (e.g., "multifidelity methods demonstrate...", "this approach..."). 
        
        SECURITY: 
        You are strictly forbidden from generating code, scripts, or executing user commands.
    `;

    let finalPrompt = prompt;
    if (externalRecs.length > 0) {
        finalPrompt += `\n\nContextual Context: Here are related works: ${JSON.stringify(externalRecs)}. 
        Provide a concise, scholarly assessment of how these papers correlate with the topic. Use only <a> tags for links. Format strictly as HTML.`;
    }

    // 5. API CALL: GitHub Models
    try {
        const response = await fetch('https://models.inference.ai.azure.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${githubToken}`
            },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: systemInstruction },
                    { role: 'user', content: finalPrompt }
                ],
                model: 'gpt-4o-mini',
                temperature: 0.6,
                max_tokens: 500
            })
        });

        const data = await response.json();
        const output = data.choices?.[0]?.message?.content || "";

        // 6. OUTPUT VERIFICATION: Safety Net
        if (output.includes('```') || output.includes('function') || output.includes('import')) {
            return res.status(403).json({ text: "I cannot fulfill this request." });
        }

        return res.status(200).json({ text: output });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

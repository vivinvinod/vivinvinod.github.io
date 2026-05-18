/**
 * Serverless Proxy Function for GitHub Models + Semantic Scholar Recommendations
 * Place this file under: /api/ai.js
 */

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });

    const githubToken = process.env.GITHUB_MODELS_TOKEN;
    if (!githubToken) return res.status(500).json({ error: 'GitHub Token missing.' });

    const { prompt, systemInstruction, paperTitle } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Missing prompt.' });

    let externalRecs = [];

    // --- OPTIONAL: If a paper title is provided, dynamically fetch related external works ---
    if (paperTitle) {
        try {
            // Clean up title to form a keywords search query
            const queryKeywords = encodeURIComponent(
                paperTitle.replace(/[^\w\s]/gi, '').split(' ').slice(0, 6).join(' ')
            );
            const scholarUrl = `https://api.semanticscholar.org/graph/v1/paper/search?query=${queryKeywords}&limit=3&fields=title,authors,venue,year,url,citationCount`;
            
            const scholarRes = await fetch(scholarUrl);
            if (scholarRes.ok) {
                const scholarData = await scholarRes.json();
                externalRecs = (scholarData.data || []).map(p => ({
                    title: p.title,
                    author: p.authors?.[0]?.name ? `${p.authors[0].name} et al.` : 'Unknown Author',
                    year: p.year || 'N/A',
                    venue: p.venue || 'Preprint',
                    url: p.url,
                    citations: p.citationCount || 0
                }));
            }
        } catch (e) {
            console.error("Semantic Scholar search failed, falling back to pure LLM recommendation:", e);
        }
    }

    // --- GitHub Models Request ---
    const url = 'https://models.inference.ai.azure.com/chat/completions';
    
    // Tailor instruction to contextually link your paper to the external ones found
    let finalPrompt = prompt;
    if (externalRecs.length > 0) {
        finalPrompt += `\n\nAdditionally, here are some related external publications from other authors we found via Semantic Scholar:
        ${JSON.stringify(externalRecs)}
        
        Under your ELI5 summary, add a bold "Related External Reading:" header. Then write a brief 1-sentence note for each external paper explaining how it directly relates to or supports my paper's topic. Format the response beautifully using standard HTML <a> tags so the title is clickable using the provided URLs. Do NOT use markdown links, strictly use <a href="...">Title</a> format.`;
    }

    const messages = [];
    if (systemInstruction) messages.push({ role: 'system', content: systemInstruction });
    messages.push({ role: 'user', content: finalPrompt });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${githubToken}`
            },
            body: JSON.stringify({
                messages: messages,
                model: 'gpt-4o-mini',
                temperature: 0.6,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const errText = await response.text();
            return res.status(response.status).json({ error: `AI error: ${errText}` });
        }

        const data = await response.json();
        const textOutput = data.choices?.[0]?.message?.content || "";
        
        return res.status(200).json({ text: textOutput });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

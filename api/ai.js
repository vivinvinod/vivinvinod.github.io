/**
 * Serverless Proxy Function for GitHub Models
 * Place this file in your repository under: /api/ai.js
 */

module.exports = async (req, res) => {
    // Enable CORS headers so your GitHub Pages domain can securely fetch from it
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle OPTIONS preflight request (required for CORS)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    // Read your GitHub Personal Access Token from Vercel's environment variables
    const githubToken = process.env.GITHUB_MODELS_TOKEN;
    if (!githubToken) {
        return res.status(500).json({ error: 'GITHUB_MODELS_TOKEN environment variable is not configured on the server.' });
    }

    const { prompt, systemInstruction } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: 'Missing "prompt" in request body.' });
    }

    // Target the GitHub Models API Endpoint
    const url = 'https://models.inference.ai.azure.com/chat/completions';
    
    // We construct the payload using OpenAI's standard Chat Completions schema
    const messages = [];
    if (systemInstruction) {
        messages.push({ role: 'system', content: systemInstruction });
    }
    messages.push({ role: 'user', content: prompt });

    const payload = {
        messages: messages,
        model: 'gpt-4o-mini', // Extremely fast, highly accurate, and free on GitHub Models
        temperature: 0.6,
        max_tokens: 150
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${githubToken}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errText = await response.text();
            return res.status(response.status).json({ error: `GitHub Models API Error: ${errText}` });
        }

        const data = await response.json();
        const textOutput = data.choices?.[0]?.message?.content || "No insights could be generated.";
        
        // Send the clean output text back to your portfolio website
        return res.status(200).json({ text: textOutput });
    } catch (error) {
        return res.status(500).json({ error: `Proxy server encountered an error: ${error.message}` });
    }
};

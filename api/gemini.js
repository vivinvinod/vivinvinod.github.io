/**
 * Serverless Proxy Function for Gemini API
 * Place this file in your repository under: /api/gemini.js
 */

module.exports = async (req, res) => {
    // Enable Cross-Origin Resource Sharing (CORS) so your GitHub Pages domain can access it
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allows all origins, you can restrict this to 'https://vivinvinod.github.io' later if desired
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Content-Type');

    // Handle OPTIONS preflight request (required for CORS)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    // Read the secret API Key from Vercel's environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is not configured on the server.' });
    }

    const { prompt, systemInstruction } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: 'Missing "prompt" in request body.' });
    }

    // Build the payload for Gemini 2.5 Flash
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const payload = {
        contents: [{ parts: [{ text: prompt }] }]
    };
    
    if (systemInstruction) {
        payload.systemInstruction = { parts: [{ text: systemInstruction }] };
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errText = await response.text();
            return res.status(response.status).json({ error: `Gemini API Error: ${errText}` });
        }

        const data = await response.json();
        const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text || "No insights could be generated.";
        
        // Return the clean generated text back to the browser
        return res.status(200).json({ text: textOutput });
    } catch (error) {
        return res.status(500).json({ error: `Proxy server encountered an error: ${error.message}` });
    }
};

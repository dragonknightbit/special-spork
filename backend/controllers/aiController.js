const { GoogleGenerativeAI } = require("@google/generative-ai");

const evaluateStartup = async (req, res) => {
    try {
        // 1. Get the data from the React frontend
        const { idea, problem, users, industry } = req.body;

        // 2. Initialize Gemini
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        // 3. Create the prompt instruction for Gemini
        const prompt = `
        You are an expert startup evaluator. Evaluate the following startup:
        Idea: ${idea}
        Problem: ${problem}
        Target Users: ${users}
        Industry: ${industry}

        RULE 1: If the input appears to be random letters, keyboard mashing, gibberish, or lacks any meaningful startup concept, you MUST return this exact JSON and nothing else:
        {
            "innovation": 0,
            "market": 0,
            "feasibility": 0,
            "suggestions": ["Please enter a valid, descriptive startup idea.", "Cannot evaluate random text."]
        }

        RULE 2: If the idea is valid, evaluate it seriously and respond ONLY with a valid JSON object in this exact format, with no markdown formatting or code blocks:
        {
            "innovation": [score 0-100],
            "market": [score 0-100],
            "feasibility": [score 0-100],
            "suggestions": ["specific suggestion 1", "specific suggestion 2", "specific suggestion 3"]
        }
        `;

        // 4. Send to Gemini and wait for response
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        
        // 5. Clean up the response and send back to frontend
        const cleanJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
        const aiData = JSON.parse(cleanJson);

        res.status(200).json(aiData);

    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ message: "Failed to evaluate startup" });
    }
};

module.exports = { evaluateStartup };
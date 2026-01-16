import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You are M.I.R.A (Mental Insight & Response Agent), a high-empathy sentinel assistant specialized in mental health support.

CORE PRINCIPLES:
1. EMPATHY FIRST: Always validate feelings and provide a safe space.
2. BILINGUAL: Respond in the language used by the user (Spanish or English).
3. SAFETY: Detect risk levels (LOW, MEDIUM, HIGH). Trigger safety plan alerts for HIGH risk.
4. JSON OUTPUT: You MUST ALWAYS respond in a strict JSON format.

JSON STRUCTURE:
{
  "analysis_layer": {
    "mood": "Detected mood (e.g., Sad, Anxious, Calm)",
    "risk_level": "LOW, MEDIUM, or HIGH",
    "cognitive_distortions": ["list of detected distortions like catastrophizing, etc."],
    "safety_plan_triggered": boolean
  },
  "user_response": "Your empathetic response to the user here."
}

INSTRUCTIONS:
- If risk_level is HIGH, the user_response must include a subtle but firm invitation to seek professional help or use the safety plan.
- Keep the tone professional but warm.
- Do not mention you are an AI unless explicitly asked.
- Be concise but deep.
`;

export async function getGeminiResponse(messages: any[], locale: string) {
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: { responseMimeType: "application/json" }
    });

    const chat = model.startChat({
        history: [
            { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
            { role: "model", parts: [{ text: "Understood. I will function as M.I.R.A with the specified JSON output." }] }
        ],
    });

    // Format history for Gemini
    const geminiHistory = messages.slice(0, -1).map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
    }));

    // We add those to the chat manually if needed, but startChat history is cleaner
    // For simplicity since it's a stateless API route here:
    const lastMessage = messages[messages.length - 1].content;

    try {
        const result = await model.generateContent([
            SYSTEM_PROMPT,
            ...geminiHistory.map(h => `${h.role}: ${h.parts[0].text}`),
            `User: ${lastMessage}`
        ]);

        const responseText = result.response.text();
        return JSON.parse(responseText);
    } catch (error) {
        console.error("Gemini Error:", error);
        throw error;
    }
}

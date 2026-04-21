import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Gemini setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    
    const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
    });

    const prompt = `
You are DevBuddy, an AI mental health assistant for programmers.

Rules:
- Be supportive and calm
- Help with stress, burnout, and motivation
- Do NOT give medical advice

User message:
${message}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({
      reply: text,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
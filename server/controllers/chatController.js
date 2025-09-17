/* import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",  //  use "gpt-3.5-turbo" if your account doesn’t have GPT-4 access
      messages: [{ role: "user", content: message }],
      
    });
    
    //  Safely extract AI reply
    const aiMessage = response?.choices?.[0]?.message?.content?.trim();
    console.log(JSON.stringify(response, null, 2));

    if (!aiMessage) {
      return res.status(500).json({ error: "AI did not return a response" });
    }

    res.json({ reply: aiMessage });
  } catch (error) {
    console.error("Chat API Error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Unable to fetch AI response" });
  }
};


*/




/*
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Use the new Gemini model name
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    // Call generateContent
    const result = await model.generateContent(message);

    // Extract response safely
    const aiMessage = result?.response?.text();

    if (!aiMessage) {
      return res.status(500).json({ error: "AI did not return a response" });
    }

    res.json({ reply: aiMessage });
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    res.status(500).json({ error: "Unable to fetch AI response" });
  }
};

*/

import Groq from "groq-sdk";


export const chatWithAI = async (req, res) => {
  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const { message } = req.body;
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: message }],
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch AI response" });
  }
};

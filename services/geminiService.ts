import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

// Initialize the Gemini Client
// We assume process.env.API_KEY is available as per instructions.
// In a real Vite app, this would be import.meta.env.VITE_API_KEY usually, 
// but sticking to process.env.API_KEY as per the specific prompt environment instructions.
const apiKey = process.env.API_KEY || ''; 

let chatSession: Chat | null = null;

const getClient = (): GoogleGenAI => {
    if (!apiKey) {
        console.error("API_KEY is missing.");
    }
    return new GoogleGenAI({ apiKey });
};

export const initializeChat = async (): Promise<Chat> => {
    if (chatSession) return chatSession;
    
    const ai = getClient();
    chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_PROMPT,
            temperature: 0.7,
        },
    });
    return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
    try {
        if (!chatSession) {
            await initializeChat();
        }
        
        if (!chatSession) throw new Error("Failed to initialize chat.");

        const response: GenerateContentResponse = await chatSession.sendMessage({ message });
        
        // As per documentation, response.text is a property getter, not a function.
        const text = response.text;
        
        if (!text) {
            return "Connection established... but no data received. Try again.";
        }
        
        return text;
    } catch (error) {
        console.error("Gemini Error:", error);
        return "Error: Signal interrupted. Check API Key or connectivity.";
    }
};


import { GoogleGenAI, Chat } from "@google/genai";
import { Coordinates, GroundingSource } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

let quickChatInstance: Chat | null = null;

const getQuickChatInstance = (): Chat => {
  if (!quickChatInstance) {
    quickChatInstance = ai.chats.create({
      model: 'gemini-2.5-flash-lite',
      config: {
        systemInstruction: "You are a friendly and helpful real estate assistant. Keep your answers concise and conversational.",
      },
    });
  }
  return quickChatInstance;
};

export const streamQuickChat = async (prompt: string, onChunk: (chunk: string) => void) => {
  try {
    const chat = getQuickChatInstance();
    const result = await chat.sendMessageStream({ message: prompt });
    for await (const chunk of result) {
      onChunk(chunk.text);
    }
  } catch (error) {
    console.error("Error in streamQuickChat:", error);
    onChunk("Sorry, I encountered an error. Please try again.");
  }
};

export const fetchMarketNews = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `As a real estate expert, answer the following question based on the latest information from the web: "${prompt}"`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    
    const text = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources: GroundingSource[] = groundingChunks
      .filter((chunk: any) => chunk.web)
      .map((chunk: any) => ({
        title: chunk.web.title,
        uri: chunk.web.uri,
        type: 'web',
      }));

    return { text, sources };

  } catch (error) {
    console.error("Error in fetchMarketNews:", error);
    return { text: "Sorry, I couldn't fetch the latest market news right now. Please try again.", sources: [] };
  }
};

export const fetchLocalInfo = async (prompt: string, location: Coordinates) => {
   try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `As a local real estate expert, answer the following question for a user located near latitude ${location.latitude} and longitude ${location.longitude}: "${prompt}"`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
            retrievalConfig: {
              latLng: {
                latitude: location.latitude,
                longitude: location.longitude,
              }
            }
        }
      },
    });

    const text = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources: GroundingSource[] = groundingChunks
      .filter((chunk: any) => chunk.maps)
      .map((chunk: any) => ({
        title: chunk.maps.title,
        uri: chunk.maps.uri,
        type: 'maps',
      }));

    return { text, sources };

  } catch (error) {
    console.error("Error in fetchLocalInfo:", error);
    return { text: "Sorry, I couldn't find local information right now. Please ensure you've granted location permissions.", sources: [] };
  }
};

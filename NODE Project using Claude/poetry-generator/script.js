// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyCEjZtiQq19bAgfR09xuIE37qYK7DJbEXg";

async function runChat() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "create a poetry via an input text" }],
      },
      {
        role: "model",
        parts: [{ text: "**Input Text:**\n\nLife's a journey, full of twists and turns,\nSometimes it feels like we're just being burned.\nBut through it all, we must keep our chins up high,\nAnd never let our spirits die.\n\n**Poetry:**\n\n**The Journey of Life**\n\nThrough life's labyrinth, a winding maze,\nTwists and turns assail us every day.\nLike embers burning, pain and strife,\nYet, we must rise above the fray.\n\nWith hearts ablaze, we forge our way,\nChin high, our spirits bright.\nThough darkness looms, we'll not dismay,\nFor in our souls, hope burns like light.\n\nThe journey's long, the path unknown,\nBut we'll embrace it, make it our own.\nFor in these trials, strength is found,\nAs we navigate life's shifting ground.\n\nSo let us tread with steady feet,\nThrough joy and sorrow, bitter and sweet.\nFor in the crucible of life's flame,\nWe'll emerge stronger, our spirits aflame." }],
      },
    ],
  });

  const result = await chat.sendMessage("what is there on earth");
  const response = result.response;
  return response.text();
}

module.exports = { runChat };
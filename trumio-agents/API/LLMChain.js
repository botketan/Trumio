const openaiapi = require("openai");
const vscode = require("vscode");
const apiKey = "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" // Change API Key here!

const openai = new openaiapi.OpenAI({
  apiKey: apiKey,
});

// Contains the msgs array which has the past msg history with the bot.
let msgs = [
  { role:"system", content: "You are an assistant. Give me a consistant answer to the following text that is present below. Also make the message crisp and short"}
];

// Keep it async , we get a promise object

async function generateJson(inputCode) {

  let mess = [
    { role: "user", content: String(inputCode)}
  ];

  try {
    const completion = await openai.chat.completions.create({ // Open AI API call
      messages: mess,
      model: "gpt-3.5-turbo",
      temperature:0
    });
  
    console.log(completion.choices[0].message.content);
    
    return completion.choices[0].message.content;

  }
  catch (error) {
    console.log(error);
    vscode.window.showErrorMessage("Error encountered with API!"); // Failure of promise
  }
}

async function generateDocumentation(inputCode) {

  msgs.push({ role: "user", content: String(inputCode)});

  try {
    const completion = await openai.chat.completions.create({ // Open AI API call
      messages: msgs,
      model: "gpt-3.5-turbo",
      temperature:0
    });

    msgs.push({role:"assistant",content: completion.choices[0].message.content});

    return completion.choices[0].message.content; // Message from bot

  } catch (error) {
    vscode.window.showErrorMessage("API usage limit reached."); // Failure of promise
  }
}

module.exports = [generateDocumentation,generateJson];

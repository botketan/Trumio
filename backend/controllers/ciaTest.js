
import chats from '../models/chats.js';
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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",
});

let mesg= [{role: "system", content: "You are a master prompt genertator for other instances of chatgpt provided a field name generate a system prompt to be given in a api call for another chatgpt instance. For example if you are provied field name Machine Learning then the response should be like \"You are an expert at Machine learning at a online eductaional website. Help the students with their queries \""}]


export const createChat=  async (req, res) => {
    mesg.push({ role: "user", content: String(req.body.botname) });
    const chatCompletion = await openai.chat.completions.create({
        messages: mesg,
        model: "gpt-3.5-turbo",
    });
    console.log(req.body.ques);
    console.log(chatCompletion);
    let newchat = new chats();
    newchat.messages.push({role: "system", content: chatCompletion.choices[0].message.content});
    newchat.save();
    res.status(200).json({message: chatCompletion.choices[0].message.content, id: newchat._id});
  };

export const postChat = async (req, res) => {
      let chat = await chats.findById(req.params.id);
      let mes= chat.messages;
      mes = mes.map((m)=>{
          return {
              role: m.role,
              content: m.content
          };
      })
      mes.push({role: "user", content: req.body.ques});
      console.log(mes);
      const chatCompletion = await openai.chat.completions.create({
        messages: mes,
        model: "gpt-3.5-turbo",
    });
    chat.messages.push({role: "assistant", content: chatCompletion.choices[0].message.content});
    chat.save();
    res.status(200).json({message: chatCompletion.choices[0].message.content});
};



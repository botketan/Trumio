import { project } from "../models/project.js";
import { user } from "../models/user.js";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

let mesg= [{role: "system", content: "You are a master task creators given a project description and a number of milestones create a list of milestones each with 2 to 4 subtask. For example given a json {\"projectDescription\": \"You are a developer at a online eductaional website. Create a website for the students to learn from. The website should have a login page, a dashboard, a course page, a payment page and a profile page. The website should be responsive and should be able to handle 1000 users at a time.\",\"Milestone1\": \"Create a login page and a dashboard page\",\"Milestone2\": \"Create a course page and a payment page\",\"Milestone3\": \"Create a profile page and make the website responsive\"} and 3 the response json should be like [\"Create a login page and a dashboard page\": [\"Create a login page\",\"Create a dashboard page\"],\"Create a course page and a payment page\": [\"Create a course page\",\"Create a payment page\"],\"Create a profile page and make the website responsive\": [\"Create a profile page\",\"Make the website responsive\"]]"}]

export const createProject = async (req, res) => {
    const { title, description, userId,milestones } = req.body;
    const newProject = new project({ title, description, userId });
    newProject.milestones = [];
    milestones.projectDescription = description;
    mesg.push({ role: "user", content: JSON.stringify(milestones) });
    const chatCompletion = await openai.chat.completions.create({
        messages: mesg,
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
    });
    let result = JSON.parse(chatCompletion.choices[0].message.content);
    for (var key in result) {
        let task = result[key].map((t)=>{
            return {
                title: t,
                isCompleted: false
            };
        });
        newProject.milestones.push({title: String(key), task: task,progress:0});
    }
    try {
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
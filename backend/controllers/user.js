import { user } from "../models/user.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    const userget = await user.findOne({ email: email });
    if (!userget) {
        return res.status(404).send("userget not found");
    }
    if (userget.password !== password) {
        return res.status(401).send("Password is incorrect");
    }
    return res.status(200).json({ message: "Signin successful" ,user_id: userget._id});
};

export const signup = async (req, res) => {
    const { email, password,userName,position,college,description } = req.body;
    const userget = await user.findOne({ email: email });
    if (userget) {
        return res.status(409).send("User already exists");
    }
    const newUser = new user({
        email,password,userName,position,college,description
    });
    await newUser.save();
    return res.status(201).json({ message: "Signup successful" });
};

export const getUser = async (req, res) => {
    const { userId } = req.body;
    try {
        const userget = await user.findById(userId).populate('projects').populate('chatIds');
        if (!userget) {
            res.status(404).send("User not found");
        }
        res.status(200).json(userget);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


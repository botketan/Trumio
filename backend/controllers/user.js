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
    const { email, password } = req.body;
    const userget = await user.findOne({ email: email });
    if (userget) {
        return res.status(409).send("User already exists");
    }
    const newUser = new user({
        email,
        password,
    });
    await newUser.save();
    return res.status(201).json({ message: "Signup successful" });
};


import { mentor } from "../models/mentor.js";
import {v2 as cloudinary} from "cloudinary";
import streamifier from "streamifier";

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });

export const createMentor = async (req, res) => {
    const newMentor = req.body;             //changed from different seperated fields to one body
    const file = req.file;
    try {
        const newMentor = new mentor(newMentor);
        if(file){
            const uploadStream = cloudinary.uploader.upload_stream(
                async (error, result) => {
                    if (result) {
                        newMentor.icon = result.secure_url;
                        await newMentor.save();
                    } else {
                        console.log(error);
                    }
                }
            );
            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        }
        await newMentor.save();
        res.status(201).json(newMentor);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getMentor = async (req, res) => {
    const {skills} = req.body;
    try {
        const mentors = await mentor.find();
        if(skills){
            const filteredMentors = mentors.filter(mentor => mentor.skills.some(skill => skills.includes(skill)));
            res.status(200).json(filteredMentors);
            return;
        }
        res.status(200).json(mentors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getMentorById = async (req, res) => {
    const { mentorId } = req.body;
    try {
        const mentorget = await mentor.findById(mentorId);
        if (!mentorget) {
            throw new Error("Mentor not found");
        }
        res.status(200).json(mentorget);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateIcon = async (req, res) => {
    const {mentorId} = req.body;
    const file = req.file;
    try {
        if(file){
            const uploadStream = cloudinary.uploader.upload_stream(
                async (error, result) => {
                    if (result) {
                        const newMentor = await mentor.findById(mentorId);
                        if(!newMentor){
                            return res.status(404).send("Mentor not found");
                        }
                        newMentor.icon = result.secure_url;
                        await newMentor.save();
                        return res.status(201).json(newMentor);
                    } else {
                        console.log(error);
                    }
                }
            );
            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        }
        else
        {
            return res.status(400).send("File not found");
        }
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateAvailability = async (req, res) => {
    const {mentorId,availability} = req.body;
    console.log(availability);
    try {
        const newMentor = await mentor.findById(mentorId);
        if(!newMentor){
            return res.status(404).send("Mentor not found");
        }
        if(!newMentor.availability){
            newMentor.availability = [];
        }
        await availability.forEach((item) => {
            console.log(new Date(item));
            newMentor.availability.push(new Date(item));
        });
        console.log(newMentor.availability);
        await newMentor.save();
        return res.status(201).json(newMentor);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
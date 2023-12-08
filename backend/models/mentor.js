import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    password:{  
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
    },
    noOfSessions:{
        type: Number,
        default: 0,
    },
    reviews:{
        type: Number,
        default: 0,
    },
    experience:{
        type: Number,
        default: 0,
    },
    avgAttendance:{
        type: Number,
        default: 0,
    },
    icon:{
        type: String,
    },
    description:{
        type: String,
    },
    skills:[
        {
            type:String,
            enum:['Development','Design','Marketing','Business','Data Science','Other']
        }
    ],
    availability:[
        {
            time:Date,
            slots:Number
        }
    ]
});

export const mentor = mongoose.model("mentor", mentorSchema);

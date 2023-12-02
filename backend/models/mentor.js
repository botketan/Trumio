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
            type:Date
        }
    ]
});

export const mentor = mongoose.model("mentor", mentorSchema);

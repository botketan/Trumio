import mongoose, { Mongoose } from "mongoose";

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    milestones:[
        {
            title: {
                type: String,
            },
            task:[
                {
                    title:{
                        type: String,
                    },
                    isCompleted:{
                        type: Boolean,
                        default:false,
                    },
                }
            ],
        }
    ],
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true,
    },
    progress:{
        type: Number,
        default:0,
    },
});

export const project = mongoose.model("project", projectSchema);

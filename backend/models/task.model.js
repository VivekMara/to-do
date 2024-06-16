import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        task:{
            type:String,
            required:true
        }
    },{timestamps:true}
)

export const Task = mongoose.model("Task",taskSchema)
import mongoose from "mongoose";
import express from "express"
const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(`mongodb+srv://darthman:sOMSq2yQB61dZevE@mycluster.z6qywql.mongodb.net/TO-DO`);
        console.log("DB Connected!!")
    } catch (error) {
        console.error(error)
    }
    
}

export default dbConnect
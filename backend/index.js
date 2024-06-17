import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import cors from "cors"
import { Task } from "./models/task.model.js";




//specs
const app = express();
const port = process.env.PORT || 5000

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())



//dbconnection
const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/task-manager`);
        console.log("DB Connected!!")
    } catch (error) {
        console.error(error)
    }
    
}
dbConnect();


//routes



app.post("/api/addtask", async (req,res) => {
    const {username,task} = req.body;
    try {
        const addTask = await Task.create({username,task});
        res.status(200).json(
            {
                message:"Task added successfully",
                name:username,
                task:task
            }
        )
        
    } catch (error) {
        res.status(500).json(
            {
                message:"Error adding task!!",
                error
            }
        )
    }
})

app.post("/api/gettasks", async (req,res) => {
    const {username} = req.body;
    try {
        const registeredUser = await Task.find({username});
        if (registeredUser == "") {
            res.status(404).send(
        "User does not exist!!"
            )
        } else {
            res.status(200).json(registeredUser)
        }
        
    } catch (error) {
        res.status(500).send("Error finding the task!!")
    }
})





try {
    app.listen(port , (req,res) => {
        console.log(`App is listening on port ${port}`)
    })
} catch (error) {
    console.error(error)
}









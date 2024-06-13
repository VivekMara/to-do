import express from "express"
import 'dotenv/config'
import cors from "cors"
import dbConnect from "./db/index.db.js";
import { User } from "./models/user.model.js";
import bcrypt from "bcrypt"


//Specs
const app = express();
const port = 3000

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())


//dbconnection
dbConnect();


//routes

//user-registeration routes
app.post("/register", async (req,res) => {
    const {username,email,password} = req.body;
    try {
        const registeredUser = await User.findOne({username});
        if (!registeredUser) {
            const registerUser = await User.create({username,email,password});
            console.log(registerUser);
            res.status(200).json(
                {
                    message:"User successfully created!!"
                }
            )
        }
        else{
            res.status(404).json(
                {
                    message:"User already exists!!"
                }
            )
        }
        
    } catch (error) {
        res.status(500).json(
            {
                message:"Error creating the user!!"
            }
        )
    }
})






try {
    app.listen(port , (req,res) => {
        console.log(`App is listening on port ${port}`)
    })
} catch (error) {
    console.error(error)
}





export default app



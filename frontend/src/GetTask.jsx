import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


    

    


export default function GetTask(){

    const [username,setUsername] = useState("");
    const [task,setTask] = useState(null);
    const [taskcount,setTaskcount] = useState(null);
    const [status,setStatus] = useState(null);
    const [complete,setComplete] = useState("Mark completed!!");

    


    //get tasks
    const gettasks = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/gettasks", {username});
            const status = response.statusText
            const data = response.data
            const completionStatus = data.map(obj => obj.complete)
            if (response.status === 200) {
                const tasks = data.map(obj => <div key={obj._id} className="flex gap-3">
                    <li>{obj.task}</li>
                    <button>Mark Completed</button>
                </div>)
                const number_tasks = tasks.length
                setUsername("")
                setTask(tasks)
                setTaskcount(number_tasks)
                setStatus(status)
            } 
            console.log(completionStatus)
            
        } catch (error) {
            setUsername("")
            setTask(null)
            setTaskcount(0)
            setStatus(error.response.data)
            console.log(error.response.data)
        }
    }

    

    

    
    return(
        <>
        <Navbar/>
        <div className="border-2 rounded-xl p-3 flex flex-col w-1/2 h-fit">
        <form onSubmit={gettasks} className="flex flex-col items-center">
            <div >
                <label htmlFor="username">Name:</label>
                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required className="border-2 rounded-xl text-black p-2 " autoComplete="off" />
            </div>
            <br />
            <button type="submit" className="border-2 p-3 rounded-2xl font-semibold text-xl w-fit h-fit">Submit</button>
        </form>
        <br />
        <div className="flex gap-3 justify-center">
            <h1>Tasks:</h1>
            <ol>{task}</ol>
        </div>
        <br />
        <div className="flex gap-3 justify-center">
            <h1>Task count:</h1>
            <h1>{taskcount}</h1>
        </div>
        <br />
        <div className="flex gap-3 justify-center">
            <h1>Status:</h1>
            <h1>{status}</h1>
        </div>
        </div>
        <button className="border-2 p-3 rounded-2xl font-semibold text-xl"><Link to={`/addtask`}>Add tasks</Link></button>
        </>
    )
}
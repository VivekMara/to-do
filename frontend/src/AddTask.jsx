import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function AddTask(){
    const [username,setUsername] = useState('');
    const [task,setTask] = useState('');
    const [json,setJson] = useState(null);
    const [status, setStatus] = useState(false);


    const addTask =  async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("/api/addtask",{username,task});
            setStatus(false)
            setJson(response.data)
            setTask('')
        } catch (error) {
            console.error(error)
        }
    }

    

    return(
        <>
        <Navbar/>
        <div className="border-2 rounded-xl p-3 flex flex-col w-screen h-fit ">
        <form onSubmit={addTask} className="flex flex-col items-center ">
            <div>
            <label htmlFor="username">Name:</label>
            <input type="text" name="username" id="username" value={username}
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
            required className="border-2 rounded-xl text-black p-2 " autoComplete="off"/>
            </div>
            <br />
            <div>
            <label htmlFor="task">Task:</label>
            <input type="text" name="task" id="task" value={task}
            onChange={(e) => setTask(e.target.value)}
            required className="border-2 rounded-xl text-black p-2 " autoComplete="off"/>
            </div>
            <br />
            <button type="submit" className="border-2 p-3 rounded-2xl font-semibold text-xl w-fit h-fit" onClick={() => {setStatus(true)}}>{
                status ? 'Adding task' : 'Add task'
                }</button>
        </form>
        <br />
        {json && (
        <div className="flex flex-col items-center border-2 w-full h-fit rounded-xl p-3">
        <h1>{json.message}</h1>
        <h2>Name:  {json.name}</h2>
        <h2>Task:  {json.task}</h2>
        </div>
        )}
        </div>
        <br />
        <div className="flex justify-center">
        <button className="border-2 p-3 rounded-2xl font-semibold text-xl"><Link to={`/gettasks`}>Get tasks</Link></button>
        </div>
        </>
        
    )
}
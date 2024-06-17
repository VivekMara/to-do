import axios from "axios";
import { useEffect, useState } from "react";



export default function AddTask(){
    const [username,setUsername] = useState('');
    const [task,setTask] = useState('');
    const [json,setJson] = useState(null);

    const addTask =  async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("/api/addtask",{username,task});
            setJson(response.data)
            setUsername('')
            setTask('')
        } catch (error) {
            console.error(error)
        }
    }

    

    return(
        <div className="border-2 rounded-xl p-3 flex flex-col w-1/2 h-fit ">
        <form onSubmit={addTask} className="flex flex-col items-center ">
            <div>
            <label htmlFor="username">Name:</label>
            <input type="text" name="username" id="username" value={username}
            onChange={(e) => setUsername(e.target.value)}
            required className="border-2 rounded-xl text-black p-2 "/>
            </div>
            <br />
            <div>
            <label htmlFor="task">Task:</label>
            <input type="text" name="task" id="task" value={task}
            onChange={(e) => setTask(e.target.value)}
            required className="border-2 rounded-xl text-black p-2 "/>
            </div>
            <br />
            <button type="submit" className="border-2 p-3 rounded-2xl font-semibold text-xl w-fit h-fit">Add Task</button>
        </form>
        {json && (
        <div>
        <h1>{json.message}</h1>
        <h2>Name:{json.name}</h2>
        <h2>Task:{json.task}</h2>
        </div>
        )}
        </div>
    )
}
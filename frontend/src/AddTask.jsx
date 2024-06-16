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
        <>
        <form onSubmit={addTask}>
            <label htmlFor="username">Name:</label>
            <input type="text" name="username" id="username" value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>
            <label htmlFor="task">Task:</label>
            <input type="text" name="task" id="task" value={task}
            onChange={(e) => setTask(e.target.value)}
            required/>
            <button type="submit">Add Task</button>
        </form>
        {json && (
        <div>
        <h1>{json.message}</h1>
        <h2>Name:{json.name}</h2>
        <h2>Task:{json.task}</h2>
        </div>
      )}
        </>
    )
}
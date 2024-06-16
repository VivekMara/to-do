import axios from "axios"
import { useState } from "react";




export default function GetTask(){

    const [username,setUsername] = useState("");
    const [task,setTask] = useState(null);
    const [taskcount,setTaskcount] = useState(0);
    const [status,setStatus] = useState(null)
    const gettasks = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/gettasks", {username});
            const status = response.status
            if (status === 200) {
                const data = response.data
                const tasks = data.map(obj =>  <li key={obj._id}>{obj.task}</li>)
                const number_tasks = tasks.length
                setUsername("")
                setTask(tasks)
                setTaskcount(number_tasks)
                setStatus(status)
            } else {
                setTask(response.data.message);
                setStatus(status)
            }
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    
    return(
        <>
        <form onSubmit={gettasks}>
            <label htmlFor="username">Name:</label>
            <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="submit" >Submit</button>
        </form>
        <ul>{task}</ul>
        <h1>{taskcount}</h1>
        <h1>{status}</h1>
        </>
    )
}
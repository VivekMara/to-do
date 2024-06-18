import Navbar from "./Navbar"
import {Link} from "react-router-dom"
export default function Home(){
    return(
        <>
        <Navbar/>
        <div className="flex items-center justify-center flex-col w-full h-screen gap-4">
            <h1 className="text-8xl font-black ">Get Started</h1>
            <div className="flex gap-3">
            <button className="border-2 p-3 rounded-2xl font-semibold text-xl"><Link to={`/addtask`}>Add tasks</Link></button>
            <button className="border-2 p-3 rounded-2xl font-semibold text-xl"><Link to={`/gettasks`}>Get tasks</Link></button>
            </div>
        </div>
        </>
    )
}
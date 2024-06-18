import { Link } from "react-router-dom"





export default function Navbar(){
    return(
        <div className="flex justify-evenly p-3 w-screen h-fit rounded-b-xl font-bold text-xl ">
            <Link to={"/"}>TO-DO</Link>
            <a href="https://github.com/VivekMara/to-do" target="_blank"><img src="github.svg" alt="github" className="invert" /></a>
            <a href="http://darthman.vercel.app" target="_blank">Darthman</a>
        </div>
    )
}
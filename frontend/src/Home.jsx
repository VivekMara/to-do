import Navbar from "./Navbar"
import {Link} from "react-router-dom"
export default function Home(){
    return(
        <>
        <Navbar/>
        <Link to={`tasks`}>Tasks</Link>
        </>
    )
}
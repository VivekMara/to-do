import { useState } from "react";

export default function MyButton({trueText, falseText , status}){

    return(
        <>
            <button type="submit" className="border-2 p-3 rounded-2xl font-semibold text-xl w-fit h-fit" onClick={() => {{setStatus(status)}}}>{
                status ? {trueText} : {falseText}
                }</button>
        </>
    )
}
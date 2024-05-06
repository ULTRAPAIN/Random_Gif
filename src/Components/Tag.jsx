import { useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag() {
    const [tag,setTag]=useState('')
    const {gif,loading,fetchData} = useGif(tag)
    function changeHandler(event){
        setTag(event.target.value)
    }
    return (
        <>
        <div className="flex flex-col items-center w-1/2 bg-blue-500 border border-white rounded-lg gap-y-5 sm:min-w-[380px]">
         <h1 className="text-3xl font-bold uppercase mt-[0.5rem]">Search  Gif</h1>
         {
             loading?(<Spinner/>):( <img src={gif}  width="450" alt="gif" className="rounded-lg"/>)
         }
        
        <input type="text" className="w-10/12 text-lg py-1 rounded-lg mb-[1px] text-center font-semibold" onChange={changeHandler} value={tag} placeholder="Search anything"/>
         <button  className="w-10/12 py-1 text-lg font-semibold bg-white rounded-lg opacity-95 mb-[20px]" onClick={()=>fetchData(tag)}>Generate</button>
        </div>
        </> 
    )
}

export default Tag

import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
// console.log(apiKey) for checking the api key being loaded in this file 
function Random() {
    const {gif,loading,fetchData}=useGif()
    return (
       <>
       <div className="flex flex-col items-center w-1/2 bg-green-500 border border-white rounded-lg gap-y-5">
        <h1 className="text-3xl font-bold uppercase mt-[0.5rem] sm:text-2xl">A Random Gif</h1>
        {
            loading?(<Spinner/>):( <img src={gif}  width="450" alt="gif" className="rounded-lg"/>)
        }
       
        <button  className="w-10/12 py-1 text-lg font-semibold bg-white rounded-lg opacity-95 mb-[20px]" onClick={()=>fetchData()}>Generate</button>
       </div>
       </> 
    )
}

export default Random

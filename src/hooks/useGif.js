
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

 const useGif=()=> {
    const [gif,setgif]=useState("")
    const [loading,setloading]=useState(false)

    async function fetchData(tag){
        setloading(true)
        const {data} = await axios.get(tag?`${url}&tag=${tag}`:url)
        const imageSource=data.data.images.downsized_large.url
        console.log(data)
        setgif(imageSource)
        setloading(false)
    }

    useEffect(() => {
        fetchData()
    },[])
    
return  {gif,loading,fetchData}
}

export default useGif

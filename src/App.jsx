// import { useState } from 'react'
import Random from "./Components/Random"
import Tag from "./Components/Tag"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="relative flex flex-col items-center w-full h-screen overflow-x-hidden bg-black">
   
     <div className="absolute rounded-lg w-11/12 text-center mt-[40px]  font-extrabold
     px-10 py-2 text-5xl gradient-text">Random Gifs</div>
     <div className="flex flex-col w-full items-center gap-y-10 mt-[130px]"> 
      <Random/>
      <Tag/>
     </div >
        
    </div>
    </>
  )
}

export default App

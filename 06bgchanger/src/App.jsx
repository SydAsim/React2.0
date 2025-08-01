// jo main point hain kay onClick = {()=>}
  // expect you to retrun a function cause we do this setColor("red") then return 
  // value of the function will be in the onclick and onClick demand the funtion
import { useState } from "react"

function App() {
const[color , setColor] = useState("gray")

  return (
    <>
     <div 
     className="w-full h-screen duration-200"
      style={{backgroundColor : color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 
      inset-x-0 px-2">
       
       {/* is Bar main sari buttons ayeinge */}
       <div
      className=" flex flex-wrap justify-center gap-3
       shadow-lg bg-white px-3 py-2 rounded-3xl"> 
       
       <button 
       onClick={()=>setColor("red")}
       className="outline-none px-4 py-1 rounded-full 
       text-white shadow-lg" 
       style ={{backgroundColor : "Red"}}>
      Red
       </button>

       <button 
         onClick={()=>setColor("green")}
       className="outline-none px-4 py-1 rounded-full 
       text-white shadow-lg" 
       style ={{backgroundColor : "green"}}>
      Green
       </button>

       <button
         onClick={()=>setColor("purple")}
       className="outline-none px-4 py-1 rounded-full 
       text-white shadow-lg" 
       style ={{backgroundColor : "purple"}}>
      purple
       </button>
       

        <button 
          onClick={()=>setColor("Black")}
        className="outline-none px-4 py-1 rounded-full 
       text-white shadow-lg" 
       style ={{backgroundColor : "Black"}}>
      Black
       </button>


       <button
         onClick={()=>setColor("blue")}
       className="outline-none px-4 py-1 rounded-full 
       text-white shadow-lg" 
       style ={{backgroundColor : "blue"}}>
      Blue
       </button>

       <button
         onClick={()=>setColor("indigo")}
       className="outline-none px-4 py-1 rounded-full 
       text-white shadow-lg" 
       style ={{backgroundColor : "indigo"}}>
      indigo
       </button>

       <button
         onClick={()=>setColor("pink")}
       className="outline-none px-4 py-1 rounded-full 
       text-white shadow-lg" 
       style ={{backgroundColor : "pink"}}>
      Pink
       </button>

      
       

       </div>

      </div>

     </div>
    </>
  )
}

export default App

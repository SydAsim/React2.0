import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Now to solve the issue of propagating/updating/ chnaging we use 
  // useState() its by default value can be anything false true '' etc 
//SetCounter is a method from which we can controll the counter varaible 
// so State and UI is Synced 
   let [counter , setCounter] = useState(15)

  const ftnonClick = ()=>{
    if (counter >= 20){
      return
    }
    else{
     setCounter(counter  + 1 )
    }
    
  }
  

  // for the Removevalue  
  const Removevalue = ()=>{
    if (counter == 0){
      return
    }
    else{
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
     <h1>Learning React</h1>
     <h2>Counter value : {counter}</h2>

     <button
     onClick={ftnonClick}
     >Add value {counter} </button>
    <br></br>
     <button 
     onClick={Removevalue}
     >Remove Value {counter}</button>
     <footer>value is {counter}</footer>
    </>
  )
}

export default App

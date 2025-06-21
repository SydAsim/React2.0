import { use } from "react"
import Coffee from "./code"


const username = "Syed Asim Bacha"
function App() {
// In JSX, <></> are called React fragments or simply fragments.

  return (
    <>
    {/* {username} this is called Evalution Expression which means i will write the 
    final outcome of the js here  we cannot write if else etc*/}
    <h1>Hello my name is asim and how are you {username}</h1>
    <Coffee/>
    </>
   
  )
}

export default App

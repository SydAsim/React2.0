import React, { useState ,useContext }  from "react";
import UserContext from "../context/UserContext";



const Login = () => {
    const [username , setUserName] = useState('')
    const [passward ,setPassward ] = useState('')
    
    // now we will use the useContext Hook and pass the user context we have creaetd
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username , passward})

    }

  return (
    <div>
        <h2 className="bg-slate-400 text-3xl " >Name</h2>
            <input  className="rounded-2xl bg-gray-300 text-black "
            value={username}
            onChange={(e)=> setUserName(e.target.value)}
            type="text" 
            placeholder="username"
             />
            
            <input
            className="rounded-2xl bg-gray-300 text-black "
            value={passward}
            onChange={(e)=>setPassward(e.target.value)}
            type="text" 
            placeholder="passward" />
            <button 
            className="bg-orange-500 rounded-lg m-4 p-3"
            onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
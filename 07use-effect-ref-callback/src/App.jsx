import { useCallback, useState , useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  // useRef hook 
  const PasswordRef = useRef(null)

  // useCallback is not only responsiable for running the function 
  // but also responsiable for memorize ,Optimization and keep it in
  // cache thou useCallback is ka jo array us ko hum Optimize karnay 
  // kay liye use karthay hain kay aghar jo bhi variables iss array 
  // main change howay thou Optimze karo us method ko 
  const PasswardGenerator = useCallback(()=>{
    let pass = ""
    let str = " ABCDEFGHIJKLMOPQRSTWXYZabcdefghijklmnopqrstwxyz"
    
    if(numberAllowed) str += "0123456789"
     if(charAllowed) str += "!@#$%^&*()+_{}|:"

// length determines how many iterations the loop will run, and consequently,
//  how many characters will be included in the password.
    for (let i = 1; i <= length; i++) {
    let char  = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
   
  }

    setPassword(pass)

    // dependencies meaning change in any of the below will 
    // also change the  pass 
  
  }  ,[length ,numberAllowed,charAllowed,setPassword])


  
  const copyPasswardtoClipBoard = useCallback(()=>{
    PasswordRef.current?.select()
    // we can also select  Pass upto  specific Range 
    PasswordRef.current?.setSelectionRange(0 ,999)
    window.navigator.clipboard.writeText(password)
  } 
  ,[password])



  // in useEffect same callback ftn and dependency array 
  // but the dep array is used to track if any change oxxur run it again 
  useEffect(()=>{
    PasswardGenerator()
  } , [length , numberAllowed ,charAllowed,
    PasswardGenerator])

 

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3 '
        placeholder='Password'
        readOnly
        ref={PasswordRef}
        />
        <button
        onClick={copyPasswardtoClipBoard}
        className='outline-none bg-blue-700 text-white px-3 
        py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        < input
        type='range'
        min={5}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label> length: {length}</label>
      </div>
      <div>
        <input
        type='checkbox'
        defaultChecked={numberAllowed}
        className='cursor-pointer'
        id="numberInput"
        onChange={()=>{
          setNumberAllowed( (prev) => !prev)
        }}
        />
       <label htmlFor='number-Input'> Number</label>
      </div>

        <div>
        <input
        type='checkbox'
        defaultChecked={charAllowed}
        className='cursor-pointer'
        id="charterInput"
        onChange={()=>{
          setCharAllowed( (prev) => !prev)
        }}
        />
       <label htmlFor='charterInput'>character </label>
      </div>
      </div>
      </div>
    </>
  )
}

export default App

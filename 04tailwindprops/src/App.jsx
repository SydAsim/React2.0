import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

// we can import as much cards comp as we want but we want the
// names to be chnaged so that is why we use Props
function App() {
  // const [first, setfirst] = useState(0);
  let myobj = {
    user: "syed asim bacha",
    roll :'1231',
    addres: "peshawar"
  }

  return (
    <>
     <body className='bg-slate-800'></body>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card  username = "chai"  btntext= "CLick ME"/>
      <Card  username =  "coffee"  />
      
    </>
  )
}

export default App

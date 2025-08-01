import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data =  useLoaderData()
//     const[data , setData] = useState([])
//     useState(()=>{
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         .then(response => response.json())
//         .then(data => { 
//         console.log(data)
//         setData(data)
// })
        
//  } ,[])

  return (
     <div className='text-center m-4 bg-gray-600 text-white p-4 
    text-3xl rounded-3xl flex justify center'  >Hiteshchoudhary Github Followers : {data.followers}
    <img className='flex justify-start' src={data.avatar_url} alt="Git picture" />
    </div>
    
  )
}

export default Github
export const  githubInfoLoader = async ()=>{
   const response = await  fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()

}
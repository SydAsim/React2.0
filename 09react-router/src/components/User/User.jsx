import React from 'react'
import { useParams } from 'react-router-dom'
// by importing useParams we can access the router 
// user/number or any string 
export const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-gray-500 text-white text-3xl p-4 rounded-full cursor-pointer'>User: {userid}</div>
  )
}

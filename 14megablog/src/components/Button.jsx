import React from 'react'

const Button = ({
    // children is just a fancy name you can write anything like
    // btntext etc
    Children,
    // other bydefault attributes of the btn 
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className='',
    // iss kay liwa bhi attriutes thou hongaey woh hum
    // nay props mian liye hain  spread kar kay
    ...props

}) => {
  return (
    <button className={`px-4 py-2 rounded-lg
    ${bgColor} ${textColor} ${type} 
    ${className}`}  {...props}>


        {Children}
    </button>
  )
}

export default Button
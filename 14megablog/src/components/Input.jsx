//forwardref: when we make a login and we have an 
// input field in it same input field for Login/pass etc
// but we need access of state of the input field in the 
// login page so we have give refrence to the Login page 
// that is where the concept of the forwardRef comes in 
// in React 19 it is the word forwardRef is  no longer
//  used instead we use ref  
 

import React , {useId} from 'react'
function Input(
{ 
    label, 
    type = 'text', 
    className = '', 
    ref,        // pull in the ref  
    ...props    // everything else  
  }
) {
    
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label     
        className="inline-block mb-1 pl-1"
        htmlFor={id} >
        {label}
        </label>
      )}
      <input
        className={`
          px-3 py-2 rounded-lg bg-white text-black 
          outline-none focus:bg-gray-50 duration-200 
          border border-gray-200 w-full ${className}
        `}
        id={id}
        type={type}
        //forwardref example ref ko jo hum n ay user say liya
        // hain as prop us ko yahan pass kardo 
        // yahi woh cheez hain jo hamian refrence day ge apnay 
        // parent component ka andhar 
        // component alag hain lakin refrence waha chahiyan 
        // thou ref waha say pass bhi kia jayga aur yaha say 
        // pir state ka access liya jaye ga 
        ref={ref}
        {...props} // Baqi jo Properties hain
      />
    </div>
  );
}

export default Input;
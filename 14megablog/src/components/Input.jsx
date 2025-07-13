// forwardRef: When we create a component like <Input />
// and want to access the input field (e.g., focus, value)
// from the parent (like a Login page), we need a ref.
//
// But since Input is a custom component, React doesn’t 
// pass ref into it directly. So we use forwardRef to 
// forward the ref to the actual DOM input inside.
//
// In React 19, JSX improvements make many things easier,
// but you still need to use React.forwardRef() when 
// passing refs into custom components.

import React from "react";
import { forwardRef } from "react"; 

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = "",
  ...props
}, ref) {
  const id = useId();
  return (
    <div className='w-full'>
      {label && (
        <label className='inline-block mb-1 pl-1' htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}  // ✅ this ref is coming from forwardRef
        {...props}
        id={id}
        className={`px-3 py-2 rounded-lg bg-white
        text-black outline-none focus:bg-gray-50 
        duration-200 border border-gray-200 w-full ${className}`}
      />
    </div>
  );
});

export default Input;

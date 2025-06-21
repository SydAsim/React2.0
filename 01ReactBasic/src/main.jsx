import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import { createElement } from 'react'
import CustomButton from './custombtn.jsx'
function MyApp() {

  return(
    <>
    <h1>Hello from h1!!!!</h1>
    <CustomButton name='login'/>
    </>
  )
  
}


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click to visit Google.com'
// };

// creeating the element of the React using React syntax 
const anotherElement  = (
  <a href="https://google.com" target='_blank' >
    Click here to Visit Google
  </a>
)

const anotheruser = "Syed Awais Ali Shah"

//Now we are making custom Reactelement  using the sytanx of the React 
// babel transfiler inject the React  createElement
const ReactElement = React.createElement(
  'a',
  {href : 'https://google.com', 'target' : '_blank'},
  'Click me!',
  // jab sara tree ban jata hhain tab variable injection atay hain 
  anotheruser
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // My app can also be written as the function cause at the end it is 
  // render as a function
  // MyApp()
    <MyApp />
  // </StrictMode>,
  // ReactElement // it will not work cause at the react dev has desined the 
  // elements in different way like in my ReactElement the type : 'a' it might be 
  // different
  // <App/>
  // ReactElement
  
)


// Babel transforms JSX syntax into plain JavaScript by injecting calls to React.createElement.

// How JSX is Transformed by Babel
// When you write JSX like this:

// jsx
// const element = <h1>Hello, World!</h1>;

// Babel transpiles it into:

// javascript
// const element = React.createElement('h1', null, 'Hello, World!');
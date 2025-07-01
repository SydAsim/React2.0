import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom'
// createBrowserRouter ,RouterProvider methods given by react-router-dom

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx';
import Contactus from './components/Contactus/Contactus.jsx'
import { User } from './components/User/User.jsx'
import Github ,{githubInfoLoader} from './components/Github/Github.jsx'


// const router = createBrowserRouter ([{
//   path : '/',
//   element : <Layout/>,
//   children : [
//     {
//       path : "",
//       element : <Home />
//     },
//     {
//       path : "about",
//       element : <About />
//     },
//     {
//       path : "contactus",
//       element : <Contactus />
//     },
//     {
//       path : "user/:userid",
//       element : <User />
//     },
    
//     { loader: githubInfoLoader,
//       path : "github",
//       element : <Github />
//     }
//   ]

// }

// ])



// other way of declaring router 

const router  = createBrowserRouter(
  createRoutesFromElements( 
    <Route path='/' element= {<Layout />}>
       <Route path='' element= {<Home />}/>
        <Route path='about' element= {<About />}/>
         <Route path='contactus' element= {<Contactus />}/>
         <Route path='user:userid' element= {<User />}/>
         <Route 
         loader ={githubInfoLoader}
         path='github' 
         element= {<Github />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

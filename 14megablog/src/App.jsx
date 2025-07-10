import { useState ,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import {Outlet} from 'react-router-dom'
 
function App() {

  const [loading ,setLoading]  = useState(true)
  const dispatch = useDispatch()

  useEffect (()=>{
    authService.getCurrentUsers()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }
      else{
       dispatch(logout())
      }
    })
     .catch((error) => {
      console.warn("No user session found or error occurred:", error.message);
      dispatch(logout());
    })

    .finally(()=>  setLoading(false))
  } , [])


  return !loading ?
  (
    <div className='text-3xl min-h-screen flex flex-wrap
    content-between bg-gray-400'>

      <div className='w-full block '>
        <Header/>
        <main>
          TODO : <Outlet/>
        </main>
        <Footer/>
      </div>
      test</div>
  ) : null
}

export default App

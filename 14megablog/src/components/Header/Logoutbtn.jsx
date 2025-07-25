import React from 'react'
import {useDispatch} from 'react-redux'
import Service from '../../appwrite/conf'
import {logout} from '../../store/authSlice'

const Logoutbtn = () => {
    const dispatch = useDispatch()

    // method Logouthandler
    const Logouthandler = ()=>{
        Service.logout.then(()=>{
            dispatch(logout())
        })
        
    }
  return (
    <button className='inline-block px-6 py-2
    duration-200 hover:bg-blue-100 rounded-full'>
        Logout
    </button>
  )
}

export default Logoutbtn
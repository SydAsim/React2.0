import React from 'react'
import { useState , useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Protected  ({children , authentication = true}) {
    const navigate = useNavigate()
    const [loader , setLoader] = useState(true)
    const authStatus  = useSelector(state => state.auth.status )

    useEffect(()=>{

          //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false


        // true && false !== true   true && true  thou login par jao
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }
        //  false && true !== true   false && false  thou wapis baijo '/' par jao
        else if (!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoader(false)

    },[navigate , authStatus , authentication])

     return loader ? <h1>Loading...</h1> : <>{children}</>
}

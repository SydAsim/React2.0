import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
// If i want the Header and Footer to be constant 
// and load by default in every page Home aboutus contact
// etc so we use Outlet for that 
    <>
    <Header/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout
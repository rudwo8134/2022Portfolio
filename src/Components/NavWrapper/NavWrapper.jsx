import React from 'react'
import Header from './Header';
import Footer from './Footer';

const NavWrapper = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default NavWrapper
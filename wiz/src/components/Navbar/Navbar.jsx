import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../Assets/logo.jpg'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const[menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className='navbar-first'>
        <div className='logo'>
          <img src={Logo} alt="logo" />
        </div> 
        <p>WIZ FREELANCERS</p>
      </div>
      <div className='navbar-second'>
            <p onClick={() => {setMenu("Home")}}><Link style={{textDecoration:"none",color: "black"}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</p>
            <p onClick={() => {setMenu("Services")}}><Link style={{textDecoration:"none",color: "black"}} to='/Services'>Services</Link>{menu==="Services"?<hr/>:<></>}</p>
            <p onClick={() => {setMenu("About")}}><Link style={{textDecoration:"none",color: "black"}} to='/About'>About</Link>{menu==="About"?<hr/>:<></>}</p>
            <p onClick={() => {setMenu("Contact")}}><Link style={{textDecoration:"none",color: "black"}} to='/Contact'>Contact</Link>{menu==="Contact"?<hr/>:<></>}</p>
      </div>
    </div>
  )
}

export default Navbar

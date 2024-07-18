import React from 'react'
import "./Nav.css"
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'><h1>The<span className='nav-logo-semi'>Blog</span></h1></div>
        <ul>
            <li><NavLink >Add Blogs</NavLink></li>
            <li><NavLink >About</NavLink></li>
            <li><NavLink >Contact</NavLink></li>
        </ul>
        <ul>
            <li><button className='nav-btn'>Log In</button></li>
        </ul>
    </div>
  )
}

export default Nav
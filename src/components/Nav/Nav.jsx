import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'><h1>The<span className='nav-logo-semi'>Blog</span></h1></div>
        <ul>
            <li>Blogs</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <ul>
            <li><button className='nav-btn'>Log In</button></li>
        </ul>
    </div>
  )
}

export default Nav
"use client"

import React from 'react'
import Typewriter from 'typewriter-effect'

const Header = () => {
  return (
    <div>
     
   
     <nav className="navbar">
  <div className="nav-container">
    <a href="#" className="logo">MyPortfolio</a>

  
    <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
    <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

    <ul className="nav-links">
      <li><a href="#Home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#projects">project</a></li>
      <li><a href="#skills">skills</a></li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header

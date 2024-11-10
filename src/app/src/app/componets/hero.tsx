"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <div>
  <section className="hero">
    <div className="hero-content">
      <img src="pro.png" alt="Profile Picture" className="profile-pic "/>
    



        <h1> 
        <Typewriter options={{ strings: [ 'HI', 'IAM WALEED KHALID'], autoStart: true, loop: true }} 
        />
        </h1>
        <p>I’m a web developer passionate about creating beautiful and functional user experiences.
          
        </p>
        
     
    </div>
  </section>
    </div>
  )
}

export default Hero

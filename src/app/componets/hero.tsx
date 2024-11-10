"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <div>
  <section className="hero h-screen  bg-center flex items-center justify-center text-center relative text-white hero  bg-cover    t  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/50 before:z-1" >
    <div className="hero-content hero-content relative z-20 max-w-xl p-5">
      <img src="pro.png" alt="Profile Picture" className="profile-pic w-48 h-48 rounded-full mb-4 border-4 border-white object-cover"/>


       <h1 className='text-5xl mb-2'> 
       <Typewriter options={{ strings: [ 'HI', 'IAM WALEED KHALID'], autoStart: true, loop: true }} 
        />
       </h1>
       <p className='text-xl mb-6'>I’m a web developer passionate about creating beautiful and functional user experiences.</p>
     
    </div>
  </section>
    </div>
  )
}

export default Hero

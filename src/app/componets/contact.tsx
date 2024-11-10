import React from 'react'

const Contact = () => {
  return (
    <div>
       <section className='contact mb-5' id="contact">
      <h2 className='heading'>Contact <span className='head' >Us</span></h2>
    </section>

    <div className='container-2 min-h-screen flex justify-center items-center'>
  <form className='w-[800px] p-10 flex flex-col items-center shadow-2xl rounded-3xl bg-white/10 backdrop-blur-lg'>
    <h1 className='text-white font-medium mb-7 w-full text-center text-[1.8rem'>Contact Us Form</h1>
    
    <label htmlFor="firstName"></label>
    <input className='w-full max-w-[500px] p-3 px-5 outline-none border-none text-white text-base mb-5 bg-transparent border-b-2 border-white rounded-md'  type="text" id="firstName" placeholder="First Name" required />

    <label htmlFor="lastName"></label>
    <input className='w-full max-w-[500px] p-3 px-5 outline-none border-none text-white text-base mb-5 bg-transparent border-b-2 border-white rounded-md' type="text" id="lastName" placeholder="Last Name" required />

    <label htmlFor="email"></label>
    <input className='w-full max-w-[500px] p-3 px-5 outline-none border-none text-white text-base mb-5 bg-transparent border-b-2 border-white rounded-md' type="email" id="email" placeholder="Email" required />

    <label htmlFor="mobile"></label>
    <input className='w-full max-w-[500px] p-3 px-5 outline-none border-none text-white text-base mb-5 bg-transparent border-b-2 border-white rounded-md' type="tel" id="mobile" placeholder="Mobile" required />

    <h4>Type Your Message</h4>
    <textarea className='"w-full max-w-[700px] p-3 px-5 outline-none border-non  text-base mb-5 bg-transparent border-b-2 border-white rounded-md bg-white h-[120px] resize-non text-black' id="message" placeholder="Your message here..." required></textarea>

    <input className='btn w-full max-w-[500px] p-3 text-base text-[#282828] bg-white border-none rounded-md cursor-pointer transition-colors duration-300 ease-in-out  hover:bg-gray-300' type="submit" value="Send" id="button" />
  </form>
  </div>
    </div>
  )
}

export default Contact

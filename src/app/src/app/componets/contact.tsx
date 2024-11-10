import React from 'react'

const Contact = () => {
  return (
    <div>
       <section className='contact' id="contact">
      <h2 className='heading'>Contact <span className='head' >Us</span></h2>
    </section>

    <div className='container-2'>
  <form>
    <h1>Contact Us Form</h1>
    
    <label htmlFor="firstName"></label>
    <input type="text" id="firstName" placeholder="First Name" required />

    <label htmlFor="lastName"></label>
    <input type="text" id="lastName" placeholder="Last Name" required />

    <label htmlFor="email"></label>
    <input type="email" id="email" placeholder="Email" required />

    <label htmlFor="mobile"></label>
    <input type="tel" id="mobile" placeholder="Mobile" required />

    <h4>Type Your Message</h4>
    <textarea id="message" placeholder="Your message here..." required></textarea>

    <input type="submit" value="Send" id="button" />
  </form>
  </div>
    </div>
  )
}

export default Contact

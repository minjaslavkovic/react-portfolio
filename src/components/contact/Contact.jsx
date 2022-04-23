import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {MdPhoneIphone} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option'>
            <FiMail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>minja.slavkovic@gmail.com</h5>
            <a href="mailto:minja.slavkovic@gmail.com">Send a message</a>
          </article>
          <article className='contact-option'>
            <MdPhoneIphone className='contact-option-icon'/>
            <h4>Phone</h4>
            <h5>+447568775528</h5>
            <a href="mailto:minja.slavkovic@gmail.com" target='_blank' rel="noopener noreferrer">Contact</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

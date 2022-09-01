import React from 'react'
import './contact.css'
import { AiFillMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_sqksfhd', 'template_xtmu7wm', form.current, 'd52HNdf836jJ_xuzw')
  e.target.reset()
  };

  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
   

    
    
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
<AiFillMail  className='contact_option-icon'/>
          <h4>Email</h4>

          <h5>amansh0777@gmail.com</h5>
          <a href="mailto: amansh0777@gmail.com" target="_blank">Send a message</a>

        </article>
        
        <article className="contact_option">
<AiFillLinkedin className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>aman_sharma</h5>
          <a href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit" target="_blank">Send a message</a>

        </article>
        <article className="contact_option">
<AiOutlineWhatsApp className='contact_option-icon'/>
          <h4>WhatsApp</h4>

          <h5>9205104767</h5>
          <a href="https://web.whatsapp.com/send?phone=+919205104767" target="_blank">Send a message</a>

        </article>


      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='your full name' required/>
        <input type="text" name='email' placeholder='your email' required/>
        <textarea name="message"  rows="7" placeholder='your message' required>
        </textarea>
        <button type='submit' className='btn btn-primary'>Send message</button> 
      </form>
    </div>
</section >

      


    
  )
}

export default Contact;
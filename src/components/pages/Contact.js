import React from 'react';
import './Contact.css'

function Contact() {
 return (
  <>
   <div className='contact-heading'>
     <h5>Contact Us!</h5>
     
   </div>
   <div className='contact-form-container'>
    <i class="far fa-envelope-open"></i>
    <input type='email' className='contact-message-input'name='email'placeholder='Write to us (Your message)'></input>
    <input type='email' className='contact-email-input'name='email'placeholder='Your email'></input>
    <input type='email' className='contact-address-input'name='email'placeholder='Your address'></input>

    <button type='submit'  className="send-button" name='button'>Send</button>
    <h8>BUY IT © 2021</h8>
   </div>
  </>
 )
}

export default Contact

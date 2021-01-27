import React from 'react';
import '../../App.css';
import './SignUp.css'


export default function SignUp(){
 return (
 <>
  <div className="signup-container">
   <h2 className="signup-heading">SIGN-UP</h2>
   <form className='form-container'>
    <input type='text' className='signup-input'name='text'placeholder='Your name'></input>
    <i className="fa fa-user"></i>
    <input type='email' className='signup-input'name='email'placeholder='Your email'></input>
    <i class="fa fa-envelope"></i>
    <input type='password' className='signup-input'name='password'placeholder='Your password'></input>
    <i class="fa fa-lock "></i>
   </form>
   <button type='submit'  className="signup-button" name='button'>Sign Up</button>

  </div>

 </>
 )
}
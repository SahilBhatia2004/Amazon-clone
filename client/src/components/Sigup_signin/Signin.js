import { Label } from '@mui/icons-material'
import React from 'react'
import "./Signup.css"
const Signin = () => {
  return (
    <section>
       <div className='sign_container'>

       </div>
       <div className='sign_form'>
          <form>
            <h1>Sign-In</h1>
                <div className='form_data'>
                   <label>Email</label>
                   <input type='text' name='email' id='email'/>
                </div>
                <div className='form_data'>
                   <label>Password</label>
                   <input type='password' name='password' id='password'/>
                </div>
                <button className='Signin_but'>Continue</button>
                <button className='Create_account'>Create Account</button>
          </form>
       </div>
    </section>
  )
}

export default Signin

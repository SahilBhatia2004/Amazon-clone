import React from 'react'

const Signup = () => {
  return (
    <section>
    <div className='sign_container'>

    </div>
    <div className='sign_form'>
       <form>
         <h1>Create your account</h1>
             <div className='form_data'>
                <label>Your Name</label>
                <input type='text' name='name' id='name'/>
             </div>
             <div className='form_data'>
                <label>Email</label>
                <input type='text' name='email' id='email'/>
             </div>
             <div className='form_data'>
                <label>Password</label>
                <input type='password' name='password' id='password'/>
             </div>
             <button className='Signin_but'>Continue</button>
       </form>
    </div>
 </section>
  )
}

export default Signup

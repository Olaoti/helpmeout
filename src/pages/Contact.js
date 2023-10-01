import React,{useEffectgi} from 'react'
import Logo from '../Components/Logo'
import { ReactComponent as Google } from '../Assets/tools/google.svg'
import { ReactComponent as Facebook } from '../Assets/tools/facebook.svg'


function Contact() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='contact'>
        <Logo/>
      <div className='contact__section center'>
        <div className='form'>
            <h3 className='subhead'>Log in or Sign up</h3>
            <p className='info'>Join millions of others in sharing successful moves on <span>HelpMeOut</span>.</p>
            <div className='continue'>
                <div className='flex'><Google/><p>Continue with Google</p></div>
                <div className='flex'><Facebook/><p>Continue with Facebook</p></div>

            </div>
            <div className='or'>
                <span></span>
                <p>or</p>
                <span></span>
            </div>
            <form className='fwork'>
                <label>Email</label>
                <input type='email' id='email' name='email' placeholder='Enter your email address'/>
                <label>Password</label>
                <input type='password' id='password' name='password' placeholder='Enter your password'/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

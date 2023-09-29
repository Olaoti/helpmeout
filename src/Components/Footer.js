import React from 'react'
import Logo from './Logo'
import logoimg from '../Assets/logowhite.png'


function Footer() {
  return (
    <div className='footer'>
      <Logo imgsrc={logoimg}/>
      <div>
        <p className='dark fsora'>Menu</p>
        <p>Home</p>
        <p>Converter</p>
        <p>How it works</p>
      </div>
      <div>
        <p className='dark fsora'>About Us</p>
        <p>About</p>
        <p>Contact us</p>
        <p>Privacy Policy</p>
      </div>
      <div>
        <p className='dark fsora'>Screen Record</p>
        <p>Browser Window</p>
        <p>Desktop</p>
        <p>Application</p>
      </div>
    </div>
  )
}

export default Footer

import React, { useState } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'


function Nav() {
    const [show, setShow] = useState(false)
  return (
    <div className='nav'>
      <div className='mobile-nav' id='navbar'>
        <Logo/>
        <div className={`hamburger ${show?('cancel'):('show')}`} onClick={()=>setShow(!show)}>
            <span></span>
            <span></span>
        </div>
      </div>
      <div className={`nav_links fwork ${show?('display'):('')}`}>
        <p className='bold fwork' id='features'>Features</p>
        <p className='bold fwork' id='works'>How It Works</p>
        <Link className='link' to={'/contact'}>
        <p className='bold fwork mobile' id='start'>Get Started</p>

        </Link>
      </div>
      <Link className='link' to={'/contact'}>
      <div className='started fsora' id='start'>Get Started</div>

      </Link>
    </div>
  )
}

export default Nav

import React, { useState } from 'react'
import Logo from './Logo'

function Nav() {
    const [show, setShow] = useState(false)
  return (
    <div className='nav'>
      <div className='mobile-nav'>
        <Logo/>
        <div className={`hamburger ${show?('cancel'):('show')}`} onClick={()=>setShow(!show)}>
            <span></span>
            <span></span>
        </div>
      </div>
      <div className={`nav_links fwork ${show?('display'):('')}`}>
        <p className='bold fwork'>Features</p>
        <p className='bold fwork'>How It Works</p>
        <p className='bold fwork mobile'>Get Started</p>
      </div>
      <div className='started fsora'>Get Started</div>
    </div>
  )
}

export default Nav

import React from 'react'
import logoimg from '../Assets/logo.png'
import { Link } from 'react-router-dom'


function Logo({imgsrc}) {
  return (
    <Link to='/' className='link'>
    <div className='logo'>
      <img src={imgsrc?(imgsrc):(logoimg)} alt='logo' id='install'/>
      <p className='finter dark' id='install'>HelpMeOut</p>
    </div>
    </Link>
  )
}

export default Logo

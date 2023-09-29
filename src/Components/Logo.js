import React from 'react'
import logoimg from '../Assets/logo.png'


function Logo({imgsrc}) {
  return (
    <div className='logo'>
      <img src={imgsrc?(imgsrc):(logoimg)} alt='logo'/>
      <p className='finter dark'>HelpMeOut</p>
    </div>
  )
}

export default Logo

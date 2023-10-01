import React from 'react'
import logoimg from '../Assets/logo.png'


function Logo({imgsrc}) {
  return (
    <div className='logo'>
      <img src={imgsrc?(imgsrc):(logoimg)} alt='logo' id='install'/>
      <p className='finter dark' id='install'>HelpMeOut</p>
    </div>
  )
}

export default Logo

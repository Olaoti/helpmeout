import React from 'react'

function Logo({imgsrc}) {
  return (
    <div className='logo'>
      <img src={imgsrc} alt='logo'/>
      <p className='finter dark'>HelpMeOut</p>
    </div>
  )
}

export default Logo

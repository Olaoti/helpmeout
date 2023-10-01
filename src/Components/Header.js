import React, { useContext , useEffect, useState} from 'react'
import { ReactComponent as Arrowright } from '../Assets/arrow-right.svg'
import { ReactComponent as Headerbg } from '../Assets/bgs/headbg.svg'
import { ReactComponent as Headerbggrey } from '../Assets/bgs/headbg2.svg'

import woman from '../Assets/images/woman.png'
import oldwoman from '../Assets/images/oldwoman.png'
import males from '../Assets/images/males.png'
import { Link } from 'react-router-dom'


function Header() {
 

  return (
    <div className='header'>
      <div className='header__section'>
        <div className='header__section__left'>
            <h2>Show Them <br/>Don't Just Tell</h2>
            <h5>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</h5>
            <Link className='link' to={'https://drive.google.com/drive/folders/1WX_YoUqPfZVHajIHZXFKXOZd-BmVkx7C?usp=drive_link'} target='_blank'>
            <button id='install' className='flex fwork' ><span>Install HelpMeOut</span><Arrowright/></button></Link>
           
        </div>
        <div className='header__section__right'>
                <div className='blue'><Headerbg/></div>
                <div className='grey'>
                <Headerbggrey fill='rgba(16, 10, 66, 1)'/>
            </div>
            <div className='images'>
                <div>
                <img src={oldwoman} alt='woman'/>
                </div>
                <div className='woman'>
                <img src={woman} alt='woman' />
                 </div>
                <div>
                <img src={males} alt='males'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header

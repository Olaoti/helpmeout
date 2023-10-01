import React from 'react'
import workimg from '../Assets/images/work.png'

function Works() {

    const workslist = [
        {
            id:1,
            heading:'Record Screen',
            body:'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
            action:'screen recording'
        },
        {
            id:2,
            heading:'Share Your Recording',
            body:'We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.',
            action:'share url'

        },
        {
            id:3,
            heading:'Learn Effortlessly',
            body:'Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.',
            action:'revisit'

        },
    ]

  return (
    <div className='works'>
      <h3 id='works'>How It Works</h3>
      <div className='works__section'>
        {workslist?.map(work=>{
           return(
            <div className='work center' key={work?.id} id={work?.action}>
            <div className='number' id={work?.action}>{work?.id}</div>
            <h4 id={work?.action}>{work?.heading}</h4>
            <h5 id={work?.action}>{work?.body}</h5>
            <div className='workimg'><img src={workimg} alt='work'/></div>
        </div>
           )
        })}
      </div>
    </div>
  )
}

export default Works

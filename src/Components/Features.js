import React from 'react'
import { ReactComponent as Easy } from '../Assets/tools/easy.svg'
import { ReactComponent as Revisit } from '../Assets/tools/revisit.svg'
import { ReactComponent as Screen } from '../Assets/tools/screen.svg'
import vidrepo from '../Assets/images/vidrepo.png'


function Features() {
    const featureslist = [
        {
            id:0,
            svg:<Screen/>,
            heading:'Simple Screen Recording',
            body:'Effortless screen recording for everyone. Record with ease, no tech expertise required.',
        },
        {
            id:1,
            svg:<Easy/>,
            heading:'Easy-to-Share URL',
            body:'Share your recordings instantly with a single link. No attachments, no downloads.',
        },
        {
            id:2,
            svg:<Revisit/>,
            heading:'Revisit Recordings',
            body:'Access and review your past content effortlessly. Your recordings, always at your fingertips.',
        },
    ]
  return (
    <div className='features'>
        <div className='heading center'>
            <h3>Features</h3>
            <h5>Key Highlights of Our Extension</h5>
        </div>
        <div className='features__section'>
            <div className='features__section__left'>
                {featureslist?.map(feat=>{
                    return(
                    <div className='flex' key={feat?.id}>
                        <div className='icon'>
                            {feat?.svg}</div>
                        <div className='content'>
                           <h4>{feat?.heading}</h4>
                           <h5>{feat?.body}</h5>
                           </div>
                    </div>
                    )
                })}
            </div>
            <div className='features__section__right'>
                <img src={vidrepo} alt='video repository'/>
            </div>

        </div>
    </div>
  )
}

export default Features

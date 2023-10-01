import React,{useContext, useEffect, useState, useRef} from 'react'
import ReactPlayer from 'react-player'
import { Context } from '../App'
import Typewriter from './Typewriter'
import { MouseContext,ActionContext  } from '../App'
import Texts from './Texts'
import gsap from 'gsap'
import avatar from '../Assets/avatar.gif'
import vid from '../Assets/vid.mp4'
import fullavatar from '../Assets/fullavatar.gif'


function Video() {
  const [assistant, setAssistant] = useContext(Context)
  const [userText, setText] = useState({})
  const [act, setAct] = useContext(ActionContext)
  const [mousepos, setMousePos] = useContext(MouseContext)

  const videoRef=useRef(null)
  const avatarRef=useRef(null)

  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  const height = (window.innerHeight)
  const width = window.innerWidth
  const editAssistant=function(){
    setAssistant(!assistant)
   
  }
  useEffect(()=>{
    if(assistant===false){
      gsap.to(videoRef.current, {bottom:height/10, left:0})
    }
  },[assistant])
  useEffect(()=>{
    if(act!=='none'||''){
      setText(Texts.filter(text=>{
        return text.action ===act
      }))     
    }else{
      setText("")
    }
  },[act])
  useEffect(()=>{
    setX(mousepos.x)
    setY(mousepos.y)
    if(act!="" && assistant==true && Y>100 && X<width*0.9){
      gsap.to(videoRef.current, {bottom:(height-Y), left:X,duration:0.1, delay:0.1})
    }else if(act!="" && assistant==true && Y<100 && X<width*0.9){
      gsap.to(videoRef.current, {bottom:((height-Y)-100), left:X,duration:0.1, delay:0.1})
    }else if (act!="" && assistant==true && Y>100 && X>width*0.9){
      gsap.to(videoRef.current, {bottom:((height-Y)-100), left:X-100,duration:0.1, delay:0.1})
    }
  },[mousepos])

  return (
    <div className='video' ref={videoRef}>
       <div className='playingvid'  onClick={editAssistant} > 
        {assistant?(
          <img src={avatar} alt='avatar' className='avatar' ref={avatarRef}/>
        ):(<ReactPlayer url={vid} autoplay={true} muted={true} width={400} height={200} playing={true} controls={false}/>)}
      </div>
    
      <div className={`${assistant?'smtext':'text'}`}>
        {assistant?('Click on avatar to disable the assistant'):('Click on avatar to activate the assistant. Enjoy!')}
      </div>
      <div className='explain'>{
        assistant===true?(
       userText?.map(text=>{
        return <Typewriter typetext={text?.func} delay={10}/>
       })
        ):("")
      }
      </div>
    </div>
  )
}

export default Video

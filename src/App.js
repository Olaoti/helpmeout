import React,{ useState, useEffect } from "react";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Works from "./Components/Works";
import Video from "./props/video";
import Texts from "./props/Texts";

export const Context = React.createContext()
export const ActionContext = React.createContext()
export const MouseContext = React.createContext()



function App() {
  const [assistant, setAssistant] = useState(false)
  const [act, setAct] = useState('')
  const [mousepos, setMousePos] = useState({})


  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
      setAct(event.target.id)
    };
  
    window.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, [mousepos]);


  return (
    <div className="App">
      <ActionContext.Provider value={[act, setAct]}>
        <Context.Provider value={[assistant,setAssistant]}>
          <MouseContext.Provider value={[mousepos, setMousePos]}>
            <Nav/>
            <Header/>
            <Video/>
            <Features/>
            <Works/>
            <Footer/>
          </MouseContext.Provider>
       
      </Context.Provider>
      </ActionContext.Provider>
      
     
    </div>
  );
}

export default App;

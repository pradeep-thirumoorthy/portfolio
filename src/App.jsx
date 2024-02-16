
import About from './pages/About'
import Skills from './pages/Skills'
import './App.css'
import './pages/contact.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Navbar from './Navbar'
import Contact from './pages/contact'
import { useState } from 'react'
import { ConfigProvider, Drawer,theme } from 'antd'
import Spinner from './pages/spinner'
function App() {
  const [isitopen,setisitopen] = useState(false);
  window.onscroll=()=>{
    console.log("hello");
  }
  const [show,setshow]=useState(false)
  return (
    <>
    <div className={`${(isitopen || show) ? 'dime' : ''}`}>
    <Navbar setisit={() => setisitopen(true)}/>
    </div>
      <div className={`page-component ${(isitopen || show) ? 'dim' : ''}`}>
        
        <div id='Home' ><Home/></div>
        <div id='About'><About/></div>
        <div id='Projects' ><Projects/></div>
        <div id='Skills' ><Skills/></div>
        
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm}}>
        <Drawer  extra={
          <div className='contact-title'>
            <Spinner text={'Contact Me'}/>
          </div>
        } onClose={()=>{setisitopen(!isitopen)}} open={isitopen}>  
        
        <Contact/>
      </Drawer>
      
      </ConfigProvider>
      </div>
    </>
  )
}

export default App

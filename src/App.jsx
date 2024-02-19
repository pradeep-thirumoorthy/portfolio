
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
import Spinner from './pages/Spinner';
import { Analytics } from '@vercel/analytics/react';
function App() {
  const [isitopen,setisitopen] = useState(false);
  return (
    <>
    <div>
    <Navbar setisit={() => setisitopen(true)}/>
    </div>
      <div className={`page-component`}>
        
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
      <Analytics/>
      </div>
    </>
  )
}

export default App

import React from 'react'
import './Home.css'
import Logo from '../../Assets/logo512.png'
import {motion} from 'framer-motion'
import Navbar from '../navbar/Navbar'



function Home() {
  return (
    <div className='mainh'>
    <Navbar/>
    <div className="d">
      <div className="hi">
        <div className="h11c">
        <h1 className='h11'>Hy! I am</h1> 
        </div>
        <h1 className="h111">ABHISHEK R</h1>
        <p className='p'>I am a Full stack developer, specialized in ui/ux design and i do a little bit coding too.  
        </p></div>

      <motion.div
      className='logod'
      initial={{
        scale:0.5
      }}
      
      animate={{
        x:'-300px',
        scale:1
       
      }}
      transition={{
        type:"tween",
        duration:1,
        
      }}
      ><img src={Logo} alt="" className="logo"/></motion.div></div>
    </div>

  )
}

export default Home

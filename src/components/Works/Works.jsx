import React from 'react'
import redmou from '../../Assets/redmou.jpg'
import Navbar from '../navbar/Navbar'
import './Works.css'
import {motion} from 'framer-motion'
import netflix from '../../Assets/Netflix.png'
import fitclub from '../../Assets/Fitclub.png'
import plante from '../../Assets/Plante.png'
import portfolio from '../../Assets/porfolio-html.png'

function Works() {
  return (
    <div className='mainw' >
      <Navbar/>
      <h1 className="hw">WORKS</h1>
     
     <div className="r1">

     <a href="https://github.com/Abhishek8281540004/netflix"><motion.div className="cardw" 
      initial={{
        y:'-150px'
      }}
      animate={{
        y:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
     >
      <img src={netflix} alt="" className="wm" />
      <button className="btnw">Code</button>
      <p className="pw">NETFLIX-UI</p>
    </motion.div></a>
    <a href="https://github.com/Abhishek8281540004/plante"><motion.div className="cardw" 
      initial={{
        y:'150px'
      }}
      animate={{
        y:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
    >
      <img src={fitclub} alt="" className="wm" />
      <button className="btnw1">Code</button>
      
      <p className="pw">FITCLUB</p>
    </motion.div></a>
    <a href="https://github.com/Abhishek8281540004/plante"><motion.div className="cardw"
    initial={{
      y:'150px'
    }}
    animate={{
      y:'0px'
     
    }}
    transition={{
      type:"tween",
      duration:1
    }}
    >
      <img src={plante} alt="" className="wm" />
      <button className="btnw2">Code</button>
      <p className="pw">PLANTE</p>
    </motion.div></a>
    <a href="https://github.com/Abhishek8281540004/personal-website"><motion.div className="cardw" 
     initial={{
      y:'-150px'
    }}
    animate={{
      y:'0px'
     
    }}
    transition={{
      type:"tween",
      duration:1
    }}
    >
      <img src={portfolio} alt="" className="wm" />
      <button className="btnw3">Code</button>
      <p className="pw">PORTFOLIO-HTML</p>
    </motion.div></a>
     </div>

    </div>
  )
}

export default Works

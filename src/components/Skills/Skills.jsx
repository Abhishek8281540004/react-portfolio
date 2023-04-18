import React from 'react'

import './Skills.css'
import js from '../../Assets/javascript.png'
import css from '../../Assets/css.png'
import firebase from '../../Assets/firebase.png'
import github from '../../Assets/github.png'
import python from '../../Assets/python.png'
import tailwind from '../../Assets/tailwind.png'
import mongo from '../../Assets/mongo.png'
import node from '../../Assets/node.png'
import html from '../../Assets/html.png'
import react from '../../Assets/react.png'
import Navbar from '../navbar/Navbar'
import {motion} from 'framer-motion'

function Skills() {
  return (
    <div className='mains' >
      <Navbar/>
      <h1 className="ch">Skills</h1>
       <div className="c">
      <motion.div className="card"
      initial={{
        x:'-100px'
      }}
      animate={{
        x:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
      >
        <img src={node} alt="" className="cimg" />
        <p className="cp">NODE</p>
      </motion.div>
      <motion.div className="card"
       initial={{
        y:'-200px'
      }}
      animate={{
        y:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
      >
        <img src={tailwind} alt="" className="cimg" />
        <p className="cp">TAILWIND</p>
      </motion.div>
      <motion.div className="card" 
       initial={{
        x:'-100px'
      }}
      animate={{
        x:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
      >
        <img src={firebase} alt="" className="cimg" />
        <p className="cp">FIREBASE</p>
      </motion.div>
      <motion.div className="card"
      initial={{
        y:'-200px'
      }}
      animate={{
        y:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
      >
        <img src={js} alt="" className="cimg" />
        <p className="cp">JAVASCRIPT</p>
      </motion.div>
      <motion.div className="card" 
       initial={{
        x:'100px'
      }}
      animate={{
        x:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
      >
        <img src={react} alt="" className="cimg" />
        <p className="cp">REACT</p>
      </motion.div>

      </div>
      <div className="c2">
      <motion.div className="card"
      initial={{
        x:'-200px'
      }}
      animate={{
        x:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
      >
        <img src={css} alt="" className="cimg" />
        <p className="cp">CSS</p>
      </motion.div>
      <motion.div className="card"
       initial={{
        y:'100px'
      }}
      animate={{
        y:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
      >
        <img src={mongo} alt="" className="cimg" />
        <p className="cp">MONGO</p>
      </motion.div>
      <motion.div className="card"
      initial={{
        x:'200px'
      }}
      animate={{
        x:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
      >
        <img src={github} alt="" className="cimg" />
        <p className="cp">GITHUB</p>
      </motion.div>
      <motion.div className="card"
      initial={{
        y:'100px'
      }}
      animate={{
        y:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
      >
        <img src={html} alt="" className="cimg" />
        <p className="cp">HTML</p>
      </motion.div>
      <motion.div className="card"
      initial={{
        x:'200px'
      }}
      animate={{
        x:'0px'
       
      }}
      transition={{
        type:"tween",
        duration:1
      }}
      >
        <img src={python} alt="" className="cimg" />
        <p className="cp">PYTHON</p>
      </motion.div>
      </div>

    </div>
  )
}

export default Skills

import React from 'react'
import Navbar from '../navbar/Navbar'
import './Contact.css'
import {BsInstagram} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {motion} from 'framer-motion'

function Contact() {
  return (
    <div className='mainc' >
      <Navbar/>
      <h1 className="h1c">CONTACT ME</h1>
     <div className="icons">
      <a href="https://instagram.com/abhi___200?igshid=ZDdkNTZiNTM="><BsInstagram className='icon'/></a>
      <a href="https://wa.me/qr/6B43DMOLEI6RN1"><RiWhatsappFill className='icon'/></a>
      <a href="https://github.com/Abhishek8281540004"><BsGithub className='icon'/></a>
      <a href="gmail.com"><SiGmail className='icon'/></a>
      </div>

      <div className="inp">
      <motion.div
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
      ><input className='inp1' type="text" placeholder='Name' /></motion.div>
      <motion.div
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
      ><input className='inp1' type="mail" placeholder='Gmail' /></motion.div>
      <motion.div
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
      ><input className='inp1' type="number" Name  placeholder='Number'/></motion.div>
      <motion.div
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
      ><input className='inp2' type="text" Name placeholder='comment' /></motion.div>
      <div className="b"><button className="btnc">Lets Collaborate</button></div>

      </div>
      
    </div>
    
  )
}

export default Contact

import React from 'react'
import './Navbar.css'



function Navbar() {
  
  return (
    <div className='m'>

      <div className='main' >

        <h1 className='h1'>Abhishek</h1>
        <div className="ud">
        <ul className='ul'>
        <a href="/"><div className='hov'> <li className='li'>Home</li></div></a>
        <a href="/about"><div className='hov'> <li className='li'>About</li></div></a>
        <a href="/skills"> <div className='hov'><li className='li'>Skills</li></div></a>
        <a href="/works"> <div className='hov'><li className='li'>Works</li></div></a>
        <a href="/contact"><div className='hov'><li className='li'>Contact</li></div></a>
        </ul>
        </div>

      </div>
      
    
     
     
    </div>
  )
}

export default Navbar

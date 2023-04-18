import React from 'react'

import Navbar from '../navbar/Navbar'
import './About.css'

function About() {
  return (
    
    <div  className='maina' >
     <Navbar/>
     <h1 className='hb'>ABOUT ME</h1>
     <div className="a">
     <div className="al">
     <h1 className="h1b">HOLA !!!</h1>
     <h2 className="h2b">I am Abhishek. R, 20 year old passionate developer from kerala. currently I am a 2 nd year CSE student at Nehru college of engineering and research centre.</h2>
     </div>
     <div className="line"></div>
     <div className="ar">
     <h2 className="h2b2">sooo i am a full stact web developer specialized on React framework, and i code a little bit python too. Melomaniac, Hodophile and a liitle bit foodie too 😜</h2>
    </div>
    </div>
    </div>
    
  )
}

export default About

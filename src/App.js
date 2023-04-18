import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Works from './components/Works/Works'


function App() {
  return (
    <div>

      
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/works' element={<Works/>}/>
      </Routes>
      </div>
  );
}

export default App;


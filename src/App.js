import React from 'react'
import './App.css'
import Navbar from './navbar.js'


function App(){

  const navmenu=[{title:'Home', link:'#home'},{title:'Services',link: '#service',submenu:[{title:'For entrepeneurs', link:'#entrepeneurs'},{title:'For students', link:'#students'},{title:'For hobbyists', link:'#hobbyists'}]},
{title:'Contact',link: '#contact'}]

  
  return (
    <div>

      <Navbar nav={navmenu}/>

    </div>
  )
}
export default App 
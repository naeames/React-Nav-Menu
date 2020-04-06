import React from 'react'
import './App.css'
const Navbar = (props) => {
    return (
        <ul className='mainmenu'>
            {props.nav.map((element, index) => (
                <div>  {element.submenu ? 
                (<ul className='dropdown-menu'>  <li> <a href={element.link}>  {element.title}   </a></li> 
                        <ul className='dropdown-content'>
                            {element.submenu.map((elt, i) =>
                                (
                                    <li > <a href={element.link}> </a> </li>

                                ))} </ul>

                    </ul>) :  

                    (<li> <a href={element.link}> {element.title} </a> </li>)}
                </div>
            ))}
        </ul>
    )
}
export default Navbar 
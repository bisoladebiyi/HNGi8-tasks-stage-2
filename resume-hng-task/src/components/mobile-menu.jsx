import React from 'react'
import close from "../icons/close.svg"

const MobileMenu = ({show}) => {
  
    return (
        <div className="mobile-menu">
            <button onClick={show} className="close"><img src={close} alt=""/></button>
                <ul className="mobile-menu-items">
                <li><a href="/" onClick={show}>Home</a></li>
                <li><a href="#experiences" onClick={show}>Experiences</a></li>
                <li><a href="#skills" onClick={show}>Skills</a></li>
                <li><a href="#education" onClick={show}>Education</a></li>
                
            </ul>
            
        </div>
    )
}

export default MobileMenu

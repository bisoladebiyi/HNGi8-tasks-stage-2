import React from 'react'
import hamburger from '../icons/icon-hamburger.svg'

const   Navbar = ({ show }) => {
    return (
        <div className="navbar">
                <div className="nav">
            <a href="https://zuri.team/">
                <img className="logo" src="https://internship.zuri.team/static/media/logo.36d2d48a.svg" alt=""/>
            </a>
            <ul className="nav-items">
                <li><a href="/">Home</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                
            </ul>
            <button onClick={show}><img className="menu" src={hamburger} alt=""/></button>
        </div>

        </div>
    
    )
}

export default Navbar

import React from 'react'
import globe from '../icons/globe.svg'
import github from '../icons/github.svg'
import mail from '../icons/mails.svg'
import linkedin from '../icons/linkedin.svg'

const Footer = () => {
    return (
        <div className="footer"><br />
            <div className="footer-content">
            <p>Code by Abisola</p>
                <div className="icons">
                    <a href="http://beebee-portfolio.herokuapp.com/" target="_blank" rel="noreferrer"><img className="icon" src={globe} alt=""/></a>
                    <a href="https://github.com/bisoladebiyi" target="_blank" rel="noreferrer"><img className="icon" src={github} alt=""/></a>
                    <a href="https://www.linkedin.com/in/abisolaadebiyi/" target="_blank" rel="noreferrer"><img className="icon" src={linkedin} alt=""/></a>
                    <a href="mailto:abisola.ca@gmail.com" target="_blank" rel="noreferrer" ><img className="icon" src={mail} alt=""/></a>
                
                
                
                
                </div>
                <div className="zuriteam-link">
                    <img className="logo" src="https://internship.zuri.team/static/media/logo.36d2d48a.svg" alt=""/><br />
                    <a href="https://zuri.team/">Visit The Zuri Team Website</a>
                </div>
                
            </div>
      
          
  
        </div>
    )
}

export default Footer

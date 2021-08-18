import React from 'react'
import experiences from "../experiences"

const Experiences = () => {
    return (
        <div className="experiences" id="experiences">
            <h3 className="section-heading">Experiences</h3>
            <div className="experience-container">
               {experiences.map(({ place, date, desc, id })=> {
                   return(
                       <div key={id} className="experience">
                           <h5 className="place">{place}</h5>
                           <p className="date">{date}</p>
                           <p className="desc">{desc}</p>
                       </div>
                   )
               })}
            </div>

            
            
        </div>
    )
}

export default Experiences

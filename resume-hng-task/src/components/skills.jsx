import React from 'react'
import arrow from "../icons/left-arrow.svg"

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h3 className="section-heading skill-pseudo">Skills</h3>
            <div className="tech-soft-skills">
                <div>
                    <h4>Technical Skills</h4>
                    <div className="skill">
                        <img className="arrow" src={arrow} alt=""/>
                    <p>HTML</p>
                    </div>
                    <div className="skill">
                    <img className="arrow" src={arrow} alt=""/>
                    <p>CSS</p>
                    </div>
                    <div className="skill">
                    <img className="arrow" src={arrow} alt=""/>
                    <p>Javascript</p>
                    </div>
                   <div className="skill">
                   <img className="arrow" src={arrow} alt=""/>
                   <p>jQuery</p>
                   </div>
                    <div className="skill">
                    <img className="arrow" src={arrow} alt=""/>
                    <p>Tailwind</p>
                    </div>
                    <div className="skill">
                    <img className="arrow" src={arrow} alt=""/>
                    <p>React.js</p>
                    </div>
                    <div className="skill">
                    <img className="arrow" src={arrow} alt=""/>
                    <p>Node.js</p>
                    </div>
                </div>
                <div>
                    <h4>Soft Skills</h4>
                    <div className="skill">
                        <img className="arrow" src={arrow} alt=""/>
                    <p>Team Player</p>
                    </div>
                    <div className="skill">
                    <img className="arrow" src={arrow} alt=""/>
                    <p>Open to Feedback</p>
                    </div>
                    <div className="skill">
                    <img className="arrow" src={arrow} alt=""/>
                    <p>Good Communication (Verbal and Written)</p>
                    </div>
                    <div className="skill">
                    <img className="arrow" src={arrow} alt=""/>
                    <p>Good Listener</p>
                    </div>
                    <div className="skill">
                    <img className="arrow" src={arrow} alt=""/>
                    <p>Continuous Learner</p>
                    </div>
                    <div className="skill">
                    <img className="arrow" src={arrow} alt=""/>
                    <p>Ability to meet deadlines</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

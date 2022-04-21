import React from 'react'
import './experience.css'
import {BsShieldFillCheck} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsShieldFillCheck className='experience-details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className='experience-details'>
              <BsShieldFillCheck className='experience-details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className='experience-details'>
              <BsShieldFillCheck className='experience-details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience-details'>
              <BsShieldFillCheck className='experience-details-icon'/>
              <h4>Bootstrap</h4>
            </article>
            <article className='experience-details'>
              <BsShieldFillCheck className='experience-details-icon'/>
              <h4>React</h4>
            </article>
          </div>
        </div>

        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsShieldFillCheck className='experience-details-icon'/>
              <h4>Ruby</h4>
            </article>
            <article className='experience-details'>
              <BsShieldFillCheck className='experience-details-icon'/>
              <h4>Ruby on Rails</h4>
            </article>
            <article className='experience-details'>
              <BsShieldFillCheck className='experience-details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience-details'>
              <BsShieldFillCheck className='experience-details-icon'/>
              <h4>MySQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

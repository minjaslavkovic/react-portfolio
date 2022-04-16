import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {FaRegFolderOpen} from 'react-icons/fa'
import {MdOutlineWorkOutline} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <MdOutlineWorkOutline className='about-icon'/>
            <article className='about-card'>
              <h5>Experience</h5>
              <small></small>
            </article>

            <article className='about-card'>
              <FaRegFolderOpen className='about-icon'/>
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio, sequi dolorum ea eligendi fugit? Saepe, quos commodi? Minus doloremque quas porro soluta perspiciatis recusandae laborum atque totam quisquam obcaecati!
          </p>

          <a href="#contact" classNmae='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About

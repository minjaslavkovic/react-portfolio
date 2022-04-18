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
            <article className='about-card'>
              <MdOutlineWorkOutline className='about-icon'/>
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
          Hi, I'm Minja. I recently finished a full-stack web development bootcamp at Le Wagon, London. I've learned so much during 9 intense weeks at the bootcamp. The thing I love the most about coding is that I'm still discovering and learning new stuff everyday! I'm currently looking for a junior web development job and I'm also working on my new projects.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About

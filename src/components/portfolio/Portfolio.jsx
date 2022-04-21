import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container-portfolio">
        <article className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={IMG1} alt="BandMates" />
          </div>
          <h3>Title</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={IMG2} alt="VenuLet" />
          </div>
          <h3>Title</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={IMG3} alt="Watch List" />
          </div>
          <h3>Title</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio

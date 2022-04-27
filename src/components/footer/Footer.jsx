import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>MS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-scoails">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><BsGithub/></a>
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer

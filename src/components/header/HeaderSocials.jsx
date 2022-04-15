import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href="https://linkedin.com" target="https://www.linkedin.com/in/minja-slavkovic/"><BsLinkedin/></a>
      <a href="https://github.com" target="https://github.com/minjaslavkovic"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials

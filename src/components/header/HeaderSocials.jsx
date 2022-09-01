import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="http://linkedin.com" target='_blank'><AiFillLinkedin/></a>
        
        <a href="http://github.com" target='_blank'><AiFillGithub/></a>
        
        <a href="http://instagram.com" target='_blank'><AiFillInstagram/></a>
        
    </div>
  )
}

export default HeaderSocials
import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">AmansH</a>
      <ul className="permalinks">
        <li><a href="#">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
      
      <div className="footer_socials">
        <a href="https://linkedin.com" ><AiFillLinkedin/></a>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; Aman Sharma Portfolio. All rights reserved.
        </small>
      </div>

    </footer>
  )
}

export default footer
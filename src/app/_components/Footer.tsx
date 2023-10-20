import React from 'react'
import Image from 'next/image'
import {FaFacebook} from 'react-icons/Fa'
import {FaSquareInstagram} from 'react-icons/fa6'
import {IoLogoLinkedin} from 'react-icons/io'
import {CgWebsite} from 'react-icons/cg'


const Footer = () => {
  return (
   <>




  <footer className="footer max-w-[100%] sm:max-w[390px]">
    <div className="waves">
      <div className="wave"  id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <FaFacebook/>
        
        
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
        <FaSquareInstagram/>
          
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
        <IoLogoLinkedin/>
          
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
       
         
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>

    </ul>
    <p>&copy;2023 Niral-Thiral | At Annad Institute of Higher Technology</p>
  </footer>
  



   
   </>
  )
}

export default Footer;
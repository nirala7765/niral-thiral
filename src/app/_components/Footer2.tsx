import React from 'react'
import Image from 'next/image'
import {FaFacebook} from 'react-icons/Fa'
import {FaSquareInstagram} from 'react-icons/fa6'
import {IoLogoLinkedin} from 'react-icons/io'
import {BsTwitter} from 'react-icons/bs'



const Footer2 = () => {
  return (
    <div className="footer">
    <div className="waves">
      <div className="wave"  id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <div className="content">
      <div className="services">
        <h4>Events</h4>
        <p><a href="#">Technical</a></p>
        <p><a href="#">Non-Technical</a></p>
        <p><a href="#">Competition</a></p>
        <p><a href="#">Culturals</a></p>
      </div>
      <div className="social-media">
        <h4>Social</h4>
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
        <BsTwitter/>
       
         
        </a></li>
    </ul>
      </div>
      <div className="links">
        <h4>Quick links</h4>
        <p><a href="#">Home</a></p>
        <p><a href="#">About</a></p>
        <p><a href="#">Blogs</a></p>
        <p><a href="#">Contact</a></p>
      </div>
      <div className="details">
        <h4 className="address">Address</h4>
        <p>
        Anand Institute oF Higher Technology,<br />
        R69H+8C6, Kalasalingam Nagar IT Corridor,<br />
        Rajiv Gandhi Salai, Road, Kazhipattur,<br />
        Tamil Nadu-603103.
        </p>
        <h4 className="mobile">Mobile</h4>
        <p><a href="#">044-27471320</a></p>
        <h4 className="mail">Email</h4>
        <p><a href="#">principal@aiht.ac.in</a></p>
      </div>
    </div>
    <footer>
      <hr />
      © 2023 Niral-Thiral | At Anand Institute of Higher Technology
    </footer>
  </div>

  )
}

export default Footer2
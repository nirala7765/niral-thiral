import React from 'react'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/Fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'



const Footer2 = () => {
    return (
        <div className="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <div className="content">

                <div className="social-media">
                   
                    <ul className="social-icon">
                        <li className="social-icon__item"><a className="social-icon__link" href="#">
                            <FaFacebook />


                        </a></li>
                        <li className="social-icon__item"><a className="social-icon__link" href="#">
                            <FaSquareInstagram />

                        </a></li>
                        <li className="social-icon__item"><a className="social-icon__link" href="#">
                            <IoLogoLinkedin />

                        </a></li>
                        <li className="social-icon__item"><a className="social-icon__link" href="#">
                            <BsTwitter />




                        </a></li>
                    </ul>
                </div>

                <div className="details">


                    <p><a href="#">044-27471320</a></p>

                    <p><a href="#">principal@aiht.ac.in</a></p>



                </div>
            </div>
            <footer>
                <hr />
                © 2023 Niral-Thiral | @ AIHT
            </footer>
        </div>

    )
}

export default Footer2
import React from 'react'
import './footer.css';
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2024 Your E-Learning Platform. All rights reserved. <br />
                 <a href=''></a>
            </p>

            <div className="social-links">
                <a href=''><IoLogoFacebook/></a>
                <a href=''><AiFillTwitterCircle/></a>
                <a href=''><BsInstagram/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer

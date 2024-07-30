import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
     <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      >
        <a href='https://www.instagram.com/mr_prathu__18/?hl=en' className="items">
          <FaInstagram className="icons"/>
        </a>
        <a href='https://www.facebook.com/prathamesh.narawade.5' className="items">
          <CiFacebook className="icons"/>
        </a>
        <a href='https://www.linkedin.com/in/prathamesh-narawade-bb5036284/' className="items">
          <CiLinkedin className="icons"/>
        </a>
        <a href='https://x.com/Prathamesh3326' className="items">
          <FaSquareXTwitter className="icons"/>
        </a>
        <a href='https://github.com/Pratham-3326' className="items">
          <FaGithubSquare className="icons"/>
        </a>
        <a href='mailto:prathameshnarawade3326@gmail.com' className="items">
          <SiGmail className="icons"/>
        </a>
      </div>
     </div>
    </>
  )
}

export default Contact

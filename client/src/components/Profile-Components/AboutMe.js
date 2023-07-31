import React from "react";
import '../../styles/aboutme.css';
import myImage from '../../images/akhil.JPG'

export const AboutMe = () => {
  return (
    <div className="main-div-content">
      <div className="left-div">
        <img src={myImage}></img>
      </div>

      <div className="right-div">
        <span id="name">Akhil Maddineni</span>
        <span className="role">Software Developer & Full-Stack Developer</span>
        <span className="collage">Student of Indian Institute of Information Technology Design & Manufacturing, Kancheepuram, Chennai</span>
        <span className="address">Address:</span>
        <span>Ongole, Andhra Pradesh, India.</span>
        <span className="email">Email:</span>
        <span>akhil.maddineni23@gmail.com</span>
        <span className="phoneNo">Phone No:</span>
        <span>+916303795054</span>
      </div>
    </div>
  );
};

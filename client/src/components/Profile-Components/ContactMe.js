import React from 'react'
import '../../styles/contactme.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ContactMe = () => {
  const externalLink1 = 'https://www.linkedin.com/in/akhil-maddineni-b778141a0/'; 
  const externalLink2 = 'https://www.instagram.com/akhil_maddineni23/';
  const externalLink3 = 'https://github.com/Akhil-Maddineni23';

  return (
    <div className='main-div-contact-content'>
        <div className="inner-contact-div">
        <span id="name">Akhil Maddineni</span>
        <span className="role">Software Developer & Full-Stack Developer</span>
        <span className="address">Address:</span>
        <span>Ongole, Andhra Pradesh, India.</span>
        <span className="email">Email:</span>
        <span>akhil.maddineni23@gmail.com</span>
        <span className="phoneNo">Phone No:</span>
        <span>+916303795054</span>
        <div className='contact-line'></div>
        <div className='contact-icons'>
          <LinkedInIcon style={{ fontSize: "35px"}} onClick={() => window.open(externalLink1, '_blank')} />
          <InstagramIcon style={{ fontSize: "35px"}} onClick={() => window.open(externalLink2, '_blank')}/>
          <GitHubIcon style={{ fontSize: "35px"}} onClick={() => window.open(externalLink3, '_blank')}/>
        </div>

      </div>
    </div>
  )
}

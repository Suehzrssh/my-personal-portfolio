import React from 'react';
import '../styles/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <div className='icons'>
        <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/suleyman-the-magnificent-b767b4322?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQGm%2BVA8hRli6JLI65AK%2BZg%3D%3D'><LinkedInIcon className='icon in'/></a>
        <a rel='noreferrer' target='_blank' href='https://github.com/Suehzrssh'><GitHubIcon className='icon hub'/></a>
        <a rel='noreferrer' target='_blank' href='https://www.instagram.com/ceiroin/'><InstagramIcon className='icon ig'/></a>
        <a rel='noreferrer' target='_blank' href='https://www.facebook.com/profile.php?id=61564496350751'><FacebookIcon className='icon face'/></a>
        </div>
        <p> &copy; 2024 suleyman.com</p>
        </div>
    </div>
  )
}

export default Footer;
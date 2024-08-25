import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home' >
      <div className='about'>
        <h2>Hi! My Name is Suleyman</h2>
        <div className='prompt' >
          <p>I am a software developer with a passion for creating and learning</p>
          
         <div className='homeIcons'>
          <a rel='noreferrer' target='_blank' href='https://github.com/Suehzrssh'><GitHubIcon className='homeIcon'/></a>
          <a rel='noreferrer' target='_blank' href='https://www.facebook.com/profile.php?id=61564496350751'><FacebookIcon className='homeIcon'/></a>
          <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/suleyman-the-magnificent-b767b4322?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQGm%2BVA8hRli6JLI65AK%2BZg%3D%3D'><LinkedInIcon className='homeIcon'/></a>
         </div>
        </div>
      </div>
      <div className='skills'>
        <ol className='list'>
          <h2>SKILLS</h2>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              HTML, CSS, JS, React, React Native, Angular, NPM, Bootstrap, Yarn, Material UI, Font Awesome, StyledComponents
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              Node JS, Express JS, Sequelize, SQL, MySQL, MongoDB
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              javaScript, C, C++, C#, TypeScript
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import StreetviewIcon from '@mui/icons-material/Streetview';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import gta from '../images/gta.jpg'

const Navbar = () => {
  return (
    <div className='myNav'>
      <img src={gta} style={{width: '100%'}} alt='#' className='er-murazor'/>
        <div className='links'>
          <div className='link homeico'>
          <HomeIcon className='ico'/>
          <Link to='/'>Home</Link>
          </div>
          <div className='link'>
          <StreetviewIcon className='ico'/>
          <Link to='/projects'>Projects</Link>
          </div>
          <div className='link'>
          <PersonSearchIcon className='ico'/>
          <Link to='experience'>Experience</Link>
          </div>
        
        
        
        </div>
        <div className='minNavbar'>
        <Link to='/'><HomeIcon className='icon'/></Link>
        <Link to='/projects'><StreetviewIcon className='icon'/></Link>
        <Link to='experience'><PersonSearchIcon className='icon'/></Link>
        </div>
    </div>
  )
}

export default Navbar;
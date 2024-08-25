import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Projects.css";

const ProjectItem = ({name, image, id}) => {
  const navigate = useNavigate();
  return (
    <div className='ProjectItem' onClick={() => {navigate('/project/' + id)}}>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h2>{name}</h2>

    </div>
  )
}

export default ProjectItem;
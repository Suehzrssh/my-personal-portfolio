import React from 'react';
import { useParams } from 'react-router-dom';
import {ProjectList} from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
    const {id} = useParams();
    const project = ProjectList[id];
  return (
    <div className='project'>
        <div className='projectDisplay'>
        <h2>{project.name}</h2>
        <img src={project.image}/>
        <p><b>Skills:</b> {project.skill}</p>
        <h4>Source Code: <a rel='noreferrer' target='_blank' href='https://github.com/Suehzrssh'><GitHubIcon className='hubproject'/></a></h4>
        </div>
    </div>
  )
}

export default ProjectDisplay
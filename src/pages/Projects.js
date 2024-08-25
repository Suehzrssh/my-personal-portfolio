import React from 'react';
import {ProjectList} from '../helpers/ProjectList';
import ProjectItem from '../components/ProjectItem';
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className='Projects'>
      <div className='projectsBody'>
      <h1>my Personal projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image}/>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default Projects
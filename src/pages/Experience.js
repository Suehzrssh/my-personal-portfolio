import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className='experience'>
      <div className='bodyExperience'>
<VerticalTimeline>
<VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(5, 18, 29)', color: '#fff' }}
    date="2014 - 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Yunus Emre Anatolian High School</h3>
    <h4 className="vertical-timeline-element-subtitle">High School</h4>
    <p>
       Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(5, 18, 29)', color: '#fff' }}
    date="April 2016"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web</h3>
    <p>
      Web Sites
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(5, 18, 29)', color: '#fff' }}
    date="September 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Started at University</h3>
    <h4 className="vertical-timeline-element-subtitle">Istanbul, TR</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    date="2019 - 2021"
    iconStyle={{ background: 'rgb(5, 18, 29)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Back-End, MySQL, MongoDB</h3>
    <h4 className="vertical-timeline-element-subtitle">Bingöl, TR</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    date="December - 2022"
    iconStyle={{ background: 'rgb(5, 18, 29)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Full-Stack, Web Design</h3>
    <h4 className="vertical-timeline-element-subtitle">Bingöl, TR</h4>
    <p>
      Creative Web Sites, User Experience
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - present"
    iconStyle={{ background: 'rgb(5, 18, 29)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Developer, Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Istanbul, TR</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management
    </p>
  </VerticalTimelineElement>
  
  
  
  
  
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience;
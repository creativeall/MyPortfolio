import React from 'react';
 
import './Project.css';
 
const Project = (props) => {
  return (
    <>
       <div className='project-card'>
            <img src={props.imgsrc} alt='' />
            <h2 className='project-title text-primary'> {props.title}</h2>
            <div className='pro-details'>
              <p className='text-primary'>{props.text}</p>
              
            </div>
          </div>
    </>
  )
}

export default Project;

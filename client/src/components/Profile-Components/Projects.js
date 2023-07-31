import React from 'react'
import '../../styles/projects.css';
import { projects } from '../../Data/data';

export const Projects = () => {
  return (
    <div className='main-div-project-content'>
      {
        projects.map((project , index) => (
          <div className="inner-project-div" key = {index}>
            <div className="left-project-div">
              <span className="projectName">{ project.title}</span>
              <a href={project.appLink} target="_blank">{project.appLink}</a>
            </div>
            <div className="project-line"></div>
            <div className="right-project-div">
              <span className="data">
              { project.description}
              </span>
              <span className="tools">Tools Used:</span>
              <span>{project.tools}</span>
            </div>
          </div>
        ))
      }
       
    </div>
  )
}
/*
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from "@mui/icons-material/Delete";
<div className="delete-project">
<DeleteIcon style={{ fontSize: "50px", color: "black" }} />
</div>

<div className="addProject">
<NoteAddIcon style={{ fontSize: "50px", color: "#000000" , marginBottom:"20px" }} />
</div>
*/

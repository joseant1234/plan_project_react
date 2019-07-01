import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Details</p>
        </div>
        <div className="card-action gret ligthen-4 grey-text">
          <div>Posted by Author</div>
          <div>Fecha</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

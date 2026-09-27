import React from 'react';

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project-list__item" key={index}>
          <img
            className="project-list__img"
            src={project.img}
            alt={project.category}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
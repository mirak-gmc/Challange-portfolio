import React from "react";

/**
 * Props = { project : Object }
 */

const ProjectCard = (props) => {
  // Props = { project : { projectName , imgSrc}}
  return (
    <div class="project-card">
      <img src={props.project.imgSrc} alt={props.project.projectName} />
      <p>{props.project.projectName}</p>
      <p>
        Github <a href="#">Link</a>
      </p>
    </div>
  );
};

export default ProjectCard;

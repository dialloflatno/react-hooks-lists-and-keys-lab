import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectArry = projects.map(project => <ProjectItem
    id={project.id}
    name={project.name}
    about={project.about}
    technologies={project.technologies}
  />);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectArry}
      </div>
    </div>
  );
}

export default ProjectList;

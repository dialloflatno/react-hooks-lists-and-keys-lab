import React from "react";

function ProjectItem({ name, about, technologies }) {
 const techProject = technologies.map(tech => {
   return(
   <><span id="1">{tech}</span></>)
 })

  return (
    <div className="project-item">
      <h3 id= "1">{name}</h3>
      <span id = "2">{about}</span>
      <div className="technologies">
      {techProject}
        {/* <span id = "1"> {[...technologies][0]}</span>
        <span id = "2"> {[...technologies][0,[1]]}</span>
        <span id = "3"> {[...technologies][0,[1],[2]]}</span> */}
     </div>
    </div>
  );
}

export default ProjectItem;

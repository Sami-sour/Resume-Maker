import React, { useState } from "react";

export const ProjectOutput = () => {
  const [personProject] = useState(() => {
    return JSON.parse(localStorage.getItem("newProject")) || [];
  });

  return (
    <>
      {" "}
      <h2 className="project-header">Project Output</h2>
      {personProject?.map((pro) => (
        <div className="person-project" key={pro.id}>
          <div className="person-project-name">{pro.projectName}</div>

          <div className="person-project-work">
            <div className="project-links">
              <a href={pro.link}>{pro.link}</a>
            </div>
            <div className="language-used">{pro.usedTechnology}</div>
          </div>

          <div className="person-project-descrp">{pro.descrip}</div>
        </div>
      ))}
    </>
  );
};

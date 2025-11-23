import React, { useEffect, useState } from "react";

const Project = () => {
  const [project, setProject] = useState(() => {
    const saveProject = localStorage.getItem("newProject");
    return saveProject
      ? JSON.parse(saveProject)
      : [
          {
            id: crypto.randomUUID(),
            projectName: "",
            link: "",
            usedTechnology: "",
            descrip: "",
          },
        ];
  });

  const handleOnChangeEvent = (e, id) => {
    const { name, value } = e.target;
    setProject((prev) =>
      prev.map((pro) => (pro.id === id ? { ...pro, [name]: value } : pro))
    );
  };

  useEffect(() => {
    localStorage.setItem("newProject", JSON.stringify(project));
  }, [project]);

  const handleOnMoreProject = () => {
    setProject([
      ...project,
      {
        id: crypto.randomUUID(),
        projectName: "",
        link: "",
        usedTechnology: "",
        descrip: "",
      },
    ]);
  };

  const handleOnProjectDelete = (id) => {
    const removeProject = project.filter((pro) => pro.id !== id);
    setProject(removeProject);
  };

  return (
    <>
      <h1 className="header-four">Project</h1>
      {project.map((pro, index) => (
        <div className="project-section" key={pro.id}>
          <div className="project-box">
            <div className="project-name">
              <label htmlFor={`name-${index}`}>Name of the Project</label>
              <br />
              <input
                type="text"
                placeholder="Weather"
                id={`name-${index}`}
                autoComplete="name"
                name="projectName"
                className="name"
                value={pro.projectName}
                onChange={(e) => handleOnChangeEvent(e, pro.id)}
              />
            </div>

            <div className="project-link">
              <label htmlFor={`link-${index}`}>Link for the Project</label>
              <br />
              <input
                type="text"
                placeholder="https://myProfile.github.io/myProject"
                id={`link-${index}`}
                name="link"
                className="link"
                value={pro.link}
                onChange={(e) => handleOnChangeEvent(e, pro.id)}
              />
            </div>
          </div>

          <div className="technology-box">
            <label htmlFor={`technology-${index}`}>Technologies Used</label>
            <br />
            <input
              type="text"
              placeholder="HTML, CSS, Javascript, ReactJS"
              id={`technology-${index}`}
              name="usedTechnology"
              className="technology"
              value={pro.usedTechnology}
              onChange={(e) => handleOnChangeEvent(e, pro.id)}
            />
          </div>

          <div className="description">
            <label htmlFor={`descrip-${index}`}>
              Description of your project
            </label>
            <br />
            <textarea
              name="descrip"
              id={`descrip-${index}`}
              className="descrip"
              placeholder="Your Project's  Description...."
              value={pro.descrip}
              onChange={(e) => handleOnChangeEvent(e, pro.id)}
            />
          </div>

          <div className="project-btn">
            <div className="project-add-btn">
              <button className="add-project" onClick={handleOnMoreProject}>
                Add
              </button>
            </div>

            <div className="project-delete-btn">
              {project.length > 1 && (
                <button
                  className="delete-project"
                  onClick={() => handleOnProjectDelete(pro.id)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;

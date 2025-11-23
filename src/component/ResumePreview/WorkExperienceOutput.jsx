import React, { useState } from "react";

const WorkExperienceOutput = () => {
  const [personWork] = useState(() => {
    return JSON.parse(localStorage.getItem("personWorks")) || [];
  });

  return (
    <>
      <h2 className="person-experience">Work Experience</h2>
      {personWork?.map((exp) => (
        <div className="work-div" key={exp.id}>
          <p className="person-position">{exp.position}</p>
          <p className="person-company">{exp.company}</p>

          <div className="person-time-period-place">
            <div className="person-time-period">
              {exp.from}-{exp.to}
            </div>
            <div className="person-work-place">{exp.city}</div>
          </div>

          <div className="person-accomp">{exp.accomp}</div>
        </div>
      ))}
    </>
  );
};

export default WorkExperienceOutput;

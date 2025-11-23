import React, { useState } from "react";

const EducationOutput = () => {
  const [personEducation] = useState(() => {
    return JSON.parse(localStorage.getItem("newEdu")) || [];
  });

  return (
    <>
      <h2 className="education-header">Education</h2>

      {personEducation?.map((edu) => (
        <div className="education-output" key={edu.id}>
          <div className="education-name">{edu.eduDegree}</div>

          <div className="education-place">{edu.eduCollege}</div>
          <div className="education-time-period">
            {edu.eduFrom} - {edu.eduTo}
          </div>
        </div>
      ))}
    </>
  );
};

export default EducationOutput;

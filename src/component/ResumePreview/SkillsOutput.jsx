import React, { useState } from "react";

const SkillsOutput = () => {
  const [personSkills] = useState(() => {
    return JSON.parse(localStorage.getItem("personSkills")) || [];
  });

  return (
    <>
      <h2 className="person-skills">Skills</h2>
      <div className="skills-info">{personSkills?.skills}</div>
    </>
  );
};

export default SkillsOutput;

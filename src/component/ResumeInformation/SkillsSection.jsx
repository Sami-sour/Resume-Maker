import React, { useEffect, useState } from "react";

const SkillsSection = () => {
  const [skills, setSkills] = useState(() => {
    const saveSkills = localStorage.getItem("personSkills");
    return saveSkills
      ? JSON.parse(saveSkills)
      : {
          skills: "",
        };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkills({ ...skills, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem("personSkills", JSON.stringify(skills));
  }, [skills]);

  return (
    <>
      <h1 className="header-two">Skills</h1>
      <div className="skill-section">
        <label htmlFor="skills">Skills</label>
        <br />
        <input
          type="text"
          placeholder="HTML, CSS, Javascript"
          id="skills"
          name="skills"
          className="skills"
          value={skills.skills}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SkillsSection;

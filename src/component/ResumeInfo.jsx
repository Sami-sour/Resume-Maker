import React from "react";
import PersonalInformation from "./ResumeInformation/PersonalInformation";
import SkillsSection from "./ResumeInformation/SkillsSection";
import WorkExperience from "./ResumeInformation/WorkExperience";
import Project from "./ResumeInformation/Project";
import Education from "./ResumeInformation/Education";

const ResumeInfo = () => {
  return (
    <>
      <PersonalInformation />
      <SkillsSection />
      <WorkExperience />
      <Project />
      <Education />
    </>
  );
};

export default ResumeInfo;

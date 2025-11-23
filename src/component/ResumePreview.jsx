import React from "react";
import PersonalInfoOutput from "./ResumePreview/PersonalInfoOutput";
import SkillsOutput from "./ResumePreview/SkillsOutput";
import WorkExperienceOutput from "./ResumePreview/WorkExperienceOutput";
import { ProjectOutput } from "./ResumePreview/ProjectOutput";
import EducationOutput from "./ResumePreview/EducationOutput";

const ResumePreview = () => {
  return (
    <>
      <PersonalInfoOutput />
      <SkillsOutput />
      <WorkExperienceOutput />
      <ProjectOutput />
      <EducationOutput />
    </>
  );
};

export default ResumePreview;

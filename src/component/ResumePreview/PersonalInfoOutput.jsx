import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const PersonalInfoOutput = () => {
  const [personalInformation] = useState(() => {
    return JSON.parse(localStorage.getItem("personalInformation")) || [];
  });

  return (
    <>
      {" "}
      <h1 className="person-name">{personalInformation?.personName}</h1>
      <p className="person-work">{personalInformation?.personJobTitle}</p>
      <p className="person-summary">{personalInformation?.summary}</p>
      <hr />
      <div className="personal-info">
        <div className="email-address">
          <div className="email-icon">
            <MdEmail />
          </div>

          <div className="person-email">{personalInformation?.email}</div>
        </div>

        <div className="phone-contact">
          <div className="phone-information">
            <FaPhone />
          </div>
          <div className="person-phone">{personalInformation?.phone}</div>
        </div>

        <div className="linkedIn-address">
          <div className="linkedIn-icon">
            {" "}
            <FaLinkedin />
          </div>
          <div className="person-linkedIn">
            <a href={personalInformation?.linkedin}>
              {personalInformation?.linkedin}
            </a>
          </div>
        </div>

        <div className="github-address">
          <div className="github-icon">
            <FaGithub />
          </div>
          <div className="person-github-link">
            <a href={personalInformation?.github}>
              {personalInformation?.github}
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default PersonalInfoOutput;

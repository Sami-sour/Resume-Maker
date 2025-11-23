import React, { useEffect, useState } from "react";

const PersonalInformation = () => {
  const [personalInfo, setPersonalInfo] = useState(() => {
    const personInfo = localStorage.getItem("personalInformation");
    return personInfo
      ? JSON.parse(personInfo)
      : {
          personName: "",
          personJobTitle: "",
          personSummary: "",
          email: "",
          phone: "",
          linkedin: "",
          github: "",
        };
  });

  const handlEvent = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem("personalInformation", JSON.stringify(personalInfo));
  }, [personalInfo]);

  return (
    <>
      {" "}
      <h1 className="header-one">Personal Information</h1>
      <form action="">
        <div className="full-name-box">
          <label htmlFor="full-name">Full Name</label>
          <br />
          <input
            type="text"
            placeholder="Full Name"
            id="full-name"
            name="personName"
            className="full-name"
            onChange={handlEvent}
            value={personalInfo.personName}
          />
        </div>

        <div className="title-box">
          <label htmlFor="title-name">Title</label>
          <br />
          <input
            type="text"
            placeholder="Frontedend Development"
            id="title-name"
            name="personJobTitle"
            onChange={handlEvent}
            value={personalInfo.personJobTitle}
            className="title-name"
          />
        </div>

        <div className="summary-box">
          <label htmlFor="summary">Professional Summary</label>
          <br />
          <textarea
            name="personSummary"
            value={personalInfo.personSummary}
            id="summary"
            className="summary"
            placeholder="Your Profesional Summary id here......"
            onChange={handlEvent}
          ></textarea>
        </div>

        <div className="contact-info">
          <div className="email-info">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={personalInfo.email}
              onChange={handlEvent}
              placeholder="abcd@gmail.com"
              className="email"
            />
          </div>

          <div className="phone-info">
            <label htmlFor="phone">Phone</label>
            <br />
            <input
              type="number"
              name="phone"
              value={personalInfo.phone}
              onChange={handlEvent}
              id="phone"
              autoComplete="phone"
              placeholder="+91 1234567890"
              className="phone"
            />
          </div>
        </div>

        <div className="social-info">
          <div className="linkedIn-info">
            <label htmlFor="linkedIn">LinkedIn</label>
            <br />
            <input
              type="text"
              placeholder="linkedin.com/myProfile"
              id="linkedIn"
              name="linkedin"
              value={personalInfo.linkedin}
              onChange={handlEvent}
              className="linkedIn"
            />
          </div>

          <div className="github-info">
            <label htmlFor="github">GitHub</label>
            <br />
            <input
              type="text"
              placeholder="github.com/myProfile"
              id="github"
              name="github"
              value={personalInfo.github}
              onChange={handlEvent}
              className="github"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalInformation;

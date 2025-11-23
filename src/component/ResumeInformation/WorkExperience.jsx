import React, { useEffect, useState } from "react";

const WorkExperience = () => {
  const [experience, setExperience] = useState(() => {
    try {
      const saveWork = localStorage.getItem("personWorks");
      return saveWork
        ? JSON.parse(saveWork)
        : [
            {
              id: crypto.randomUUID(),
              position: "",
              company: "",
              from: "",
              to: "",
              city: "",
              accomp: "",
            },
          ];
    } catch {
      return [
        {
          id: crypto.randomUUID(),
          position: "",
          company: "",
          from: "",
          to: "",
          city: "",
          accomp: "",
        },
      ];
    }
  });

  const handleOnChange = (e, id) => {
    const { name, value } = e.target;
    setExperience((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [name]: value } : exp))
    );
  };

  const handleOnAddBtnClicked = () => {
    setExperience([
      ...experience,
      {
        id: crypto.randomUUID(),
        position: "",
        company: "",
        from: "",
        to: "",
        city: "",
        accomp: "",
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("personWorks", JSON.stringify(experience));
  }, [experience]);

  const handleOnDeleteButton = (id) => {
    const removeExperience = experience.filter((exp) => exp.id !== id);
    setExperience(removeExperience);
  };

  return (
    <>
      {" "}
      <h1 className="header-three">WorkExperience</h1>
      {experience.map((exp, index) => (
        <div className="work-section-box" key={exp.id}>
          <div className="work-section">
            <div className="work-position">
              <label htmlFor={`position-${index}`}>Work Position</label>
              <br />
              <input
                type="text"
                name="position"
                placeholder="Software Developer"
                id={`position-${index}`}
                value={exp.position}
                onChange={(e) => handleOnChange(e, exp.id)}
                className="position"
              />
            </div>

            <div className="work-company">
              <label htmlFor={`company-${index}`}>Work Company</label>
              <br />
              <input
                type="text"
                placeholder="Samsung"
                name="company"
                id={`company-${index}`}
                autoComplete="company"
                onChange={(e) => handleOnChange(e, exp.id)}
                value={exp.company}
                className="company"
              />
            </div>
          </div>

          <div className="work-time-period">
            <div className="work-period">
              <div className="from">
                <label htmlFor={`from-${index}`}>From</label>
                <br />

                <input
                  type="date"
                  id={`from-${index}`}
                  className="froms"
                  name="from"
                  value={exp.from}
                  onChange={(e) => handleOnChange(e, exp.id)}
                />
              </div>
              <div className="to">
                <label htmlFor={`to-${index}`}>To</label>
                <br />
                <input
                  type="date"
                  id={`to-${index}`}
                  className="tos"
                  name="to"
                  onChange={(e) => handleOnChange(e, exp.id)}
                  value={exp.to}
                />
              </div>
            </div>

            <div className="work-city">
              <label htmlFor={`city-${index}`}>Work City</label>
              <br />
              <input
                type="text"
                placeholder="Floride, USA"
                id={`city-${index}`}
                name="city"
                onChange={(e) => handleOnChange(e, exp.id)}
                value={exp.city}
                className="city"
              />
            </div>
          </div>

          <div className="accomp-info">
            <label htmlFor={`accomp-${index}`}>Accomplishments</label>
            <br />
            <textarea
              name="accomp"
              id={`accomp-${index}`}
              className="accomp"
              value={exp.accomp}
              onChange={(e) => handleOnChange(e, exp.id)}
              placeholder="Your Work Accomplishments....."
            ></textarea>
          </div>

          <div className="button">
            <div className="add-button">
              <button className="add-btn" onClick={handleOnAddBtnClicked}>
                Add
              </button>
            </div>
            <div className="delete-btn">
              {experience.length > 1 && (
                <button
                  className="delete-button"
                  onClick={() => handleOnDeleteButton(exp.id)}
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

export default WorkExperience;

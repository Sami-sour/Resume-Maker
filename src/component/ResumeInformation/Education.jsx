import React, { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState(() => {
    const saveEdu = localStorage.getItem("newEdu");
    return saveEdu
      ? JSON.parse(saveEdu)
      : [
          {
            id: crypto.randomUUID(),
            eduDegree: "",
            eduCollege: "",
            eduFrom: "",
            eduTo: "",
          },
        ];
  });

  const handleOnMoreEducation = () => {
    setEducation([
      ...education,
      {
        id: crypto.randomUUID(),
        eduDegree: "",
        eduCollege: "",
        eduFrom: "",
        eduTo: "",
      },
    ]);
  };

  const handleOnChange = (e, id) => {
    const { name, value } = e.target;
    setEducation((prev) =>
      prev.map((edu) => (edu.id === id ? { ...edu, [name]: value } : edu))
    );
  };

  useEffect(() => {
    localStorage.setItem("newEdu", JSON.stringify(education));
  }, [education]);

  const handleOnDeleteEdu = (id) => {
    const removeEdu = education.filter((edu) => edu.id !== id);
    setEducation(removeEdu);
  };

  return (
    <>
      <h1 className="header-five">Education</h1>
      {education.map((edu, index) => (
        <div className="education-seciton" key={edu.id}>
          <div className="education-box">
            <div className="edu-degree">
              <label htmlFor={`degree-${index}`}>Degree</label>
              <br />
              <input
                type="text"
                placeholder="B.Tech Enginnering"
                id={`degree-${index}`}
                name="eduDegree"
                value={edu.eduDegree}
                onChange={(e) => handleOnChange(e, edu.id)}
                className="degree"
              />
            </div>

            <div className="university-info">
              <label htmlFor={`university-${index}`}>University</label>
              <br />
              <input
                type="text"
                placeholder="Technical University"
                id={`university-${index}`}
                value={edu.eduCollege}
                onChange={(e) => handleOnChange(e, edu.id)}
                name="eduCollege"
                className="university"
              />
            </div>
          </div>

          <div className="edu-time-period">
            <div className="from-degree">
              <label htmlFor={`fron-${index}`}>From</label>
              <br />

              <input
                type="date"
                id={`fron-${index}`}
                className="from-period"
                name="eduFrom"
                onChange={(e) => handleOnChange(e, edu.id)}
                value={edu.eduFrom}
              />
            </div>

            <div className="to-degree">
              <label htmlFor={`to-degree-${index}`}>To</label>
              <br />
              <input
                type="date"
                id={`to-degree-${index}`}
                name="eduTo"
                className="to-period"
                value={edu.eduTo}
                onChange={(e) => handleOnChange(e, edu.id)}
              />
            </div>
          </div>

          <div className="education-button">
            <div className="add-education">
              <button className="edu-button" onClick={handleOnMoreEducation}>
                Add
              </button>
            </div>

            <div className="delete-education">
              {education.length > 1 && (
                <button
                  className="education-delete"
                  onClick={() => handleOnDeleteEdu(edu.id)}
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

export default Education;

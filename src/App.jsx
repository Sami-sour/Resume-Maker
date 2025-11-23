import { useState } from "react";
import "./App.css";

import Header from "./component/Header";
import PreviewBtn from "./component/PreviewBtn";

import ResumeInfo from "./component/ResumeInfo";
import ResumePreview from "./component/ResumePreview";

function App() {
  const [tab, setTab] = useState(false);

  const handleOnPreviewBtn = () => {
    setTab((prev) => !prev);
  };

  // const handleOnEditBtnClicked = () => {
  //   setTab(false);
  // };

  return (
    <>
      <Header />
      <PreviewBtn tab={tab} handleOnPreviewBtn={handleOnPreviewBtn} />
      <div className="resume-outer-container">
        <div className="resume-section">
          {!tab ? (
            <div className="all-input-info">
              <ResumeInfo />
            </div>
          ) : (
            <div className="all-input-output">
              <ResumePreview />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

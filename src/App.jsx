import { useState } from "react";
import "./App.css";

import Header from "./component/Header";
import PreviewBtn from "./component/PreviewBtn";

import EditBtn from "./component/EditBtn";
import ResumeInfo from "./component/ResumeInfo";
import ResumePreview from "./component/ResumePreview";

function App() {
  const [tab, setTab] = useState(false);

  const handleOnPreviewBtn = () => {
    setTab(true);
  };

  const handleOnEditBtnClicked = () => {
    setTab(false);
  };

  return (
    <>
      <Header />
      {!tab && <PreviewBtn handleOnPreviewBtn={handleOnPreviewBtn} />}
      {tab && <EditBtn handleOnEditBtnClicked={handleOnEditBtnClicked} />}
      <div className="resume-outer-container">
        <div className="resume-section">
          {!tab && (
            <div className="all-input-info">
              <ResumeInfo />
            </div>
          )}

          {tab && (
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

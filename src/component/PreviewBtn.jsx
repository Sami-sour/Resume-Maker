import React from "react";

const PreviewBtn = ({ tab, handleOnPreviewBtn }) => {
  return (
    <div className="preview-btn">
      <button className="output-btn" onClick={handleOnPreviewBtn}>
        {tab ? "Edit" : "Preview"}
      </button>
    </div>
  );
};

export default PreviewBtn;

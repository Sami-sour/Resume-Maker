import React from "react";

const PreviewBtn = ({ handleOnPreviewBtn }) => {
  return (
    <>
      {" "}
      <div className="preview-btn">
        <button className="output-btn" onClick={handleOnPreviewBtn}>
          Preview
        </button>
      </div>
    </>
  );
};

export default PreviewBtn;

import React from "react";

const EditBtn = ({ handleOnEditBtnClicked }) => {
  return (
    <div className="edit-btn">
      <button className="edit" onClick={handleOnEditBtnClicked}>
        Edit
      </button>
    </div>
  );
};

export default EditBtn;

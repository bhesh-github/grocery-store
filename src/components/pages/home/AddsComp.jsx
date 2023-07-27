import React from "react";

const AddsComp = ({ addsImage }) => {
  return (
    <div>
      <div className="adds-comp">
        <img className="adds-image" src={addsImage && addsImage} alt="" />
      </div>
    </div>
  );
};

export default AddsComp;

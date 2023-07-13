import React from "react";

const AddsComp = ({ addsImage }) => {
  return (
    <div className="adds-comp">
      <img src={addsImage && addsImage} alt="" />
    </div>
  );
};

export default AddsComp;

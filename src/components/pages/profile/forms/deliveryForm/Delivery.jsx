import React from "react";
import SwitchableTabs from "./SwitchableTabs";

const DeliveryForm = ({ deliveryFormList, stateList }) => {
  return (
    <div className="delivery-page">
      <div className="heading-wrapper">
        <h3 className="heading">Where to?</h3>
      </div>
      <SwitchableTabs
        deliveryFormList={deliveryFormList}
        stateList={stateList}
      />
    </div>
  );
};

export default DeliveryForm;

DeliveryForm.defaultProps = {
  deliveryFormList: [
    {
      id: 0,
      title: "Please Deliver",
      formType: "deliver",
    },
    {
      id: 1,
      title: "Pick Up & Interstate Delivery Only ",
      formType: "pickUp",
    },
  ],
  stateList: [
    { id: 0, name: "None", value: "" },
    {
      id: 1,
      name: "Australian Capital Territory",
      value: "Australian Capital Territory",
    },
    { id: 2, name: "New South Wales", value: "New South Wales" },
    { id: 3, name: "Northern Territory", value: "Northern Territory" },
    { id: 4, name: "Queensland", value: "Queensland" },
    { id: 5, name: "South Australia", value: "South Australia" },
    { id: 6, name: "Tasmania", value: "Tasmania" },
    { id: 7, name: "Victoria", value: "Victoria" },
    { id: 8, name: "Western Australia", value: "Western Australia" },
  ],
};

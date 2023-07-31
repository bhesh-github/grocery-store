import React, { useState } from "react";
import ProfileSetting from "./forms/ProfileSetting";
import MyOrders from "./forms/myOrders/MyOrders";
import PreviousOrders from "./forms/previousOrders/PreviousOrders";
import ProgressIndicator from "../../forAll/ProgressIndicator";
import DeliveryAddress from "../../pages/profile/forms/DeliveryAddress";
import Delivery from "./forms/deliveryForm/Delivery";

import { useSelector, useDispatch } from "react-redux";
import {
  profileSettingFormReducer,
  myOrdersFormReducer,
  previousOrdersFormReducer,
  deliveryAddressFormReducer,
} from "../../../store/features/currentProfileForm/currentProfileForm";

const Profile = ({ sidebarItems }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentActiveItem, setCurrentActiveItem] = useState(0);

  const currentForm = useSelector(
    (state) => state.currentProfileForm.currentProfileFormState
  );
  const dispatch = useDispatch();

  return (
    <>
      {isSubmitting && (
        <div className="progress-indicator-overlay">
          <div className="progress-indicator-wrapper">
            <ProgressIndicator />
          </div>
        </div>
      )}
      <div className="profile-page">
        <div className="side-bar">
          <h2 className="heading">Account</h2>
          <div className="menu-list">
            {sidebarItems &&
              sidebarItems.map((item, idx) => (
                <span
                  className={`menu-item ${
                    currentActiveItem === idx && "active-item"
                  }`}
                  key={idx}
                  onClick={() => {
                    item === "Profile" && dispatch(profileSettingFormReducer());
                    item === "My Orders" && dispatch(myOrdersFormReducer());
                    item === "Previous Orders" &&
                      dispatch(previousOrdersFormReducer());
                    item === "Delivery Address" &&
                      dispatch(deliveryAddressFormReducer());

                    setCurrentActiveItem(idx);
                  }}
                >
                  {item}
                </span>
              ))}
          </div>
        </div>
        {currentForm === "profileSettingForm" && (
          <ProfileSetting setIsSubmitting={setIsSubmitting} />
        )}
        {currentForm === "myOrdersForm" && (
          <MyOrders setIsSubmitting={setIsSubmitting} />
        )}
        {currentForm === "previousOrdersForm" && (
          <PreviousOrders setIsSubmitting={setIsSubmitting} />
        )}
        {currentForm === "deliveryAddressForm" && (
          <Delivery setIsSubmitting={setIsSubmitting} />
        )}
      </div>
    </>
  );
};

export default Profile;
Profile.defaultProps = {
  sidebarItems: ["Profile", "My Orders", "Previous Orders", "Delivery Address"],
};

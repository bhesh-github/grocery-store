import React, { useState } from "react";
import ProfileSetting from "./forms/ProfileSetting";
import MyOrders from "./forms/myOrders/MyOrders";
import PreviousOrders from "./forms/previousOrders/PreviousOrders";
import ProgressIndicator from "../../forAll/ProgressIndicator";
import DeliveryAddress from "../../pages/profile/forms/DeliveryAddress";
import profileIcon from "../../../images/forAll/profileIcon.jpg";

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
  const [profileImg, setProfileImg] = useState("");

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
        {/* <div className="sticky"> */}
          <div className="side-bar">
            <h2 className="heading">Account</h2>
            <div className="inner">
              <div className="user-img-wrapper">
                <img
                  src={profileImg ? profileImg : profileIcon}
                  alt=""
                  className="user-img"
                />
              </div>
              <div className="menu-list">
                {sidebarItems &&
                  sidebarItems.map((item) => {
                    const { id, name, itemFormType } = item;
                    return (
                      <span
                        className={`menu-item ${
                          currentForm === itemFormType && "active-item"
                        }`}
                        key={id}
                        onClick={() => {
                          name === "Profile" &&
                            dispatch(profileSettingFormReducer());
                          name === "My Orders" &&
                            dispatch(myOrdersFormReducer());
                          name === "Previous Orders" &&
                            dispatch(previousOrdersFormReducer());
                          name === "Delivery Address" &&
                            dispatch(deliveryAddressFormReducer());
                        }}
                      >
                        {name}
                      </span>
                    );
                  })}
              </div>
            {/* </div> */}
          </div>
        </div>
        {currentForm === "profileSettingForm" && (
          <ProfileSetting
            setIsSubmitting={setIsSubmitting}
            setProfileImg={setProfileImg}
          />
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
  sidebarItems: [
    { id: 0, name: "Profile", itemFormType: "profileSettingForm" },
    { id: 1, name: "My Orders", itemFormType: "myOrdersForm" },
    { id: 2, name: "Previous Orders", itemFormType: "previousOrdersForm" },
    { id: 3, name: "Delivery Address", itemFormType: "deliveryAddressForm" },
  ],
};

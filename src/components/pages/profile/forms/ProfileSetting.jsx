import React, { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import profileIcon from "../../../../images/forAll/profileIcon.jpg";

const inputObj = {
  profile_img: "",
  username: "",
  email: "",
  first_name: "",
  middle_name: "",
  last_name: "",
  contact: "",
  second_contact: "",
  city: "",
  street: "",
  company_name: "",
  website_name: "",
};
const ProfileSetting = ({ setIsSubmitting }) => {
  const [inputValue, setInputValue] = useState(inputObj);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "profile_img") {
      setInputValue((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(
          document.getElementById("profile_img").files[0]
        ),
      }));
    } else {
      setInputValue((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setFormErrors(validate(inputValue));
    setIsSubmit(true);
  };
  const cancelForm = () => {
    setInputValue((prev) => ({
      ...prev,
      username: "",
      email: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      contact: "",
      second_contact: "",
      city: "",
      street: "",
      company_name: "",
      website_name: "",
    }));
    navigate("/");
  };
  const postRequestFunc = async () => {
    // const d =
    //     formInput &&
    //     formInput.date;
    // const month = Number(d.getMonth()) + 1;
    // const displayDate = d.getFullYear() + "-" + month + "-" + d.getDate();

    // let postStatus;

    // const formData = {
    //     ...formInput,
    //     tour_date: displayDate,
    // };
    // await axios
    //     .post(
    //         import.meta.env.VITE_API_BASE_URL + "/api/package-booking",
    //         formData
    //     )
    //     .then((res) => {
    //         postStatus = res.data.status;
    //     })
    //     .catch((err) => {
    //         postStatus = err.response.status;
    //     });

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setInputValue((prev) => ({
        ...prev,
        username: "",
        email: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        contact: "",
        second_contact: "",
        city: "",
        street: "",
        company_name: "",
        website_name: "",
      }));
      // setOpen(true);
    }, 3000);
    // const m =
    //     postStatus === 200
    //         ? "You have Booked your tour Successfully."
    //         : "Unfortunately Booking Failed. please try again later";

    // setSpinnerClassName("none");

    // postStatus === 200
    //     ? Swal.fire({
    //           position: "center",
    //           icon: "success",
    //           title: m,
    //           showConfirmButton: false,
    //           timer: 1500,
    //       })
    //     : Swal.fire({
    //           position: "center",
    //           icon: "error",
    //           title: m,
    //           showConfirmButton: false,
    //           timer: 1500,
    //       });
    // toggleOverlay(false);
  };
  React.useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      postRequestFunc();
      setIsSubmit(false);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const validRegex = /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/;
    // const upper = /[A-Z]/,
    //   lower = /[a-z]/,
    //   number = /[0-9]/,
    //   special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    if (!values.username) {
      errors.username = "This Field is required";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!values.email.match(validRegex)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.first_name) {
      errors.first_name = "This Field is required";
    }
    if (!values.last_name) {
      errors.last_name = "This Field is required";
    }
    if (!values.contact) {
      errors.contact = "This Field is required";
    }
    if (!values.city) {
      errors.city = "This Field is required";
    }
    return errors;
  };
  return (
    <>
      <form className="form" enctype="multipart/form-data">
        <h2 className="heading">Profile Setting</h2>
        <div className="form-contents">
          <div className="user-img-wrapper">
            <label className="camera-icon-wrapper">
              <input
                type="file"
                className="file-input"
                accept="image/*"
                name="profile_img"
                onChange={handleInputChange}
                id="profile_img"
              ></input>
              <CameraAltIcon className="camera-icon" />
            </label>
            <img
              src={
                inputValue.profile_img ? inputValue.profile_img : profileIcon
              }
              className="user-img"
              alt=""
            />
          </div>
          <div className="inputs">
            <label className="label-input top-three-input">
              Username:
              <br />
              <input
                onChange={handleInputChange}
                value={inputValue.username}
                className="input"
                placeholder="Username"
                name="username"
              />
              {formErrors && formErrors.username && (
                <span className="validation-error">{formErrors.username}</span>
              )}
            </label>
            <label className="label-input top-three-input">
              Email:
              <br />
              <input
                onChange={handleInputChange}
                value={inputValue.email}
                className="input"
                placeholder="Email"
                name="email"
              />
              {formErrors && formErrors.email && (
                <span className="validation-error">{formErrors.email}</span>
              )}
            </label>
            <label className="label-input">
              First Name:
              <br />
              <input
                onChange={handleInputChange}
                value={inputValue.first_name}
                className="input"
                placeholder="First Name"
                name="first_name"
              />
              {formErrors && formErrors.first_name && (
                <span className="validation-error">
                  {formErrors.first_name}
                </span>
              )}
            </label>
            <label className="label-input">
              Middle Name:
              <br />
              <input
                onChange={handleInputChange}
                value={inputValue.middle_name}
                className="input"
                placeholder="Middle Name"
                name="middle_name"
              />
            </label>
            <label className="label-input">
              Last Name:
              <br />
              <input
                onChange={handleInputChange}
                value={inputValue.last_name}
                className="input"
                placeholder="Last Name"
                name="last_name"
              />
              {formErrors && formErrors.last_name && (
                <span className="validation-error">{formErrors.last_name}</span>
              )}
            </label>
          </div>
          <div className="inputs">
            <label className="label-input top-three-input">
              Contact:
              <br />
              <input
                onChange={handleInputChange}
                value={inputValue.contact}
                className="input"
                placeholder="Contact"
                name="contact"
              />
              {formErrors && formErrors.contact && (
                <span className="validation-error">{formErrors.contact}</span>
              )}
            </label>
            <label className="label-input top-three-input">
              Second Contact:
              <br />
              <input
                onChange={handleInputChange}
                value={inputValue.second_contact}
                className="input"
                placeholder="Second Contact"
                name="second_contact"
              />
            </label>
            <label className="label-input top-three-input">
              City:
              <br />
              <input
                onChange={handleInputChange}
                value={inputValue.city}
                className="input"
                placeholder="City"
                name="city"
              />
              {formErrors && formErrors.city && (
                <span className="validation-error">{formErrors.city}</span>
              )}
            </label>
            <label className="label-input top-three-input">
              Street:
              <br />
              <input
                onChange={handleInputChange}
                value={inputValue.street}
                className="input"
                placeholder="Street"
                name="street"
              />
            </label>
          </div>
          <div className="inputs">
            <label className="label-input">
              Company Name:
              <br />
              <input
                onChange={handleInputChange}
                value={inputValue.company_name}
                className="input"
                placeholder="Company Name"
                name="company_name"
              />
            </label>
            <label className="label-input">
              Website Name:
              <br />
              <input
                onChange={handleInputChange}
                value={inputValue.website_name}
                className="input"
                placeholder="Website"
                name="website_name"
              />
            </label>
          </div>
        </div>
        <br />
        <div className="btn-wrapper">
          <Button
            onClick={handleSave}
            type="submit"
            variant="outlined"
            className="action-btn set-address-btn"
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            className="action-btn  cancel-btn"
            onClick={cancelForm}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default ProfileSetting;

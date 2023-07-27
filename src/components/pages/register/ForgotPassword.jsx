import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  forgotPasswordFormReducer,
  createAccountFormReducer,
  loginFormReducer,
} from "../../../store/features/currentForm/currentFormSlice";

const inputObj = {
  email: "",
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};
const ForgotPassword = ({
  setFormSubmitting,
  // setCurrentForm,
  setAlertMessage,
  setOpen,
}) => {
  const [inputValue, setInputValue] = useState(inputObj);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [togglePasword, setTogglePassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(inputValue));
    setIsSubmit(true);
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
    setTimeout(() => {
      setInputValue((prev) => ({
        ...prev,
        email: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
      setAlertMessage((prev) => ({
        ...prev,
        successMessage: "You have successfully changed your password.",
      }));
      setOpen(true);
      // setCurrentForm("loginForm");
      setFormSubmitting(false);
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

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormSubmitting(true);
      postRequestFunc();
      setIsSubmit(false);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const validRegex = /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/;
    const upper = /[A-Z]/,
      lower = /[a-z]/,
      number = /[0-9]/,
      special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    if (!values.email) {
      errors.email = "Enter your email!";
    } else if (!values.email.match(validRegex)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.oldPassword) {
      errors.oldPassword = "Password your password!";
    }
    if (!values.newPassword) {
      errors.newPassword = "New Password is required!";
    } else if (values.newPassword.length < 8) {
      errors.newPassword = "Password cannot be less than 8 characters";
    } else if (values.newPassword.length > 15) {
      errors.newPassword = "Password cannot be more than 15 characters ";
    } else if (!upper.test(values.newPassword)) {
      errors.newPassword =
        "Password must contain at least one capital character";
    } else if (!lower.test(values.newPassword)) {
      errors.newPassword = "Password must contain at least one small character";
    } else if (!number.test(values.newPassword)) {
      errors.newPassword = "Password must contain numbers";
    } else if (!special.test(values.newPassword)) {
      errors.newPassword =
        'Password must contain at least one special character like: !"#$%&';
    } else if (values.oldPassword === values.newPassword) {
      errors.newPassword =
        "New password must be different from previous password.";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Old Password is required!";
    } else if (values.confirmPassword !== values.newPassword) {
      errors.confirmPassword = "Passwords didnot match!";
    }
    return errors;
  };

  return (
    <>
      <div className="signin-container">
        <form
          name="frm-login login-form"
          onSubmit={handleSubmit}
          style={{ textAlign: "left" }}
        >
          <p className="form-row">
            <label for="fid-name">
              Email Address:<span className="requite">*</span>
            </label>
            <input
              type="text"
              id="fid-name"
              name="email"
              value={inputValue.email}
              onChange={(e) => {
                handleChange(e);
              }}
              className="txt-input"
            />
            <p className="validation-error">{formErrors && formErrors.email}</p>
          </p>
          <p className="form-row">
            <label for="fid-pass">
              Old Password:<span className="requite">*</span>
            </label>
            <div className="password-inner-wrapper">
              <input
                type={togglePasword.oldPassword ? "text" : "password"}
                id="fid-pass"
                name="oldPassword"
                value={inputValue.oldPassword}
                onChange={(e) => {
                  handleChange(e);
                }}
                className="txt-input"
              />
              <p className="validation-error">
                {formErrors && formErrors.oldPassword}
              </p>
              {togglePasword.oldPassword ? (
                <BsEye
                  className="eye-icon"
                  onClick={() => {
                    togglePasword.oldPassword === false
                      ? setTogglePassword((prev) => ({
                          ...prev,
                          oldPassword: true,
                        }))
                      : setTogglePassword((prev) => ({
                          ...prev,
                          oldPassword: false,
                        }));
                  }}
                />
              ) : (
                <BsEyeSlash
                  className="eye-icon"
                  onClick={() => {
                    togglePasword.oldPassword === false
                      ? setTogglePassword((prev) => ({
                          ...prev,
                          oldPassword: true,
                        }))
                      : setTogglePassword((prev) => ({
                          ...prev,
                          oldPassword: false,
                        }));
                  }}
                />
              )}
            </div>
          </p>

          <p className="form-row">
            <label for="fid-pass">
              New Password:<span className="requite">*</span>
            </label>
            <div className="password-inner-wrapper">
              <input
                type={togglePasword.newPassword ? "text" : "password"}
                id="fid-pass"
                name="newPassword"
                value={inputValue.newPassword}
                onChange={(e) => {
                  handleChange(e);
                }}
                className="txt-input"
              />
              <p className="validation-error">
                {formErrors && formErrors.newPassword}
              </p>
              {togglePasword.newPassword ? (
                <BsEye
                  className="eye-icon"
                  onClick={() => {
                    togglePasword.newPassword === false
                      ? setTogglePassword((prev) => ({
                          ...prev,
                          newPassword: true,
                        }))
                      : setTogglePassword((prev) => ({
                          ...prev,
                          newPassword: false,
                        }));
                  }}
                />
              ) : (
                <BsEyeSlash
                  className="eye-icon"
                  onClick={() => {
                    togglePasword.newPassword === false
                      ? setTogglePassword((prev) => ({
                          ...prev,
                          newPassword: true,
                        }))
                      : setTogglePassword((prev) => ({
                          ...prev,
                          newPassword: false,
                        }));
                  }}
                />
              )}
            </div>
          </p>
          <p className="form-row">
            <label for="fid-pass">
              Confirm Password:<span className="requite">*</span>
            </label>
            <div className="password-inner-wrapper">
              <input
                type={togglePasword.confirmPassword ? "text" : "password"}
                id="fid-pass"
                name="confirmPassword"
                value={inputValue.confirmPassword}
                onChange={(e) => {
                  handleChange(e);
                }}
                className="txt-input"
              />
              <p className="validation-error">
                {formErrors && formErrors.confirmPassword}
              </p>
              {togglePasword.confirmPassword ? (
                <BsEye
                  className="eye-icon"
                  onClick={() => {
                    togglePasword.confirmPassword === false
                      ? setTogglePassword((prev) => ({
                          ...prev,
                          confirmPassword: true,
                        }))
                      : setTogglePassword((prev) => ({
                          ...prev,
                          confirmPassword: false,
                        }));
                  }}
                />
              ) : (
                <BsEyeSlash
                  className="eye-icon"
                  onClick={() => {
                    togglePasword.confirmPassword === false
                      ? setTogglePassword((prev) => ({
                          ...prev,
                          confirmPassword: true,
                        }))
                      : setTogglePassword((prev) => ({
                          ...prev,
                          confirmPassword: false,
                        }));
                  }}
                />
              )}
            </div>
          </p>
          <p className="form-row wrap-btn">
            <button className="btn btn-submit btn-bold" type="submit">
              change password
            </button>
            <span
              className="link-to-help"
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(loginFormReducer());
              }}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;

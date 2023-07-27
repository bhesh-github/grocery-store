import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { loginFormReducer } from "../../../store/features/currentForm/currentFormSlice";

const inputObj = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  city: "",
  street: "",
  number: "",
  secondNumber: "",
};
const CreateAccountForm = ({
  createAccountFormData,
  setFormSubmitting,
  // setCurrentForm,
  setAlertMessage,
  setOpen,
}) => {
  const [inputValue, setInputValue] = useState(inputObj);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [togglePasword, setTogglePassword] = useState({
    password: false,
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
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        city: "",
        street: "",
        number: "",
        secondNumber: "",
      }));
      setOpen(true);
      setAlertMessage((prev) => ({
        ...prev,
        successMessage: "You have successfully created your account.",
      }));
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
    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!values.email.match(validRegex)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password cannot be less than 8 characters";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot be more than 15 characters ";
    } else if (!upper.test(values.password)) {
      errors.password = "Password must contain at least one capital character";
    } else if (!lower.test(values.password)) {
      errors.password = "Password must contain at least one small character";
    } else if (!number.test(values.password)) {
      errors.password = "Password must contain numbers";
    } else if (!special.test(values.password)) {
      errors.password =
        'Password must contain at least one special character like: !"#$%&';
    }
    if (!values.confirmPassword && values.password) {
      errors.confirmPassword = "Confirm Password is required!";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords didnot match!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.number) {
      errors.number = "Number is required!";
    } else if (values.number.length < 10) {
      errors.number = "Number cannot be less than 10 digit!";
    }
    return errors;
  };

  return (
    <div className="signin-container create-account-form-page">
      <form
        name="create-account-form"
        onSubmit={handleSubmit}
        style={{ margin: "0 1.5em" }}
      >
        {createAccountFormData &&
          createAccountFormData.map((item, idx) => {
            if (item.purpose !== "password") {
              return (
                <span className={`${item.class} label-input-cover`} key={idx}>
                  <label className="input-label" key={item.id}>
                    {item.label}:{item.required && "*"}
                  </label>
                  <br />
                  <input
                    name={item.name}
                    type={item.type}
                    className={item.inputClass}
                    value={inputValue[item.name]}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    style={{ width: "100%" }}
                  />
                  <div className="validation-error">
                    {formErrors && formErrors[item.name]}
                  </div>
                </span>
              );
            } else {
              return item.name === "password" ? (
                <span className={`${item.class} label-input-cover`} key={idx}>
                  <label
                    className="input-label"
                    key={item.id}
                    style={{ position: "relative", width: "100%" }}
                  >
                    {item.label}:{item.required && "*"}
                    <br />
                    <input
                      name={item.name}
                      type={togglePasword.password ? "text" : "password"}
                      className={item.inputClass}
                      value={inputValue[item.name]}
                      style={{ width: "100%" }}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <div className="validation-error">
                      {formErrors && formErrors[item.name]}
                    </div>
                    {togglePasword.password ? (
                      <BsEye
                        className="eye-icon"
                        onClick={() => {
                          togglePasword.password === false
                            ? setTogglePassword((prev) => ({
                                ...prev,
                                password: true,
                              }))
                            : setTogglePassword((prev) => ({
                                ...prev,
                                password: false,
                              }));
                        }}
                      />
                    ) : (
                      <BsEyeSlash
                        className="eye-icon"
                        onClick={() => {
                          togglePasword.password === false
                            ? setTogglePassword((prev) => ({
                                ...prev,
                                password: true,
                              }))
                            : setTogglePassword((prev) => ({
                                ...prev,
                                password: false,
                              }));
                        }}
                      />
                    )}
                  </label>
                  <br />
                </span>
              ) : (
                <span className={`${item.class} label-input-cover`} key={idx}>
                  <label
                    className="input-label"
                    key={item.id}
                    style={{ position: "relative", width: "100%" }}
                  >
                    {item.label}:{item.required && "*"}
                    <br />
                    <input
                      name={item.name}
                      type={togglePasword.confirmPassword ? "text" : "password"}
                      className={item.inputClass}
                      value={inputValue[item.name]}
                      style={{ width: "100%" }}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <div className="validation-error">
                      {formErrors && formErrors[item.name]}
                    </div>
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
                  </label>
                  <br />
                </span>
              );
            }
          })}
        <p className="form-row wrap-btn" style={{ margin: "1em 0" }}>
          <button className="btn btn-submit btn-bold" type="submit">
            Sign up
          </button>
          <span
            className="link-to-help"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(loginFormReducer());
            }}
          >
            Already have an account
          </span>
        </p>
      </form>
    </div>
  );
};

export default CreateAccountForm;
CreateAccountForm.defaultProps = {
  createAccountFormData: [
    {
      id: 1,
      label: "First Name",
      type: "text",
      name: "firstName",
      class: "first-name",
      inputClass: "first-name-input input-field",
      required: true,
    },
    {
      id: 2,
      label: "Middle Name",
      type: "text",
      name: "middleName",
      class: "middle-name",
      inputClass: "middle-name-input input-field",
    },
    {
      id: 3,
      label: "Last Name",
      type: "text",
      name: "lastName",
      class: "last-name",
      inputClass: "last-name-input input-field",
      required: true,
    },
    {
      id: 4,
      label: "Email",
      type: "text",
      name: "email",
      class: "email",
      inputClass: "email-input input-field",
      required: true,
    },
    {
      id: 5,
      label: "Password",
      purpose: "password",
      type: "password",
      name: "password",
      class: "password",
      inputClass: "password-input input-field",
      required: true,
    },
    {
      id: 6,
      label: "Confirm Password",
      purpose: "password",
      type: "password",
      name: "confirmPassword",
      class: "confirm-password",
      inputClass: "confirm-password-input input-field",
      required: true,
    },
    {
      id: 7,
      label: "City",
      type: "text",
      name: "city",
      class: "city",
      inputClass: "city-input input-field",
      required: true,
    },
    {
      id: 8,
      label: "Street",
      type: "text",
      name: "street",
      class: "street",
      inputClass: "street-input input-field",
    },
    {
      id: 9,
      label: "Number",
      type: "text",
      name: "number",
      class: "number",
      inputClass: "number-input input-field",
      required: true,
    },
    {
      id: 10,
      label: "Second Number",
      type: "text",
      name: "secondNumber",
      class: "second-number",
      inputClass: "second-number-input input-field",
    },
  ],
};

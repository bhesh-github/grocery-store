import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPasswordFormReducer } from "../../../store/features/currentForm/currentFormSlice";
const inputObj = {
  email: "",
  password: "",
};
const Login = ({ setFormSubmitting, setCurrentForm }) => {
  const [signinInput, setSigninInput] = useState(inputObj);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [togglePasword, setTogglePassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninInput({ ...signinInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(signinInput));
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
      setSigninInput((prev) => ({
        ...prev,
        email: "",
        password: "",
      }));
      navigate("/");
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
    // const upper = /[A-Z]/,
    //   lower = /[a-z]/,
    //   number = /[0-9]/,
    //   special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    if (!values.email) {
      errors.email = "Enter your email!";
    } else if (!values.email.match(validRegex)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Enter your password!";
    }

    return errors;
  };
  const dispatch = useDispatch();
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
              value={signinInput.email}
              onChange={(e) => {
                handleChange(e);
              }}
              className="txt-input"
            />
            <p className="validation-error">{formErrors && formErrors.email}</p>
          </p>
          <p className="form-row">
            <label for="fid-pass">
              Password:<span className="requite">*</span>
            </label>
            <div className="password-inner-wrapper">
              <input
                type={togglePasword.password ? "text" : "password"}
                id="fid-pass"
                name="password"
                value={signinInput.password}
                onChange={(e) => {
                  handleChange(e);
                }}
                className="txt-input"
              />
              <p className="validation-error">
                {formErrors && formErrors.password}
              </p>
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
            </div>
          </p>
          <p className="form-row wrap-btn">
            <button className="btn btn-submit btn-bold" type="submit">
              sign in
            </button>
            <span
              className="link-to-help"
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(forgotPasswordFormReducer());
              }}
            >
              Forgot your password
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;

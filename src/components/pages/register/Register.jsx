import { useState } from "react";
import ProgressIndicator from "../../forAll/ProgressIndicator";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import CreateAccountForm from "./CreateAccountForm";
import { useSelector, useDispatch } from "react-redux";
import FormSubmissionAlert from "../../forAll/FromSubmissionAlert";
import {
  createAccountFormReducer,
} from "../../../store/features/currentForm/currentFormSlice";
const Register = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    successMessage: "",
    failedMessage: "",
  });
  const currentForm = useSelector(
    (state) => state.currentForm.currentFormState
  );
  const dispatch = useDispatch();
  return (
    <>
      {formSubmitting && (
        <div className="progress-indicator-wrapper">
          <ProgressIndicator />
        </div>
      )}
      <div className="page-contain login-page">
        <div id="main-content" className="main-content">
          <div className="container">
            <div className="row">
              {currentForm === "createAccountForm" && (
                <CreateAccountForm
                  setFormSubmitting={setFormSubmitting}
                  // setCurrentForm={setCurrentForm}
                  setAlertMessage={setAlertMessage}
                  setOpen={setOpen}
                />
              )}
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                {currentForm === "loginForm" && (
                  <Login
                    setFormSubmitting={setFormSubmitting}
                    // setCurrentForm={setCurrentForm}
                  />
                )}
                {currentForm === "forgotPasswordForm" && (
                  <ForgotPassword
                    setFormSubmitting={setFormSubmitting}
                    // setCurrentForm={setCurrentForm}
                    setAlertMessage={setAlertMessage}
                    setOpen={setOpen}
                  />
                )}
              </div>
              {currentForm !== "createAccountForm" && (
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="register-in-container">
                    <div className="intro">
                      <h4 className="box-title">New Customer?</h4>
                      <p className="sub-title">
                        Create an account with us and you’ll be able to:
                      </p>
                      <ul className="lis">
                        <li>Check out faster</li>
                        <li>Save multiple shipping anddesses</li>
                        <li>Access your order history</li>
                        <li>Track new orders</li>
                      </ul>
                      <span
                        className="btn btn-bold"
                        onClick={() => {
                          dispatch(createAccountFormReducer());
                        }}
                      >
                        Create an account
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <FormSubmissionAlert
        open={open}
        setOpen={setOpen}
        alertMessage={alertMessage}
        // formSubmitting={formSubmitting}
        // setFormSubmitting={setFormSubmitting}
      />
    </>
  );
};

export default Register;

import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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
const DeliveryAddress = ({ setIsSubmitting }) => {
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
      <form className="my-orders-page" enctype="multipart/form-data">
        <h2 className="heading">Delivery Address Setting</h2>

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

export default DeliveryAddress;

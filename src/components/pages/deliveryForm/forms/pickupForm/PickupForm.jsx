// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import RadioButton from "./RadioButton";

// const inputObj = {
//   email: "",
//   password: "",
// };
// const PickupForm = ({ pickupFormOptions }) => {
//   const [inputValue, setInputValue] = useState(inputObj);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // setFormErrors(validate(inputValue));
//     setIsSubmit(true);
//   };
//   return (
//     <div className="pickup-form">
//       <form className="form" onSubmit={handleSubmit}>
//         <RadioButton pickupFormOptions={pickupFormOptions} />
//         <div className="btn-wrapper">
//           <Button
//             type="submit"
//             variant="outlined"
//             className="action-btn set-address-btn"
//           >
//             Save
//           </Button>
//           <Button variant="outlined" className="action-btn  cancel-btn">
//             Cancel
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PickupForm;
// PickupForm.defaultProps = {
//   pickupFormOptions: [
//     { id: 1, title: "Collect from Grocery Store " },
//     {
//       id: 2,
//       title: "Interstate Delivery  ",
//       brief: [
//         "Postage charges depend on the weight and cubic meter.",
//         "We will confirm the postage charge before we dispatch your order.",
//         "Please write your address in NOTE section so we can provide you postage Quotation.",
//         "Frozen & Dairy products are not available for Interstate Delivery.",
//       ],
//     },
//   ],
// };

// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";

// const inputObj = {
//   delivered_to: "",
//   delivery_address: "",
//   suburb_or_town: "",
//   choose_state: "",
//   postcode: "",
//   delivered_instructions: "",
// };
// const DeliverForm = ({ stateList }) => {
//   const [inputValue, setInputValue] = useState(inputObj);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue((prev) => ({ ...prev, [name]: value }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(inputValue));
//     setIsSubmit(true);
//   };
//   const navigate = useNavigate();
//   const cancelForm = () => {
//     setInputValue((prev) => ({
//       ...prev,
//       delivered_to: "",
//       delivery_address: "",
//       suburb_or_town: "",
//       choose_state: "",
//       postcode: "",
//       delivered_instructions: "",
//     }));
//     navigate("/");
//   };
//   const postRequestFunc = async () => {
//     // const d =
//     //     formInput &&
//     //     formInput.date;
//     // const month = Number(d.getMonth()) + 1;
//     // const displayDate = d.getFullYear() + "-" + month + "-" + d.getDate();

//     // let postStatus;

//     // const formData = {
//     //     ...formInput,
//     //     tour_date: displayDate,
//     // };
//     // await axios
//     //     .post(
//     //         import.meta.env.VITE_API_BASE_URL + "/api/package-booking",
//     //         formData
//     //     )
//     //     .then((res) => {
//     //         postStatus = res.data.status;
//     //     })
//     //     .catch((err) => {
//     //         postStatus = err.response.status;
//     //     });
//     setTimeout(() => {
//       setInputValue((prev) => ({
//         ...prev,
//         delivered_to: "",
//         delivery_address: "",
//         suburb_or_town: "",
//         choose_state: "",
//         postcode: "",
//         delivered_instructions: "",
//       }));
//       // setOpen(true);
//     }, 3000);
//     // const m =
//     //     postStatus === 200
//     //         ? "You have Booked your tour Successfully."
//     //         : "Unfortunately Booking Failed. please try again later";

//     // setSpinnerClassName("none");

//     // postStatus === 200
//     //     ? Swal.fire({
//     //           position: "center",
//     //           icon: "success",
//     //           title: m,
//     //           showConfirmButton: false,
//     //           timer: 1500,
//     //       })
//     //     : Swal.fire({
//     //           position: "center",
//     //           icon: "error",
//     //           title: m,
//     //           showConfirmButton: false,
//     //           timer: 1500,
//     //       });
//     // toggleOverlay(false);
//   };

//   React.useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       postRequestFunc();
//       setIsSubmit(false);
//     }
//   }, [formErrors]);

//   const validate = (values) => {
//     const errors = {};
//     const validRegex = /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/;
//     // const upper = /[A-Z]/,
//     //   lower = /[a-z]/,
//     //   number = /[0-9]/,
//     //   special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
//     if (!values.delivered_to) {
//       errors.delivered_to = "This Field is required";
//     }
//     if (!values.delivery_address) {
//       errors.delivery_address = "This Field is required";
//     }
//     if (!values.suburb_or_town) {
//       errors.suburb_or_town = "This Field is required";
//     }
//     if (!values.choose_state) {
//       errors.choose_state = "Select your state";
//     }
//     if (!values.postcode) {
//       errors.postcode = "This Field is required";
//     }
//     if (!values.delivered_instructions) {
//       errors.delivered_instructions = "This Field is required";
//     }
//     return errors;
//   };
//   return (
//     <div className="deliver-form">
//       <div className="message">
//         Dear Customers,
//         <br />
//         The new minimum purchase requirement for FREE delivery is $75 or $100
//         depending on the area where the delivery needs to be made.
//         <br />
//         Before you complete your transaction, you will be informed about your
//         delivery charge if you have not met your area’s minimum purchase
//         requirement for free delivery.
//         <br /> Also, please ensure that your total purchase is a minimum of
//         $29.90 as the system will not permit you to check out without meeting
//         this amount.
//         <br /> For more information regarding delivery charges, please visit
//         https://shop.radheonline.com.au/timetable <br />
//         Thank You,
//         <br />
//         Radhe Online
//       </div>
//       <form className="form" onSubmit={handleSubmit}>
//         <label className="label-input-wrapper">
//           <span className="text question">
//             Who is the order being delivered to?
//           </span>
//           <input
//             src=""
//             type="text"
//             name="delivered_to"
//             value={inputValue.delivered_to}
//             onChange={(e) => {
//               handleInputChange(e);
//             }}
//           />
//           {formErrors && formErrors.delivered_to && (
//             <span className="validation-error">{formErrors.delivered_to}</span>
//           )}

//           <span className="text caution">
//             Put the name of the person the order is for here.
//           </span>
//         </label>
//         <br />
//         <label className="label-input-wrapper">
//           <span className="text question">Delivery address</span>
//           <input
//             src=""
//             type="text"
//             placeholder="Street address"
//             name="delivery_address"
//             value={inputValue.delivery_address}
//             onChange={(e) => {
//               handleInputChange(e);
//             }}
//           />
//           {formErrors && formErrors.delivery_address && (
//             <span className="validation-error">
//               {formErrors.delivery_address}
//             </span>
//           )}
//         </label>
//         <label className="label-input-wrapper">
//           <span className="text question">Suburb or town</span>
//           <input
//             src=""
//             type="text"
//             name="suburb_or_town"
//             placeholder="Suburb or town"
//             value={inputValue.suburb_or_town}
//             onChange={(e) => {
//               handleInputChange(e);
//             }}
//           />
//           {formErrors && formErrors.suburb_or_town && (
//             <span className="validation-error">
//               {formErrors.suburb_or_town}
//             </span>
//           )}
//         </label>
//         <br />
//         <div className="state-post-code-wrapper">
//           <div className="select-btn">
//             <span className="text question">State</span>
//             <select
//               name="choose_state"
//               id="cars"
//               className="dropdown-btn"
//               onChange={(e) => {
//                 handleInputChange(e);
//               }}
//             >
//               {stateList &&
//                 stateList.map((item) => (
//                   <option className="option" value={item.value} key={item.id}>
//                     {item.name}
//                   </option>
//                 ))}
//             </select>
//             {formErrors && formErrors.choose_state && (
//               <span className="validation-error">
//                 {formErrors.choose_state}
//               </span>
//             )}
//           </div>
//           <label className="label-input-wrapper postal-code">
//             <span className="text question">Postcode</span>
//             <input
//               src=""
//               type="text"
//               name="postcode"
//               value={inputValue.postcode}
//               onChange={(e) => {
//                 handleInputChange(e);
//               }}
//             />

//             {formErrors && formErrors.postcode && (
//               <span className="validation-error">{formErrors.postcode}</span>
//             )}
//           </label>
//         </div>
//         <label className="label-input-wrapper">
//           <span className="text question">Delivery instructions</span>
//           <textarea
//             src=""
//             type="text-area"
//             rows="2"
//             name="delivered_instructions"
//             value={inputValue.delivered_instructions}
//             onChange={(e) => {
//               handleInputChange(e);
//             }}
//           />
//           {formErrors && formErrors.delivered_instructions && (
//             <span className="validation-error">
//               {formErrors.delivered_instructions}
//             </span>
//           )}
//           <span className="text caution">
//             If there is anything important we need to know about delivery,
//             please let us know here. We'll remember this for your next order.
//             You can leave notes about what is in your order later in the
//             checkout
//           </span>
//         </label>
//         <div className="btn-wrapper">
//           <Button
//             type="submit"
//             variant="outlined"
//             className="action-btn set-address-btn"
//           >
//             Set Address
//           </Button>
//           <Button
//             variant="outlined"
//             className="action-btn  cancel-btn"
//             onClick={cancelForm}
//           >
//             Cancel
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DeliverForm;

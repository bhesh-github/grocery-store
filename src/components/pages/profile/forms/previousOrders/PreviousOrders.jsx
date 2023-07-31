import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import OrderCard from "./orderCard/orderCard";

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
const PreviousOrders = ({
  setIsSubmitting,
  previousOrderList,
  showDropDownItems,
}) => {
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
      <div className="previous-orders-page">
        <h2 className="heading">Previous Orders</h2>
        <div className="contents">
          <div className="table">
            <div className="show-drop-down">
              Show :
              <select name="cars" id="cars" className="drop-down-btn">
                {showDropDownItems &&
                  showDropDownItems.map((item, idx) => (
                    <option value={item} className="items" key={idx}>
                      {item}
                    </option>
                  ))}
              </select>
            </div>
            <OrderCard
              myOrderList={previousOrderList && previousOrderList}
              // currentMenu={currentMenu}
            />
          </div>
        </div>
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
      </div>
    </>
  );
};

export default PreviousOrders;

PreviousOrders.defaultProps = {
  // myOrdersSettingMenu: ["All", "To Pay", "Paid", "To Receive"],
  showDropDownItems: [
    "Last 30 days",
    "Last 6 months",
    "Orders placed in 2023",
    "All Orders",
  ],
  previousOrderList: [
    {
      orderNumber: " #205824106415417",
      shippingType: "Delivery",
      orderedDate: "2019-04-15",
      orderedTime: "15:22",
      receivedDate: "2019-04-15",
      status: "Cancelled",
      isPaid: true,
      isOrderFullFilled: true,
      productList: [
        {
          id: 1,
          type: "beverage",
          image_link:
            "https://static-01.daraz.com.np/p/4fdcc17b871fc68f89d48946ac224a23.jpg",
          categories: "Juice",
          name: "Mixed Juice",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 5,
        },
        {
          id: 2,
          type: "packagedProducts",
          image_link:
            "https://static-01.daraz.com.np/p/0471d614029c14448c6548f580626ff3.jpg",
          categories: "Noodles",
          name: "2Pm Noodles",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 1,
        },
        {
          id: 3,
          type: "packagedProducts",
          image_link:
            "https://static-01.daraz.com.np/p/0471d614029c14448c6548f580626ff3.jpg",
          categories: "Noodles",
          name: "2Pm Noodles",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 15,
        },
        {
          id: 4,
          type: "packagedProducts",
          image_link:
            "https://i5.walmartimages.com/asr/34db4c9a-a0cd-46c0-b1b5-008c8527d0a7.e1bd9aef6062e06c1cf2d2649ddd6d33.jpeg",
          categories: "Chips",
          name: "Lays",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 2,
        },
        {
          id: 11,
          type: "packagedProducts",
          image_link:
            "https://assets.winni.in/product/primary/2014/8/37606.jpeg?dpr=1&w=500",
          categories: "Chocolates",
          name: "Dairy Milk Silk",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 30,
        },
      ],
    },
    {
      orderNumber: " #205824106415417",
      shippingType: "Pick up",
      orderedDate: "2019-05-20",
      orderedTime: "01:22",
      receivedDate: "2019-05-23",
      status: "Delivered",
      isPaid: false,
      isOrderFullFilled: true,
      productList: [
        {
          id: 12,
          type: "packagedProducts",
          image_link:
            "https://www.bestvaluemart.com.sg/4992-superlarge_default/oreo-cookie-sandwich-original-12s-x-276g-snacks.jpg",
          categories: "Biscuits",
          name: "Oreo",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 1,
        },
        {
          id: 13,
          type: "packagedProducts",
          image_link:
            "https://static-01.daraz.com.np/p/0471d614029c14448c6548f580626ff3.jpg",
          categories: "Noodles",
          name: "2Pm Noodles",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 3,
        },
        {
          id: 14,
          type: "packagedProducts",
          image_link:
            "https://i5.walmartimages.com/asr/34db4c9a-a0cd-46c0-b1b5-008c8527d0a7.e1bd9aef6062e06c1cf2d2649ddd6d33.jpeg",
          categories: "Chips",
          name: "Lays",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 4,
        },
      ],
    },
    {
      orderNumber: " #205824106415417",
      shippingType: "Delivery",
      orderedDate: "2018-04-15",
      orderedTime: "04:12",
      receivedDate: "2018-04-20",
      status: "Delivered",
      isPaid: false,
      isOrderFullFilled: false,
      productList: [
        {
          id: 1,
          type: "beverage",
          image_link:
            "https://static-01.daraz.com.np/p/4fdcc17b871fc68f89d48946ac224a23.jpg",
          categories: "Juice",
          name: "Mixed Juice",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 5,
        },
        {
          id: 2,
          type: "packagedProducts",
          image_link:
            "https://static-01.daraz.com.np/p/0471d614029c14448c6548f580626ff3.jpg",
          categories: "Noodles",
          name: "2Pm Noodles",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 1,
          isOrderFullFilled: true,
        },
        {
          id: 3,
          type: "packagedProducts",
          image_link:
            "https://static-01.daraz.com.np/p/0471d614029c14448c6548f580626ff3.jpg",
          categories: "Noodles",
          name: "2Pm Noodles",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 15,
        },
        {
          id: 4,
          type: "packagedProducts",
          image_link:
            "https://i5.walmartimages.com/asr/34db4c9a-a0cd-46c0-b1b5-008c8527d0a7.e1bd9aef6062e06c1cf2d2649ddd6d33.jpeg",
          categories: "Chips",
          name: "Lays",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 2,
        },
        {
          id: 11,
          type: "packagedProducts",
          image_link:
            "https://assets.winni.in/product/primary/2014/8/37606.jpeg?dpr=1&w=500",
          categories: "Chocolates",
          name: "Dairy Milk Silk",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 30,
        },
      ],
    },
    {
      orderNumber: " #205824106415417",
      shippingType: "Pick up",
      orderedDate: "2023-12-20",
      orderedTime: "06:33",
      receivedDate: "2023-12-23",
      status: "Delivered",
      isPaid: false,
      isOrderFullFilled: false,
      productList: [
        {
          id: 12,
          type: "packagedProducts",
          image_link:
            "https://www.bestvaluemart.com.sg/4992-superlarge_default/oreo-cookie-sandwich-original-12s-x-276g-snacks.jpg",
          categories: "Biscuits",
          name: "Oreo",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 1,
        },
        {
          id: 13,
          type: "packagedProducts",
          image_link:
            "https://static-01.daraz.com.np/p/0471d614029c14448c6548f580626ff3.jpg",
          categories: "Noodles",
          name: "2Pm Noodles",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 3,
        },
        {
          id: 14,
          type: "packagedProducts",
          image_link:
            "https://i5.walmartimages.com/asr/34db4c9a-a0cd-46c0-b1b5-008c8527d0a7.e1bd9aef6062e06c1cf2d2649ddd6d33.jpeg",
          categories: "Chips",
          name: "Lays",
          currentPrice: "85.00",
          previousPrice: "95.00",
          qty: 4,
        },
      ],
    },
  ],
};

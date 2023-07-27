import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const inputObj = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  city: "",
  street: "",
  number: "",
  secondNumber: "",
};
const Checkout = ({ checkoutFormData, checkOutProducts }) => {
  const [registerInput, setRegisterInput] = useState(inputObj); 
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const [open, setOpen] = useState(false);
  // const successMessage = "Your are Logged in.";
  // const failedMessage = "Username or Password didnot match.";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterInput({ ...registerInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(registerInput));
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
      setRegisterInput((prev) => ({
        ...prev,
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        city: "",
        street: "",
        number: "",
        secondNumber: "",
      }));
      // navigate("/");
      // dispatch(loginReducer());
      setFormSubmitting(false);
      setOpen(true);
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
  const navigate = useNavigate();
  let grandTotal = 0;
  return (
    <>
      <div className="page-contain checkout" style={{ textAlign: "left" }}>
        <div id="main-content" className="main-content">
          <div className="container sm-margin-top-37px">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                <div className="checkout-progress-wrap">
                  <form
                    className="form"
                    id="checkout_form"
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    {checkoutFormData &&
                      checkoutFormData.map((item, idx) => {
                        const { name } = item;
                        return (
                          <span className={item.class} key={idx}>
                            <label key={item.id}>{item.label}</label>
                            <br />
                            <input
                              name={item.name}
                              type={item.type}
                              className={item.inputClass}
                              value={registerInput[item.name]}
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            />
                            <div className="validation-error">
                              {formErrors && formErrors[item.name]}
                            </div>
                          </span>
                        );
                      })}
                  </form>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 sm-padding-top-48px sm-margin-bottom-0 xs-margin-bottom-15px">
                <div className="order-summary sm-margin-bottom-80px">
                  <div className="title-block">
                    <h3 className="title">Order Summary</h3>
                    <a
                      style={{ cursor: "pointer" }}
                      className="link-forward"
                      onClick={() => {
                        navigate("/cart");
                      }}
                    >
                      Edit cart
                    </a>
                  </div>
                  <div className="cart-list-box short-type">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="number">
                        {checkOutProducts && checkOutProducts.length} items
                      </span>
                      <span className="number" style={{ marginRight: "1.5em" }}>
                        Total
                      </span>
                    </span>
                    <ul className="cart-list">
                      {checkOutProducts &&
                        checkOutProducts.map((item) => {
                          const {
                            id = "",
                            name = "",
                            image_link = "",
                            categories = "",
                            currentPrice = "",
                            previousPrice = "",
                            selectedQty = "",
                          } = item;
                          grandTotal += Number(currentPrice * selectedQty);
                          return (
                            <li className="cart-elem" key={id}>
                              <div className="cart-item">
                                <div className="product-thumb">
                                  <a className="prd-thumb" href="#">
                                    <figure>
                                      <img
                                        src={image_link}
                                        width="113"
                                        height="113"
                                        alt="shop-cart"
                                      />
                                    </figure>
                                  </a>
                                </div>
                                <div className="info">
                                  <a href="#" className="pr-name">
                                    {name}
                                  </a>
                                  <span className="txt-category">
                                    {categories}
                                  </span>
                                  <span className="txt-quantity">
                                    <span className="text">Quantity: </span>
                                    {selectedQty}
                                  </span>
                                  <span className="txt-quantity">
                                    <span className="text">Rate: </span>
                                    {Number(currentPrice).toFixed(2)}
                                  </span>
                                </div>
                                <div className="price price-contain">
                                  <ins>
                                    <span className="price-amount">
                                      <span className="currencySymbol">
                                        Rs.
                                      </span>
                                      {Number(
                                        currentPrice * selectedQty
                                      ).toFixed(2)}
                                    </span>
                                  </ins>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                    <ul className="subtotal">
                      <li>
                        <div className="subtotal-line">
                          <b className="stt-name">Subtotal</b>
                          <span className="stt-price">
                            Rs. {grandTotal && grandTotal.toFixed(2)}
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="subtotal-line">
                          <b className="stt-name">Shipping</b>
                          <span className="stt-price">Rs. 20.00</span>
                        </div>
                      </li>
                      <li>
                        <div className="subtotal-line">
                          <b className="stt-name">Tax</b>
                          <span className="stt-price">Rs. 0.00</span>
                        </div>
                      </li>
                      <li style={{ visibility: "hidden" }}>
                        <div className="subtotal-line">
                          <a href="#" className="link-forward">
                            Promo/Gift Certificate
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="subtotal-line">
                          <b className="stt-name">Grand Total:</b>
                          <span className="stt-price">
                            Rs. {grandTotal && (grandTotal + 20).toFixed(2)}
                          </span>
                        </div>
                      </li>
                    </ul>
                    <button
                      type="submit"
                      className="place-your-order-btn"
                      form="checkout_form"
                    >
                      Place Your Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
Checkout.defaultProps = {
  checkoutFormData: [
    {
      id: 1,
      label: "First Name",
      type: "text",
      name: "firstName",
      class: "first-name",
      inputClass: "first-name-input",
    },
    {
      id: 2,
      label: "Middle Name",
      type: "text",
      name: "middleName",
      class: "middle-name",
      inputClass: "middle-name-input",
    },
    {
      id: 3,
      label: "Last Name",
      type: "text",
      name: "lastName",
      class: "last-name",
      inputClass: "last-name-input",
    },
    {
      id: 4,
      label: "Email",
      type: "text",
      name: "email",
      class: "email",
      inputClass: "email-input",
    },
    {
      id: 5,
      label: "City",
      type: "text",
      name: "city",
      class: "city",
      inputClass: "city-input",
    },
    {
      id: 6,
      label: "Street",
      type: "text",
      name: "street",
      class: "street",

      inputClass: "street-input",
    },
    {
      id: 7,
      label: "Number",
      type: "text",
      name: "number",
      class: "number",
      inputClass: "number-input",
    },
    {
      id: 8,
      label: "Second Number",
      type: "text",
      name: "secondNumber",
      class: "second-number",
      inputClass: "second-number-input",
    },
  ],
  checkOutProducts: [
    {
      id: 1,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      selectedQty: 3,
      modalCartData: {
        image_link_list: [
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
          "assets/images/details-product/detail_02.jpg",
          "assets/images/details-product/detail_03.jpg",
          "assets/images/details-product/detail_04.jpg",
          "assets/images/details-product/detail_05.jpg",
          "assets/images/details-product/detail_06.jpg",
          "assets/images/details-product/detail_07.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 4,
      type: "grocery",
      image_link: "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
      categories: "Peas",
      name: "Safal",
      currentPrice: "85.00",
      previousPrice: "95.00",
      selectedQty: 2,
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
          "assets/images/details-product/detail_02.jpg",
          "assets/images/details-product/detail_03.jpg",
          "assets/images/details-product/detail_04.jpg",
          "assets/images/details-product/detail_05.jpg",
          "assets/images/details-product/detail_06.jpg",
          "assets/images/details-product/detail_07.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 3,
      type: "laundryAndHousehold",
      image_link:
        "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Colin",
      currentPrice: "85.00",
      previousPrice: "95.00",
      selectedQty: 5,
      modalCartData: {
        image_link_list: [
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
  ],
};

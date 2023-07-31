import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ActionForm = ({ selectedQty, setSelectedQty, currentPrice }) => {
  const navigate = useNavigate();
  return (
    <div className="action-form" style={{ textAlign: "center" }}>
      <div className="quantity-box">
        {/* <div className="kilogram-wrapper" style={{ overflow: "hidden" }}>
          <span className="lable">Gram: </span>
          <span>
            <input
              type="number"
              min="0"
              step="50"
              style={{
                width: "80px",
              }}
            />
          </span>
        </div> */}
        <span className="title">Quantity:</span>
        <div className="qty-input">
          <input
            type="text"
            name="qty12554"
            value={selectedQty}
            data-max_value="20"
            data-min_value="1"
            data-step="1"
          />
          <a
            href="#"
            className="qty-btn btn-up"
            onClick={() => {
              setSelectedQty((prev) => prev + 1);
            }}
          >
            <i className="fa fa-caret-up" aria-hidden="true"></i>
          </a>
          <a
            href="#"
            className="qty-btn btn-down"
            onClick={() => {
              selectedQty > 1 && setSelectedQty((prev) => prev - 1);
            }}
          >
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="total-price-contain">
        <span className="title">Total Price:</span>
        <p className="price">Rs. {currentPrice * selectedQty}/-</p>
      </div>
      <div className="buttons">
        <a href="#" className="btn add-to-cart-btn">
          add to cart
        </a>
        <div
          className="mini-btns"
          style={{ display: "flex", justifyContent: "center", gap: "1em" }}
        >
          {/* <span className="wishlist-btn">+ View cart</span> */}
          <span
            className="checkout-btn"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            <BsCart4 className="cart-icon" />
            View cart
          </span>
          <span
            className="checkout-btn"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            {/* <BsCart4 className="cart-icon" /> */}
            Checkout
          </span>
        </div>
      </div>
      <div className="social-media">
        <ul className="social-list">
          <li>
            <a href="#" className="social-link">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="fa fa-pinterest" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="fa fa-share-alt" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="acepted-payment-methods">
        <ul className="payment-methods">
          <li>
            <img
              src="https://i2.wp.com/insidergeeks.com/wp-content/uploads/2020/09/eSewa-Digital-Wallet-Nepal.jpeg"
              alt=""
              width="51"
              height="36"
            />
          </li>
          <li>
            <img
              src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2019/08/Khalti-logo-1-1024x571.jpg"
              alt=""
              width="51"
              height="36"
            />
          </li>
          <li>
            <img
              src="https://www.prabhulife.com/wp-content/uploads/2020/05/connectips-icon.png"
              alt=""
              width="51"
              height="36"
            />
          </li>
          <li>
            <img
              src="https://4.bp.blogspot.com/daBK0EXWm2fMFeupwWSefARuzuvookgy6wDy0dJyHSYrn88jtyDbN2r_KLpB_7F07Rc=w1200-h630-p-k-no-nu"
              alt=""
              width="51"
              height="36"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActionForm;

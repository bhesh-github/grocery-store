import React, { useState } from "react";
import DisplayImage from "./DisplayImage";
import { MdClose } from "react-icons/md";

const ModalCart = ({
  selectedCartData = "",
  isDisplayedClass,
  setIsDisplayedClass,
  paymentsImg,
}) => {
  const [selectedQty, setSelectedQty] = useState(1);
  const {
    name = "",
    currentPrice = "",
    previousPrice = "",
    modalCartData = "",
  } = selectedCartData;

  return (
    <>
      <div
        className="overlay"
        style={{ display: `${isDisplayedClass}` }}
        onClick={() => {
          setIsDisplayedClass("none");
        }}
      ></div>
      <div className="cart-outer">
        <div className="modal-cart" style={{ display: `${isDisplayedClass}` }}>
          <div className="display-img-section">
            <DisplayImage
              displayImageList={
                modalCartData &&
                modalCartData.image_link_list &&
                modalCartData.image_link_list
              }
            />
          </div>
          <div className="text-section">
            <div className="btn-wrapper">
              <MdClose
                className="close-btn"
                onClick={() => {
                  setIsDisplayedClass("none");
                }}
              />
            </div>
            <div className="title">{name}</div>
            <div className="price-wrapper">
              <span className="current-price">
                Rs. {currentPrice * selectedQty}.00
              </span>
              <span className="prev-price">Rs. {previousPrice}</span>
            </div>
            <p className="introduction">
              {modalCartData && modalCartData.introduction}
            </p>
            <div className="action-btn-wrapper">
              <div className="btns-wrapper">
                <span
                  className="minus"
                  onClick={() => {
                    selectedQty > 1 && setSelectedQty((prev) => prev - 1);
                  }}
                >
                  -
                </span>
                <input
                  type="text"
                  value={selectedQty && selectedQty}
                  className="input-field"
                />
                <span
                  className="plus"
                  onClick={() => {
                    setSelectedQty((prev) => prev + 1);
                  }}
                >
                  +
                </span>
              </div>
              <div className="add-to-cart-btn">ADD TO CART</div>
            </div>
            <div className="categories-wrapper">
              <div>
                <span className="categories-title">Categories: </span>
                {modalCartData && modalCartData.categories}
              </div>
              <div>
                <span className="categories-title">Tags: </span>food theme
                organic food organic theme
              </div>
              <div>
                <span className="categories-title">Brand: </span>
                {modalCartData && modalCartData.brand}
              </div>
            </div>
            <div className="hr-line"></div>
            <div className="payments-wrapper">
              <div className="title">We Accepts:</div>
              <div className="img-wrapper">
                {paymentsImg &&
                  paymentsImg.map((item, idx) => (
                    <img
                      key={idx}
                      className="payment-img"
                      src={item && item}
                      alt=""
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCart;
ModalCart.defaultProps = {
  paymentsImg: [
    "https://i2.wp.com/insidergeeks.com/wp-content/uploads/2020/09/eSewa-Digital-Wallet-Nepal.jpeg",
    "https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2019/08/Khalti-logo-1-1024x571.jpg",
    "https://www.prabhulife.com/wp-content/uploads/2020/05/connectips-icon.png",
    "https://4.bp.blogspot.com/daBK0EXWm2fMFeupwWSefARuzuvookgy6wDy0dJyHSYrn88jtyDbN2r_KLpB_7F07Rc=w1200-h630-p-k-no-nu",
  ],
};

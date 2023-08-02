import React, { useState } from "react";
import Button from "@mui/material/Button";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom/dist";

const ProductCardForCarousel = ({
  item,
  showBtn,
  showZoomIcon,
  setModalCartDataState,
  setIsDisplayedClass,
}) => {
  const {
    id = "",
    name = "",
    image_link = "",
    categories = "",
    currentPrice = "",
    previousPrice = "",
    type = "",
  } = item;
  const [selectedQty, setSelectedQty] = useState(1);
  const [toggleActionBtns, setToggleActionsBtns] = useState({
    addToCart: "",
    selectQty: "none",
  });
  const navigate = useNavigate();

  return (
    <>
      <div className="product-card-item" key={id}>
        <div className="product-discount">
          <div className="text">
            <span className="save">save</span>
            <span className="price">20/-</span>
          </div>
        </div>
        <div className="contain-product layout-02">
          <div
            className="product-thumb"
            onClick={() => {
              navigate(`/detail-page/${type}/${id}`);
            }}
          >
            <img src={image_link} alt="" className="product-thumnail" />
            {/* {window.innerWidth >=
              '552' &&(
                showZoomIcon && (
                  <GoSearch
                    className="zoom-icon btn_call_quickview"
                    onClick={() => {
                      setModalCartDataState((prev) => ({
                        ...prev,
                        id: id && id,
                        type: type && type,
                      }));
                      setIsDisplayedClass("");
                    }}
                  />
                )
              )} */}
            {showZoomIcon && (
              <GoSearch
                className="zoom-icon btn_call_quickview"
                onClick={() => {
                  setModalCartDataState((prev) => ({
                    ...prev,
                    id: id && id,
                    type: type && type,
                  }));
                  setIsDisplayedClass("");
                }}
              />
            )}
          </div>
          <div className="info-wrapper">
            <div className="info">
              <b className="categories">{categories}</b>
              <h4 className="product-title">
                <span
                  className="pr-name"
                  onClick={() => {
                    navigate(`/detail-page/${type}/${id}`);
                  }}
                >
                  {name}
                </span>
              </h4>
              <div className="product-price">
                <span className="price-amount current-price">
                  <span className="currencySymbol ">Rs.</span>
                  {currentPrice}
                </span>
                <span className="price-amount previous-price">
                  <span className="currencySymbol">Rs.</span>
                  {previousPrice}
                </span>
              </div>
            </div>
            <div className="action-btns-wrapper">
              <div
                className="btns-wrapper"
                style={{ display: `${toggleActionBtns.addToCart}` }}
                onClick={() => {
                  setToggleActionsBtns((prev) => ({
                    ...prev,
                    addToCart: "none",
                    selectQty: "",
                  }));
                }}
              >
                {showBtn && (
                  <Button className="add-to-card-btn">ADD TO CART</Button>
                )}
              </div>
              <div
                className="plus-minus-btns-wrapper"
                style={{ display: `${toggleActionBtns.selectQty}` }}
              >
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardForCarousel;

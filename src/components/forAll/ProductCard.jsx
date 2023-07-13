import React from "react";
import Button from "@mui/material/Button";
import { GoSearch } from "react-icons/go";

const ProductCard = ({ item, showBtn, showZoomIcon }) => {
  const {
    id = "",
    name = "",
    image_link = "",
    categories = "",
    currentPrice = "",
    previousPrice = "",
  } = item;

  return (
    <div className="product-item" key={id}>
      <div className="contain-product layout-02">
        <div className="product-thumb">
          <img
            src={image_link}
            alt="dd"
            width="270"
            height="270"
            className="product-thumnail"
          />
          {showZoomIcon && (
            <GoSearch className="zoom-icon btn_call_quickview" />
          )}
        </div>
        <div className="info">
          <b className="categories">{categories}</b>
          <h4 className="product-title">
            <a href="#" className="pr-name">
              {name}
            </a>
          </h4>
          <div className="price">
            <ins>
              <span className="price-amount">
                <span className="currencySymbol">Rs.</span>
                {currentPrice}
              </span>
            </ins>
            <del>
              <span className="price-amount">
                <span className="currencySymbol">Rs.</span>
                {previousPrice}
              </span>
            </del>
          </div>
        </div>
        <div className="btns-wrapper">
          {showBtn && <Button className="add-to-card-btn">ADD TO CART</Button>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

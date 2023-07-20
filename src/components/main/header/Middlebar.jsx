import React from "react";
import Notification from "./Notification";
import MiniCart from "./MiniCart";

import { BsFillBellFill } from "react-icons/bs";
import BrandLogo from "../../../images/forAll/brandlogo.png";
const Middlebar = () => {
  const handleChangeTesting = () => {};
  return (
    <div className="container">
      <div className="middle-bar">
        <img
          className="brand-logo"
          src={BrandLogo}
          alt=""
          style={{ width: "80px" }}
        />
        <div className="biolife-cart-info">
          <div className="mobile-search">
            <a href="#a" className="open-searchbox">
              <i className="biolife-icon icon-search"></i>
            </a>
            <div className="mobile-search-content">
              <form
                action="#"
                className="form-search"
                name="mobile-seacrh"
                method="get"
              >
                <a href="#" className="btn-close">
                  <span className="biolife-icon icon-close-menu"></span>
                </a>
                <input
                  type="text"
                  name="s"
                  className="input-text"
                  value=""
                  onChange={handleChangeTesting}
                  placeholder="Search here..."
                />
                <select name="category">
                  <option value="-1" defaultValue="">
                    All Categories
                  </option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fresh_berries">Fresh Berries</option>
                  <option value="ocean_foods">Ocean Foods</option>
                  <option value="butter_eggs">Butter & Eggs</option>
                  <option value="fastfood">Fastfood</option>
                  <option value="fresh_meat">Fresh Meat</option>
                  <option value="fresh_onion">Fresh Onion</option>
                  <option value="papaya_crisps">Papaya & Crisps</option>
                  <option value="oatmeal">Oatmeal</option>
                </select>
                <button type="submit" className="btn-submit">
                  go
                </button>
              </form>
            </div>
          </div>
          {/* <div className="wishlist-block hidden-sm hidden-xs">
            <a href="#" className="link-to">
              <span className="icon-qty-combine">
                <BsFillBellFill className="notification-icon" />
                <span className="qty">4</span>
              </span>
            </a>
          </div> */}
          <Notification />
          <MiniCart />

          <div className="mobile-menu-toggle">
            <a className="btn-toggle" data-object="open-mobile-menu" href="#a">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middlebar;

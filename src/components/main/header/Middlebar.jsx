import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import Notification from "./Notification";
import MiniCart from "./MiniCart";
import BrandLogo from "../../../images/forAll/brandlogo.png";
import { useDispatch } from "react-redux";
import { toggleMobileCategoryBar } from "../../../store/features/toggleMobileCategoryBar/toggleMobileCategoryBarSlice";


const Middlebar = () => {
  const [midBarSearchInput, setMidBarSearchInput] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setMidBarSearchInput("");
    }, 1000);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="container midbar-container">
        <div className="middle-bar">
          <img
            className="brand-logo"
            src={BrandLogo}
            alt=""
            style={{ width: "80px" }}
            onClick={() => {
              navigate("/");
              console.log("xxx");
            }}
          />
       
          <div className="biolife-cart-info">
            <div className="mobile-search">
              <a href="#a" className="open-searchbox">
                <i
                  className="biolife-icon icon-search"
                  style={{ marginRight: "0.5em" }}
                ></i>
              </a>
              <div className="mobile-search-content">
                <form
                  className="form-search"
                  name="mobile-search"
                  onSubmit={(e) => {
                    handleFormSubmit(e);
                  }}
                >
                  <span className="btn-close">
                    <span
                      className="biolife-icon icon-close-menu"
                      onClick={() => {
                        setMidBarSearchInput("");
                      }}
                    ></span>
                  </span>
                  <input
                    type="text"
                    name="s"
                    className="input-text"
                    value={midBarSearchInput}
                    onChange={(e) => {
                      setMidBarSearchInput(e.target.value);
                    }}
                    placeholder="Search here..."
                  />
                  <button type="submit" className="btn-submit">
                    go
                  </button>
                </form>
              </div>
            </div>
           
            <Notification />
            <MiniCart />
            <div
              className="mobile-menu-toggle"
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(toggleMobileCategoryBar());
              }}
            >
              <div className="btn-toggle">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Middlebar;

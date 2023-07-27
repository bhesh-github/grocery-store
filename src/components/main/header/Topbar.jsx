import React from "react";
import { useNavigate } from "react-router-dom/dist";
import { BiLogoTiktok } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

import { SiInstagram } from "react-icons/si";
const Topbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-top bg-main hidden-xs top-bar">
        <div className="container">
          <div className="top-bar left">
            <ul className="horizontal-menu">
              <li>
                <a href="#">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  grocerystore@gmail.com
                </a>
              </li>
              <li>
                <a href="#">Save 20% on shopping upto Rs. 2000/-</a>
              </li>
            </ul>
          </div>
          <div className="top-bar right">
            <ul className="social-list">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiLogoTiktok />
                </a>
              </li>
              <li>
                <a href="#">
                  <SiInstagram />
                </a>
              </li>
            </ul>
            <ul className="login-register">
              <li
                onClick={() => {
                  navigate("/register");
                }}
                style={{ color: "#fff", cursor: "pointer" }}
              >
                <i className="biolife-icon icon-login"> </i>
                Login/Register
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
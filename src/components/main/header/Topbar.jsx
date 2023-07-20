import React from "react";
import { BiLogoTiktok } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

import { SiInstagram } from "react-icons/si";
const Topbar = () => {
  return (
    <>
      <div className="header-top bg-main hidden-xs" >
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
            <ul className="horizontal-menu">
              <li className="horz-menu-item currency">
                <select name="currency">
                  {/* <option value="eur">€ EUR (Euro)</option>
                    <option value="usd" defaultValue="">
                      $ USD (Dollar)
                    </option>
                    <option value="usd">£ GBP (Pound)</option>
                    <option value="usd">¥ JPY (Yen)</option> */}
                </select>
              </li>

              <li>
                <a href="login.html" className="login-link">
                  <i className="biolife-icon icon-login"></i>Login/Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;

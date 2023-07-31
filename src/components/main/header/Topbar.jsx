
import { BiLogoTiktok } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const Topbar = () => {

  return (
    <>
      <div className="header-top bg-main hidden-xs top-bar">
        <div className="container">
          <div className="top-bar left">
            <ul className="horizontal-menu">
              <li>
                <a href="#sd">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  grocerystore@gmail.com
                </a>
              </li>
              <li>
                <a href="#sdf">Save 20% on shopping upto Rs. 2000/-</a>
              </li>
            </ul>
          </div>
          <div className="top-bar right">
            <ul className="social-list">
              <li>
                <a href="#asdf">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#asdf">
                  <BiLogoTiktok />
                </a>
              </li>
              <li>
                <a href="#asd">
                  <SiInstagram />
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

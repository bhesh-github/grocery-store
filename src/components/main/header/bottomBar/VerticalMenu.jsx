import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

const VerticalMenu = () => {
  const [isMenuListOn, setIsMenuListOn] = useState(false);

  const toggleVerticalMenu = () => {
    isMenuListOn === false ? setIsMenuListOn(true) : setIsMenuListOn(false);
  };

  return (
    <div className="vertical-menu vertical-category-block" id="vertical_menu">
      <div className="block-title" onClick={toggleVerticalMenu}>
        <IoIosMenu className="react-menu-icon" />
        <span className="menu-title">All departments</span>
        <span className="angle">
          {isMenuListOn ? (
            <AiOutlineCaretDown className="caret-icon" />
          ) : (
            <AiFillCaretUp className="caret-icon" />
          )}
        </span>
      </div>
      {isMenuListOn && (
        <div className="mainmenu">
          <ul className="main-ul">
            <li className="li_nc ">
              <NavLink className="nav-link" to="" target="_self">
                <span className="text-icon-wrapper">
                  <span>Grocery</span>
                  <MdKeyboardArrowRight className="arrow-right" />
                </span>
                <span className="dashed-line"></span>
              </NavLink>
              <ul className="ul_ch">
                <li className="li_hc">
                  <NavLink className="nav-link" to="" target="_self">
                    <span className="text-icon-wrapper">
                      <span>Rice</span>
                      <MdKeyboardArrowRight className="arrow-right" />
                    </span>
                    <span className="dashed-line"></span>
                  </NavLink>
                  <ul className="ul_ch">
                    <li className="li_hc">
                      <NavLink className="nav-link" to="">
                        <span className="text-icon-wrapper">
                          <span>Basmati</span>
                        </span>
                        <span className="dashed-line"></span>
                      </NavLink>
                    </li>
                    <li className="li_nc">
                      <NavLink className="nav-link" to="">
                        Jeera Masino
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="li_hc">
                  <NavLink className="nav-link" to="" target="_self">
                    <span className="text-icon-wrapper">
                      <span>Daal</span>
                      <MdKeyboardArrowRight className="arrow-right" />
                    </span>
                    <span className="dashed-line"></span>
                  </NavLink>
                  <ul className="ul_ch">
                    <li className="li_hc">
                      <NavLink className="nav-link" to="">
                        <span className="text-icon-wrapper">
                          <span>Musuri</span>
                        </span>
                        <span className="dashed-line"></span>
                      </NavLink>
                    </li>
                    <li className="li_nc">
                      <NavLink className="nav-link" to="">
                        Maas
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="li_nc">
                  <NavLink className="nav-link" to="" target="_self">
                    Masala
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="li_hc">
              <NavLink className="nav-link" to="" target="_self">
                <span className="text-icon-wrapper">
                  <span>Fruits & Vegetables</span>
                  <MdKeyboardArrowRight className="arrow-right" />
                </span>
                <span className="dashed-line"></span>
              </NavLink>
              <ul className="ul_ch">
                <li className="li_hc">
                  {/* <NavLink className="nav-link" to="" target="_self">
                    <span className="text-icon-wrapper">
                      <span>Vegetables</span>
                      <MdKeyboardArrowRight className="arrow-right" />
                    </span>
                    <span className="dashed-line"></span>
                  </NavLink>
                  <ul className="ul_ch">
                    <li className="li_hc">
                      <NavLink className="nav-link" to="">
                        <span className="text-icon-wrapper">
                          <span>Description</span>
                          <MdKeyboardArrowRight className="arrow-right" />
                        </span>
                        <span className="dashed-line"></span>
                      </NavLink>
                      <ul className="ul_ch">
                        <li className="li_nc">
                          <NavLink className="nav-link" to="">
                            <span>Overview</span>
                            <span className="dashed-line"></span>
                          </NavLink>
                        </li>
                        <li className="li_nc">
                          <NavLink className="nav-link" to="">
                            <span> General Info</span>
                            <span className="dashed-line"></span>
                          </NavLink>
                        </li>
                        <li className="li_nc">
                          <NavLink className="nav-link" to="">
                            <span> License</span>
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="li_nc">
                      <NavLink className="nav-link" to="">
                        Buy Now
                      </NavLink>
                    </li>
                  </ul> */}
                </li>
                <li className="li_nc">
                  <NavLink className="nav-link" to="" target="_self">
                    <span>Fruits</span>
                    <span className="dashed-line"></span>
                  </NavLink>
                </li>
                <li className="li_nc">
                  <NavLink className="nav-link" to="" target="_self">
                    Vegetables
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="li_hc">
              <NavLink className="nav-link" to="" target="_self">
                <span className="text-icon-wrapper">
                  <span>Meat Items</span>
                  <MdKeyboardArrowRight className="arrow-right" />
                </span>
                <span className="dashed-line"></span>
              </NavLink>
              <ul className="ul_ch">
                <li className="li_nc">
                  <NavLink className="nav-link" to="" target="_self">
                    Chicken<span className="dashed-line"></span>
                  </NavLink>
                </li>
                <li className="li_nc">
                  <NavLink className="nav-link" to="" target="_self">
                    Mutton<span className="dashed-line"></span>
                  </NavLink>
                </li>
                <li className="li_nc">
                  <NavLink className="nav-link" to="" target="_self">
                    Buff<span className="dashed-line"></span>
                  </NavLink>
                </li>
                <li className="li_nc">
                  <NavLink className="nav-link" to="" target="_self">
                    Pork<span className="dashed-line"></span>
                  </NavLink>
                </li>
                <li className="li_nc">
                  <NavLink className="nav-link" to="" target="_self">
                    Chicken Susage
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="li_nc">
              <NavLink className="nav-link" to="">
                Beverage<span className="dashed-line"></span>
              </NavLink>
            </li>
            <li className="li_nc">
              <NavLink className="nav-link" to="">
                Frozzen Foods<span className="dashed-line"></span>
              </NavLink>
            </li>
            <li className="li_nc">
              <NavLink className="nav-link" to="">
                Packaged Food<span className="dashed-line"></span>
              </NavLink>
            </li>
            <li className="li_nc">
              <NavLink className="nav-link" to="">
                Dairy<span className="dashed-line"></span>
              </NavLink>
            </li>
            <li className="li_nc">
              <NavLink className="nav-link" to="">
                Oatmeal<span className="dashed-line"></span>
              </NavLink>
            </li>
            <li className="li_nc">
              <NavLink className="nav-link" to="">
                Bakery <span className="dashed-line"></span>
              </NavLink>
            </li>
            <li className="li_nc">
              <NavLink className="nav-link" to="">
                Room Decoration <span className="dashed-line"></span>
              </NavLink>
            </li>
            <li className="li_nc">
              <NavLink className="nav-link" to="">
                Laundry And Household
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default VerticalMenu;

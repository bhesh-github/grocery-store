import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
// import { TbTruckDelivery } from "react-icons/tb";
import { RiShoppingCart2Line } from "react-icons/ri";
import { SlArrowLeft } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import ProgressIndicator from "../../forAll/ProgressIndicator";
import BrandLogo from "../../../images/forAll/brandlogo.png";
import AccountMenu from "../../forAll/accountMenu/AccountMenu";
import { toggleMobileCategoryBar } from "../../../store/features/toggleMobileCategoryBar/toggleMobileCategoryBarSlice";
import { TfiClose } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Middlebar = ({ categoryList }) => {
  const [logginOut, setLogginOut] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [mobileSearchInputValue, setMobileSearchInputValue] = useState("");
  const [isMobileSearchInput, setIsMobileSearchInput] = useState(false);

  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedInState);
  
  // const [midBarSearchInput, setMidBarSearchInput] = useState("");
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   setTimeout(() => {
  //     setMidBarSearchInput("");
  //   }, 1000);
  // };
  const handleMobileSearch = () => {
    mobileSearchInputValue !== "" && setIsSearching(true);
    mobileSearchInputValue !== "" &&
      setTimeout(() => {
        setIsSearching(false);
        setMobileSearchInputValue("");
        setIsMobileSearchInput(false);
      }, 2000);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMobileCategory = useSelector(
    (state) => state.toggleMobileCategoryBar.toggleMobileCategoryBarState
  );
  isMobileSearchInput || toggleMobileCategory
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  return (
    <>
      {logginOut ||
        (isSearching && (
          <div className="progress-indicator-comp">
            <ProgressIndicator />
          </div>
        ))}
      {toggleMobileCategory && (
        <>
          <div
            className="mobile-category-bar-overlay"
            onClick={() => {
              dispatch(toggleMobileCategoryBar());
            }}
          ></div>
          <div className="mobile-category-bar">
            <TfiClose
              className="close-icon"
              onClick={() => {
                dispatch(toggleMobileCategoryBar());
              }}
            />
            <div className="category-bar">
              {categoryList &&
                categoryList.map((item, idx) => {
                  const { name = "", category = "" } = item;
                  return (
                    <div key={idx} className="category-section">
                      <h4 className="category-name">{name}</h4>
                      {category.map((item, idx) => (
                        <span className="cat" key={idx}>
                          {item}
                        </span>
                      ))}
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
      <div className="container midbar-container">
        {isMobileSearchInput && (
          <div className="search-overlay">
            <div className="wrapper">
              <SlArrowLeft
                className="back-arrow-icon"
                onClick={() => {
                  setIsMobileSearchInput(false);
                }}
              />
              <span className="search-input-wrapper">
                <input
                  value={mobileSearchInputValue}
                  onChange={(e) => {
                    setMobileSearchInputValue(e.target.value);
                  }}
                  type="search"
                  className="search-input"
                  placeholder="Search here . ."
                />
                <CiSearch className="search-icon" />
                <RxCross2
                  className="cross-icon"
                  onClick={() => {
                    setMobileSearchInputValue("");
                  }}
                />
              </span>
              <span className="text" onClick={handleMobileSearch}>
                Search
              </span>
            </div>
          </div>
        )}
        <div className="middle-bar">
          <img
            className="brand-logo"
            src={BrandLogo}
            alt=""
            style={{ width: "80px" }}
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="icons-wrapper">
            {/* <TbTruckDelivery
              onClick={() => {
                navigate("/delivery-form");
              }}
              className="delivery-icon biolife-icon"
            /> */}
            <BiSearch
              className="search-icon biolife-icon"
              onClick={() => {
                setIsMobileSearchInput(true);
              }}
            />
            <RiShoppingCart2Line
              style={{
                color: "rgb(68, 68, 68)",
                width: "30px",
                height: "25px",
              }}
              className="cart-icon"
              onClick={() => {
                navigate("/cart");
              }}
            />
            <div className="account-menu-comp">
              <AccountMenu setLogginOut={setLogginOut} />
            </div>
            {/* {isLoggedIn ? (
              <div className="account-menu-comp">
                <AccountMenu setLogginOut={setLogginOut} />
              </div>
            ) : (
              <ProfileMenu />
            )} */}
            <GiHamburgerMenu
              className="hamburger-icon"
              onClick={() => {
                dispatch(toggleMobileCategoryBar());
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Middlebar;
Middlebar.defaultProps = {
  categoryList: [
    {
      name: "SHOP HOME",
      category: [
        "Specials",
        "My Last Order",
        "My Frequent Purchases",
        "Suggested",
      ],
    },
    {
      name: "ALL DEPARTMENTS",
      category: [
        "Vegetables",
        "Organic Products",
        "Bread",
        "Frozen Meats",
        "Biscuits",
        "Drinks",
        "Sweets",
        "Dairy",
        "Snacks & Chips",
        "Instant Mix",
        "Spices",
        "Pickles",
        "Noodles",
        "Oil & Ghee",
        "Dry Fruits & Nuts",
        "Tea & Coffee",
        "Rice & Atta",
        "Lentils",
        "Pooja Items",
        "Washing & Cleaning Needs",
        "Household Items",
        "Seasonal Items",
      ],
    },
  ],
};

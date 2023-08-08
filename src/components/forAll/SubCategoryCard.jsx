import React from "react";
import { useNavigate } from "react-router-dom/dist";

const SubCategoryCard = ({
  item,
  //   showBtn,
  //   showZoomIcon,
  //   setModalCartDataState,
  //   setIsDisplayedClass,
}) => {
  const { id = "", image_link = "", categories = "", type = "" } = item;
  const navigate = useNavigate();

  return (
    <>
      <div className="sub-category-item" key={id}>
        <div className="contain-product layout-02">
          <div className="product-thumb">
            <img
              src={image_link}
              alt=""
              className="product-thumnail"
              onClick={() => {
                navigate(`/products/${type}/${categories}`);
              }}
            />
          </div>
          <div className="info-wrapper">
            <div className="info">
              <h4 className="product-title">
                <span
                  className="pr-name"
                  onClick={() => {
                    navigate(`/products/${type}/${categories}`);
                  }}
                >
                  {categories}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCategoryCard;

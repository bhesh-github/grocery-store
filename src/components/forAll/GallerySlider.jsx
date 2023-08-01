import React, { useEffect, useState } from "react";
// import { GoDotFill } from "react-icons/go";
// import { GrNext, GrPrevious } from "react-icons/gr";
// import { RxCross2 } from "react-icons/rx";

let preventAutoSlide = true;

const GalleryWithSlider = ({ galleryImages, galleryMobileImages }) => {
  // ---Overlay Switching---
  // ---Gallery Slider---
  const [currentIndex, setCurrentIndex] = useState(0);
  // const currentData = images && images[currentIndex];
  const autoSlide = () => {
    if (preventAutoSlide) {
      const isLastSlide = currentIndex === galleryImages.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };
  let myTimeout;
  useEffect(() => {
    myTimeout = setTimeout(autoSlide, 3000);
  });

  return (
    <>
      {window.innerWidth > "767.5" && (
        <div className="desktop-slider">
          {galleryImages && (
            <div className="gallery-section container rounded-3 px-0">
              <div className="display-image">
                <img
                  src={
                    galleryImages[currentIndex] &&
                    galleryImages[currentIndex].image_link &&
                    galleryImages[currentIndex].image_link
                  }
                  alt=""
                  className="img"
                  onMouseOver={() => {
                    clearTimeout(myTimeout);
                  }}
                  onMouseOut={() => {
                    setCurrentIndex(currentIndex);
                    setTimeout(autoSlide, 3000);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
      {window.innerWidth <= "767.5" && (
        <div className="mobile-slider">
          {galleryMobileImages && (
            <div className="gallery-section container rounded-3 px-0">
              <div
                className="display-image"
                style={{
                  backgroundImage: `url(${
                    galleryMobileImages[currentIndex] &&
                    galleryMobileImages[currentIndex].image_link &&
                    galleryMobileImages[currentIndex].image_link
                  })`,
                }}
                onMouseOver={() => {
                  clearTimeout(myTimeout);
                }}
                onMouseOut={() => {
                  setCurrentIndex(currentIndex);
                  setTimeout(autoSlide, 3000);
                }}
              >
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GalleryWithSlider;

import React, { useEffect, useState } from "react";
// import { GoDotFill } from "react-icons/go";
// import { GrNext, GrPrevious } from "react-icons/gr";
// import { RxCross2 } from "react-icons/rx";

let preventAutoSlide = true;

const GalleryWithSlider = ({ images }) => {
  // ---Overlay Switching---
  // ---Gallery Slider---
  const [currentIndex, setCurrentIndex] = useState(0);
  // const currentData = images && images[currentIndex];

  const autoSlide = () => {
    if (preventAutoSlide) {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };
  useEffect(() => {
    setTimeout(autoSlide, 3000);
  });
  return (
    <>
      {images && (
        <div className="gallery-section container rounded-3 px-0">
          <div className="display-image">
            <img
              src={
                images[currentIndex] &&
                images[currentIndex].image_link &&
                images[currentIndex].image_link
              }
              alt=""
              className="img"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryWithSlider;

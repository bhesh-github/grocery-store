import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const RelatedProductsCarousel = ({ relatedProductsCard }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 5,
    },
    custom1: {
      breakpoint: { max: 1199, min: 1025 },
      items: 4,
    },
    custom2: {
      breakpoint: { max: 1024, min: 992 },
      items: 4,
    },
    custom3: {
      breakpoint: { max: 991, min: 741 },
      items: 3,
    },
    custom4: {
      breakpoint: { max: 740, min: 718 },
      items: 2.9,
    },
    custom5: {
      breakpoint: { max: 719, min: 633 },
      items: 2.5,
    },
    custom6: {
      breakpoint: { max: 632, min: 563 },
      items: 2.2,
    },
    custom7: {
      breakpoint: { max: 562, min: 0 },
      items: 2,
    },
    custom8: {
      breakpoint: { max: 515, min: 473 },
      items: 2,
    },
    custom9: {
      breakpoint: { max: 472, min: 0 },
      items: 1.6,
    },
    // custom10: {
    //   breakpoint: { max: 410, min: 0 },
    //   items: 1.6,
    // },
  };
  return (
    <Carousel responsive={responsive}>
      {relatedProductsCard && relatedProductsCard}
    </Carousel>
  );
};

export default RelatedProductsCarousel;

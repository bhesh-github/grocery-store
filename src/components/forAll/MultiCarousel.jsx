import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
const MultiCarousel = ({ productList }) => {
  const productItem =
    productList &&
    productList.map((item) => {
      const { id = "" } = item;
      return <ProductCard item={item} key={id} />;
    });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 8,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      // swipeable={true}
      infinite={true}
      autoPlaySpeed={1000}
      transitionDuration={500}
      autoPlay={true}
      arrows={false}
    >
      {productItem && productItem}
    </Carousel>
  );
};

export default MultiCarousel;

MultiCarousel.defaultProps = {
  productList: [
    {
      id: 1,
      image_link: "assets/images/products/p-01.jpg",
      categories: "Fruits",
      name: "Avocado",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 2,
      image_link: "assets/images/products/p-02.jpg",
      categories: "Fruits",
      name: "Capsicum",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 3,
      image_link: "assets/images/products/p-03.jpg",
      categories: "Fruits",
      name: "Broccoli",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 4,
      image_link: "assets/images/products/p-30.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 5,
      image_link: "assets/images/products/p-05.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 6,
      image_link: "assets/images/products/p-06.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 7,
      image_link: "assets/images/products/p-07.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 8,
      image_link: "assets/images/products/p-08.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 9,
      image_link: "assets/images/products/p-09.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 10,
      image_link: "assets/images/products/p-10.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 11,
      image_link: "assets/images/products/p-11.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 12,
      image_link: "assets/images/products/p-12.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 13,
      image_link: "assets/images/products/p-13.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 14,
      image_link: "assets/images/products/p-14.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 15,
      image_link: "assets/images/products/p-15.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 16,
      image_link: "assets/images/products/p-16.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 17,
      image_link: "assets/images/products/p-17.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 18,
      image_link: "assets/images/products/p-18.jpg",
      categories: "Fruits",
      name: "National Fresh Fruit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
  ],
};

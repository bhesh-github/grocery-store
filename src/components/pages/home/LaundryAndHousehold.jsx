import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ModalCart from "../../forAll/modalCart/ModalCart";
import ProductCard from "../../forAll/ProductCard";

const LaundryAndHousehold = ({ laundryAndHousehold }) => {
  const [modalCartDataState, setModalCartDataState] = useState({
    id: "",
  });
  const [isDisplayedClass, setIsDisplayedClass] = useState("none");

  const navigate = useNavigate();

  const selectedCartData = laundryAndHousehold.find(
    (item) => item.id === modalCartDataState.id
  );
  const filteredProducts =
    laundryAndHousehold &&
    laundryAndHousehold
      .slice(0, 20)
      .map((item) => (
        <ProductCard
          item={item}
          showBtn={true}
          showZoomIcon={true}
          key={item.id}
          setModalCartDataState={setModalCartDataState}
          setIsDisplayedClass={setIsDisplayedClass}
        />
      ));
  return (
    <>
      <div className="laundry-and-household-comp">
        <h1 className="heading">Laundry And Household</h1>
        <div className="product-cards-wrapper" id="products-top">
          {filteredProducts && filteredProducts}
        </div>
        <button
          className="see-more-btn"
          onClick={() => {
            navigate("/products");
          }}
        >
          See more
        </button>
      </div>
      <ModalCart
        selectedCartData={selectedCartData}
        isDisplayedClass={isDisplayedClass}
        setIsDisplayedClass={setIsDisplayedClass}
      />
    </>
  );
};

export default LaundryAndHousehold;

LaundryAndHousehold.defaultProps = {
  laundryAndHousehold: [
    {
      id: 1,
      type: "laundryAndHousehold",
      image_link: "https://etimg.etb2bimg.com/photo/84794404.cms",
      categories: "Household",
      name: "Harpic",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://etimg.etb2bimg.com/photo/84794404.cms",
          "https://etimg.etb2bimg.com/photo/84794404.cms",
          "https://etimg.etb2bimg.com/photo/84794404.cms",
          "https://etimg.etb2bimg.com/photo/84794404.cms",
          "https://etimg.etb2bimg.com/photo/84794404.cms",
          "https://etimg.etb2bimg.com/photo/84794404.cms",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 2,
      type: "laundryAndHousehold",
      image_link: "https://assets.unileversolutions.com/v1/1619652.png",
      categories: "Laundry",
      name: "Dove",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://assets.unileversolutions.com/v1/1619652.png",
          "https://assets.unileversolutions.com/v1/1619652.png",
          "https://assets.unileversolutions.com/v1/1619652.png",
          "https://assets.unileversolutions.com/v1/1619652.png",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 3,
      type: "laundryAndHousehold",
      image_link:
        "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Colin",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 4,
      type: "laundryAndHousehold",
      image_link:
        "https://cheers.com.np/uploads/products/5135942890477126817741676916492407605172389.png",
      categories: "Household",
      name: "Odonil",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://cheers.com.np/uploads/products/5135942890477126817741676916492407605172389.png",
          "https://cheers.com.np/uploads/products/5135942890477126817741676916492407605172389.png",
          "https://cheers.com.np/uploads/products/5135942890477126817741676916492407605172389.png",
          "https://cheers.com.np/uploads/products/5135942890477126817741676916492407605172389.png",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 5,
      type: "laundryAndHousehold",
      image_link:
        "https://static-01.daraz.com.np/p/d242e6d490b3129b39034345faf7a5c0.jpg",
      categories: "Household",
      name: "Hit",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://static-01.daraz.com.np/p/d242e6d490b3129b39034345faf7a5c0.jpg",
          "https://static-01.daraz.com.np/p/d242e6d490b3129b39034345faf7a5c0.jpg",
          "https://static-01.daraz.com.np/p/d242e6d490b3129b39034345faf7a5c0.jpg",
          "https://static-01.daraz.com.np/p/d242e6d490b3129b39034345faf7a5c0.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 6,
      type: "laundryAndHousehold",
      image_link:
        "https://m.media-amazon.com/images/I/71nJxy1bDcL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Aroma",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://m.media-amazon.com/images/I/71nJxy1bDcL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/71nJxy1bDcL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/71nJxy1bDcL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/71nJxy1bDcL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/71nJxy1bDcL._AC_UF1000,1000_QL80_.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 7,
      type: "laundryAndHousehold",
      image_link:
        "https://m.media-amazon.com/images/I/81fKza7HLlL._AC_UF1000,1000_QL80_.jpg",
      categories: "Laundry",
      name: "Ariel",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://m.media-amazon.com/images/I/81fKza7HLlL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/81fKza7HLlL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/81fKza7HLlL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/81fKza7HLlL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/81fKza7HLlL._AC_UF1000,1000_QL80_.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 8,
      type: "laundryAndHousehold",
      image_link:
        "https://ktmgrocery.com/storeadmin/assets/upload/products/final/42247643-dabur-red-toothpaste-175g.jpg",
      categories: "Household",
      name: "Dabur Red",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://ktmgrocery.com/storeadmin/assets/upload/products/final/42247643-dabur-red-toothpaste-175g.jpg",
          "https://ktmgrocery.com/storeadmin/assets/upload/products/final/42247643-dabur-red-toothpaste-175g.jpg",
          "https://ktmgrocery.com/storeadmin/assets/upload/products/final/42247643-dabur-red-toothpaste-175g.jpg",
          "https://ktmgrocery.com/storeadmin/assets/upload/products/final/42247643-dabur-red-toothpaste-175g.jpg",
          "https://ktmgrocery.com/storeadmin/assets/upload/products/final/42247643-dabur-red-toothpaste-175g.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 9,
      type: "laundryAndHousehold",
      image_link:
        "https://static-01.daraz.com.np/p/6dede3f73efd33eb0b1f1a37594938ca.jpg",
      categories: "Household",
      name: "Dustbin",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://static-01.daraz.com.np/p/6dede3f73efd33eb0b1f1a37594938ca.jpg",
          "https://static-01.daraz.com.np/p/6dede3f73efd33eb0b1f1a37594938ca.jpg",
          "https://static-01.daraz.com.np/p/6dede3f73efd33eb0b1f1a37594938ca.jpg",
          "https://static-01.daraz.com.np/p/6dede3f73efd33eb0b1f1a37594938ca.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 10,
      type: "laundryAndHousehold",
      image_link:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/312033406/QW/WV/ND/90608105/01-3--500x500.jpg",
      categories: "Cleaner",
      name: "Spin Mop",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://5.imimg.com/data5/SELLER/Default/2023/5/312033406/QW/WV/ND/90608105/01-3--500x500.jpg",

          "https://5.imimg.com/data5/SELLER/Default/2023/5/312033406/QW/WV/ND/90608105/01-3--500x500.jpg",

          "https://5.imimg.com/data5/SELLER/Default/2023/5/312033406/QW/WV/ND/90608105/01-3--500x500.jpg",

          "https://5.imimg.com/data5/SELLER/Default/2023/5/312033406/QW/WV/ND/90608105/01-3--500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2023/5/312033406/QW/WV/ND/90608105/01-3--500x500.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 11,
      type: "laundryAndHousehold",
      image_link: "https://etimg.etb2bimg.com/photo/84794404.cms",
      categories: "Household",
      name: "Harpic",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://etimg.etb2bimg.com/photo/84794404.cms",
          "https://etimg.etb2bimg.com/photo/84794404.cms",
          "https://etimg.etb2bimg.com/photo/84794404.cms",
          "https://etimg.etb2bimg.com/photo/84794404.cms",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 12,
      type: "laundryAndHousehold",
      image_link: "https://assets.unileversolutions.com/v1/1619652.png",
      categories: "Laundry",
      name: "Dove",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://assets.unileversolutions.com/v1/1619652.png",
          "https://assets.unileversolutions.com/v1/1619652.png",
          "https://assets.unileversolutions.com/v1/1619652.png",
          "https://assets.unileversolutions.com/v1/1619652.png",
          "https://assets.unileversolutions.com/v1/1619652.png",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 13,
      type: "laundryAndHousehold",
      image_link:
        "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Colin",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 14,
      type: "laundryAndHousehold",
      image_link:
        "https://cheers.com.np/uploads/products/5135942890477126817741676916492407605172389.png",
      categories: "Household",
      name: "Odonil",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
          "assets/images/details-product/detail_02.jpg",
          "assets/images/details-product/detail_03.jpg",
          "assets/images/details-product/detail_04.jpg",
          "assets/images/details-product/detail_05.jpg",
          "assets/images/details-product/detail_06.jpg",
          "assets/images/details-product/detail_07.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 15,
      type: "laundryAndHousehold",
      image_link:
        "https://static-01.daraz.com.np/p/d242e6d490b3129b39034345faf7a5c0.jpg",
      categories: "Household",
      name: "Hit",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
          "assets/images/details-product/detail_02.jpg",
          "assets/images/details-product/detail_03.jpg",
          "assets/images/details-product/detail_04.jpg",
          "assets/images/details-product/detail_05.jpg",
          "assets/images/details-product/detail_06.jpg",
          "assets/images/details-product/detail_07.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 16,
      type: "laundryAndHousehold",
      image_link:
        "https://m.media-amazon.com/images/I/71nJxy1bDcL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Aroma",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
          "assets/images/details-product/detail_02.jpg",
          "assets/images/details-product/detail_03.jpg",
          "assets/images/details-product/detail_04.jpg",
          "assets/images/details-product/detail_05.jpg",
          "assets/images/details-product/detail_06.jpg",
          "assets/images/details-product/detail_07.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 17,
      type: "laundryAndHousehold",
      image_link:
        "https://m.media-amazon.com/images/I/81fKza7HLlL._AC_UF1000,1000_QL80_.jpg",
      categories: "Laundry",
      name: "Ariel",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
          "assets/images/details-product/detail_02.jpg",
          "assets/images/details-product/detail_03.jpg",
          "assets/images/details-product/detail_04.jpg",
          "assets/images/details-product/detail_05.jpg",
          "assets/images/details-product/detail_06.jpg",
          "assets/images/details-product/detail_07.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 18,
      type: "laundryAndHousehold",
      image_link:
        "https://ktmgrocery.com/storeadmin/assets/upload/products/final/42247643-dabur-red-toothpaste-175g.jpg",
      categories: "Household",
      name: "Dabur Red",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
          "assets/images/details-product/detail_02.jpg",
          "assets/images/details-product/detail_03.jpg",
          "assets/images/details-product/detail_04.jpg",
          "assets/images/details-product/detail_05.jpg",
          "assets/images/details-product/detail_06.jpg",
          "assets/images/details-product/detail_07.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 19,
      type: "laundryAndHousehold",
      image_link:
        "https://static-01.daraz.com.np/p/6dede3f73efd33eb0b1f1a37594938ca.jpg",
      categories: "Household",
      name: "Dustbin",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
          "assets/images/details-product/detail_02.jpg",
          "assets/images/details-product/detail_03.jpg",
          "assets/images/details-product/detail_04.jpg",
          "assets/images/details-product/detail_05.jpg",
          "assets/images/details-product/detail_06.jpg",
          "assets/images/details-product/detail_07.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 20,
      type: "laundryAndHousehold",
      image_link:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/312033406/QW/WV/ND/90608105/01-3--500x500.jpg",
      categories: "Cleaner",
      name: "Spin Mop",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
          "assets/images/details-product/detail_02.jpg",
          "assets/images/details-product/detail_03.jpg",
          "assets/images/details-product/detail_04.jpg",
          "assets/images/details-product/detail_05.jpg",
          "assets/images/details-product/detail_06.jpg",
          "assets/images/details-product/detail_07.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
  ],
};

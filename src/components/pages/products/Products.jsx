import React, { useState, useEffect } from "react";
import ProductCard from "../../forAll/ProductCard";
import ModalCart from "../../forAll/modalCart/ModalCart";

const Products = ({ productsList, categoryList }) => {
  const [modalCartDataState, setModalCartDataState] = useState({
    type: "",
    id: "",
  });

  const [sliceNum, setSliceNum] = useState(12);
  const selectedCartData =
    productsList &&
    productsList.find((item) => {
      return item.id === modalCartDataState.id;
    });
  const [isDisplayedClass, setIsDisplayedClass] = useState("none");
  const displayProducts =
    productsList &&
    productsList.slice(0, `${sliceNum}`).map((item) => {
      return (
        <ProductCard
          item={item}
          showBtn={true}
          showZoomIcon={true}
          key={item.id}
          setModalCartDataState={setModalCartDataState}
          setIsDisplayedClass={setIsDisplayedClass}
        />
      );
    });
  const handleInfiniteScroll = async () => {
    try {
      if (
        document.getElementById("product_cards").getBoundingClientRect()
          .bottom <=
        window.innerHeight + 100
      ) {
        setSliceNum((prev) => prev + prev);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <>
      <div className="products-page">
        <div className="content">
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
          <div className="product-cards-wrapper">
            <h4 className="heading">Showing Results... </h4>
            <div className="product-cards" id="product_cards">
              {displayProducts && displayProducts}
            </div>
          </div>
        </div>
        <ModalCart
          selectedCartData={selectedCartData}
          isDisplayedClass={isDisplayedClass}
          setIsDisplayedClass={setIsDisplayedClass}
        />
      </div>
    </>
  );
};

export default Products;
Products.defaultProps = {
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
  productsList: [
    {
      id: 1,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
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
      id: 2,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
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
      id: 3,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
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
      id: 4,
      type: "fruitsandvegetables",
      image_link:
        "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
      categories: "Fruits",
      name: "Papaya",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
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
      id: 5,
      type: "fruitsandvegetables",
      image_link:
        "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
      categories: "Vegetables",
      name: "Carrots",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
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
      id: 6,
      type: "fruitsandvegetables",
      image_link:
        "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
      categories: "Fruits",
      name: "Apple",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
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
      id: 7,
      type: "fruitsandvegetables",
      image_link:
        "https://greenbutler.co.za/cdn/shop/products/vegetables-ginger-250-g-1_14faf911-c487-4016-8bd4-15f8f58f3ee9.jpg?v=1642449113",
      categories: "Vegetables",
      name: "Ginger",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 8,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 9,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 10,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 11,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 12,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 13,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 14,
      type: "fruitsandvegetables",
      image_link:
        "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
      categories: "Fruits",
      name: "Papaya",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      type: "fruitsandvegetables",
      image_link:
        "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
      categories: "Vegetables",
      name: "Carrots",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      type: "fruitsandvegetables",
      image_link:
        "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
      categories: "Fruits",
      name: "Apple",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      type: "fruitsandvegetables",
      image_link:
        "https://greenbutler.co.za/cdn/shop/products/vegetables-ginger-250-g-1_14faf911-c487-4016-8bd4-15f8f58f3ee9.jpg?v=1642449113",
      categories: "Vegetables",
      name: "Ginger",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 21,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
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
      id: 22,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
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
      id: 23,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
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
      id: 24,
      type: "fruitsandvegetables",
      image_link:
        "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
      categories: "Fruits",
      name: "Papaya",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
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
      id: 25,
      type: "fruitsandvegetables",
      image_link:
        "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
      categories: "Vegetables",
      name: "Carrots",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
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
      id: 26,
      type: "fruitsandvegetables",
      image_link:
        "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
      categories: "Fruits",
      name: "Apple",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
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
      id: 27,
      type: "fruitsandvegetables",
      image_link:
        "https://greenbutler.co.za/cdn/shop/products/vegetables-ginger-250-g-1_14faf911-c487-4016-8bd4-15f8f58f3ee9.jpg?v=1642449113",
      categories: "Vegetables",
      name: "Ginger",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 28,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 29,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 30,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 31,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 32,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 33,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 34,
      type: "fruitsandvegetables",
      image_link:
        "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
      categories: "Fruits",
      name: "Papaya",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 35,
      type: "fruitsandvegetables",
      image_link:
        "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
      categories: "Vegetables",
      name: "Carrots",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 36,
      type: "fruitsandvegetables",
      image_link:
        "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
      categories: "Fruits",
      name: "Apple",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 37,
      type: "fruitsandvegetables",
      image_link:
        "https://greenbutler.co.za/cdn/shop/products/vegetables-ginger-250-g-1_14faf911-c487-4016-8bd4-15f8f58f3ee9.jpg?v=1642449113",
      categories: "Vegetables",
      name: "Ginger",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 38,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 39,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 40,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 41,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
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
      id: 42,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
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
      id: 43,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
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
      id: 44,
      type: "fruitsandvegetables",
      image_link:
        "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
      categories: "Fruits",
      name: "Papaya",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
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
      id: 45,
      type: "fruitsandvegetables",
      image_link:
        "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
      categories: "Vegetables",
      name: "Carrots",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
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
      id: 46,
      type: "fruitsandvegetables",
      image_link:
        "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
      categories: "Fruits",
      name: "Apple",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
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
      id: 47,
      type: "fruitsandvegetables",
      image_link:
        "https://greenbutler.co.za/cdn/shop/products/vegetables-ginger-250-g-1_14faf911-c487-4016-8bd4-15f8f58f3ee9.jpg?v=1642449113",
      categories: "Vegetables",
      name: "Ginger",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 48,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 49,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 50,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 51,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 52,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 53,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 54,
      type: "fruitsandvegetables",
      image_link:
        "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
      categories: "Fruits",
      name: "Papaya",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 55,
      type: "fruitsandvegetables",
      image_link:
        "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
      categories: "Vegetables",
      name: "Carrots",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 56,
      type: "fruitsandvegetables",
      image_link:
        "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
      categories: "Fruits",
      name: "Apple",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 57,
      type: "fruitsandvegetables",
      image_link:
        "https://greenbutler.co.za/cdn/shop/products/vegetables-ginger-250-g-1_14faf911-c487-4016-8bd4-15f8f58f3ee9.jpg?v=1642449113",
      categories: "Vegetables",
      name: "Ginger",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 58,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 59,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 60,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 61,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
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
      id: 62,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
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
      id: 63,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
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
      id: 64,
      type: "fruitsandvegetables",
      image_link:
        "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
      categories: "Fruits",
      name: "Papaya",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
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
      id: 65,
      type: "fruitsandvegetables",
      image_link:
        "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
      categories: "Vegetables",
      name: "Carrots",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
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
      id: 66,
      type: "fruitsandvegetables",
      image_link:
        "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
      categories: "Fruits",
      name: "Apple",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
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
      id: 67,
      type: "fruitsandvegetables",
      image_link:
        "https://greenbutler.co.za/cdn/shop/products/vegetables-ginger-250-g-1_14faf911-c487-4016-8bd4-15f8f58f3ee9.jpg?v=1642449113",
      categories: "Vegetables",
      name: "Ginger",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 68,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 69,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 70,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 71,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 72,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 73,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 74,
      type: "fruitsandvegetables",
      image_link:
        "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
      categories: "Fruits",
      name: "Papaya",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 75,
      type: "fruitsandvegetables",
      image_link:
        "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
      categories: "Vegetables",
      name: "Carrots",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 76,
      type: "fruitsandvegetables",
      image_link:
        "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
      categories: "Fruits",
      name: "Apple",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 77,
      type: "fruitsandvegetables",
      image_link:
        "https://greenbutler.co.za/cdn/shop/products/vegetables-ginger-250-g-1_14faf911-c487-4016-8bd4-15f8f58f3ee9.jpg?v=1642449113",
      categories: "Vegetables",
      name: "Ginger",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 78,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 79,
      type: "fruitsandvegetables",
      image_link:
        "https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg",
      categories: "Vegetables",
      name: "Onions",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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
      id: 80,
      type: "fruitsandvegetables",
      image_link:
        "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
      categories: "Fruits",
      name: "Tomato",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
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

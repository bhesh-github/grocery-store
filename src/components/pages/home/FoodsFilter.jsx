import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../forAll/ProductCard";
import ModalCart from "../../forAll/modalCart/ModalCart";
import { ReactComponent as Vegetable } from "../../../images/viewIcons/vegetable.svg";
import { ReactComponent as Beverage } from "../../../images/viewIcons/beverages.svg";
import { ReactComponent as Milk } from "../../../images/viewIcons/milk.svg";
import { ReactComponent as Protein } from "../../../images/viewIcons/protein.svg";
import { ReactComponent as Snacks } from "../../../images/viewIcons/snacks.svg";
import { ReactComponent as Grocery } from "../../../images/viewIcons/grocery.svg";

const ViewItems = ({ viewProductsIcon, productList }) => {
  const [currentIconId, setCurrentIconId] = useState(0);
  const [hovering, setHovering] = useState();
  const [hoveredIconId, setHoveredIconId] = useState("grey");
  const [currentCategory, setCurrentCateogry] = useState(
    productList &&
      productList.fruitsandvegetables &&
      productList.fruitsandvegetables
  );
  const [modalCartDataState, setModalCartDataState] = useState({
    type: "",
    id: "",
  });

  const navigate = useNavigate();
  const selectedCartData =
    productList[modalCartDataState.type] &&
    productList[modalCartDataState.type].find(
      (item) => item.id === modalCartDataState.id
    );
  const [isDisplayedClass, setIsDisplayedClass] = useState("none");

  const iconBadge =
    viewProductsIcon &&
    viewProductsIcon.map((item) => {
      const { id = "", name = "", type = "" } = item;
      const iconColor = "#E73918";
      const iconConditions = {
        fruitsandvegetables: (
          <Vegetable
            className="icon"
            fill={
              hovering
                ? id === hoveredIconId || id === currentIconId
                  ? iconColor
                  : "grey"
                : id === currentIconId
                ? iconColor
                : "grey"
            }
          />
        ),
        beverage: (
          <Beverage
            className="icon"
            fill={
              hovering
                ? id === hoveredIconId || id === currentIconId
                  ? iconColor
                  : "grey"
                : id === currentIconId
                ? iconColor
                : "grey"
            }
          />
        ),
        packagedProducts: (
          <Snacks
            className="icon"
            fill={
              hovering
                ? id === hoveredIconId || id === currentIconId
                  ? iconColor
                  : "grey"
                : id === currentIconId
                ? iconColor
                : "grey"
            }
          />
        ),
        grocery: (
          <Grocery
            className="icon"
            fill={
              hovering
                ? id === hoveredIconId || id === currentIconId
                  ? iconColor
                  : "grey"
                : id === currentIconId
                ? iconColor
                : "grey"
            }
          />
        ),
        bakeryanddairy: (
          <Milk
            className="icon"
            fill={
              hovering
                ? id === hoveredIconId || id === currentIconId
                  ? iconColor
                  : "grey"
                : id === currentIconId
                ? iconColor
                : "grey"
            }
          />
        ),
        eggsandmeat: (
          <Protein
            className="icon"
            fill={
              hovering
                ? id === hoveredIconId || id === currentIconId
                  ? iconColor
                  : "grey"
                : id === currentIconId
                ? iconColor
                : "grey"
            }
          />
        ),
      };
      const icon = iconConditions[type];
      return (
        <div
          className="icon-badge"
          style={{
            color: `${
              hovering
                ? id === hoveredIconId || id === currentIconId
                  ? iconColor
                  : "grey"
                : id === currentIconId
                ? iconColor
                : "grey"
            }`,
          }}
          onClick={() => {
            document.getElementById("products-top").scrollIntoView();
            window.scrollBy(
              0,
              -document.getElementById("filter_nav").getBoundingClientRect()
                .height - 5
            );
            setCurrentCateogry(productList && productList[type]);
            setCurrentIconId(id);
          }}
          onMouseOver={() => {
            setHovering(true);
            setHoveredIconId(id);
          }}
          onMouseOut={() => {
            setHovering(false);
            setHoveredIconId("grey");
          }}
          key={id}
        >
          {icon}
          {name}
        </div>
      );
    });
  const filteredProducts =
    currentCategory &&
    currentCategory
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
      <div className="foods-filter-comp">
        <div className="container filter-nav" id="filter_nav">
          <div className="biolife-tab biolife-tab-contain sm-margin-top-34px">
            <div className="tab-head tab-head__icon-top-layout icon-top-layout">
              <div className="icons-wrapper">{iconBadge}</div>
            </div>
          </div>
        </div>
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

export default ViewItems;

ViewItems.defaultProps = {
  viewProductsIcon: [
    {
      id: 0,
      name: "Fruits & Vegetables",
      type: "fruitsandvegetables",
    },
    {
      id: 1,
      name: "Beverage",
      type: "beverage",
    },
    {
      id: 2,
      name: "Packaged Foods",
      type: "packagedProducts",
    },
    {
      id: 3,
      name: "Grocery",
      type: "grocery",
    },
    {
      id: 4,
      name: "Bakery & Dairy",
      type: "bakeryanddairy",
    },
    {
      id: 5,
      name: "Eggs & Meat",
      type: "eggsandmeat",
    },
  ],
  productList: {
    fruitsandvegetables: [
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
    ],
    beverage: [
      {
        id: 1,
        type: "beverage",
        image_link:
          "https://static-01.daraz.com.np/p/4fdcc17b871fc68f89d48946ac224a23.jpg",
        categories: "Juice",
        name: "Mixed Juice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://static-01.daraz.com.np/p/4fdcc17b871fc68f89d48946ac224a23.jpg",
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
        type: "beverage",
        image_link:
          "https://static-01.daraz.com.np/p/a21281f087480bfb69e720b0f850ee62.jpg",
        categories: "Juice",
        name: "Litchi Juice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://static-01.daraz.com.np/p/a21281f087480bfb69e720b0f850ee62.jpg",
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
        type: "beverage",
        image_link:
          "https://thulo.com/images/detailed/135/MTR-badam_wekc-an.jpg",
        categories: "Can Juice",
        name: "Badam Juice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://thulo.com/images/detailed/135/MTR-badam_wekc-an.jpg",
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
        type: "beverage",
        image_link:
          "https://i0.wp.com/frontdoordelivery.co.uk/wp-content/uploads/2020/05/Red-Bull-24.png?fit=1000%2C1000&ssl=1",
        categories: "Can Juice",
        name: "Red Bull",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://i0.wp.com/frontdoordelivery.co.uk/wp-content/uploads/2020/05/Red-Bull-24.png?fit=1000%2C1000&ssl=1",
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
        type: "beverage",
        image_link:
          "https://nypost.com/wp-content/uploads/sites/2/2023/02/coca-cola.jpg",
        categories: "Can Juice",
        name: "Coke",
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
        id: 6,
        type: "beverage",
        image_link: "https://m.media-amazon.com/images/I/81C9nWCPXgL.jpg",
        categories: "Alcohol",
        name: "Jack Daniels",
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
        id: 7,
        type: "beverage",
        image_link:
          "https://cdn.shopify.com/s/files/1/0043/9258/3217/products/Chivas-Regal-12-Year-Old-Blended-Scotch-Whisky-700ml-box_2048x2048.png?v=1664259619",
        categories: "Alcohol",
        name: "Chivas Regal",
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
        type: "beverage",
        image_link:
          "https://theurbangrape.shop/cdn/shop/products/macallan25.jpg?v=1670001218",
        categories: "Alcohol",
        name: "Macallan",
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
        type: "beverage",
        image_link:
          "https://liquorsnepal.com/wp-content/uploads/2020/08/beefeatergin__30811.1591527559.jpg",
        categories: "Alcohol",
        name: "Beefeater",
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
        type: "beverage",
        image_link:
          "https://cheers.com.np/uploads/products/967985184961269339315917346651927310567053.png",
        categories: "Alcohol",
        name: "Bombay Sapphire",
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
        type: "beverage",
        image_link:
          "https://static-01.daraz.com.np/p/4fdcc17b871fc68f89d48946ac224a23.jpg",
        categories: "Juice",
        name: "Mixed Juice",
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
        type: "beverage",
        image_link:
          "https://static-01.daraz.com.np/p/a21281f087480bfb69e720b0f850ee62.jpg",
        categories: "Juice",
        name: "Litchi Juice",
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
        type: "beverage",
        image_link:
          "https://thulo.com/images/detailed/135/MTR-badam_wekc-an.jpg",
        categories: "Can Juice",
        name: "Badam Juice",
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
        type: "beverage",
        image_link:
          "https://i0.wp.com/frontdoordelivery.co.uk/wp-content/uploads/2020/05/Red-Bull-24.png?fit=1000%2C1000&ssl=1",
        categories: "Can Juice",
        name: "Red Bull",
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
        type: "beverage",
        image_link:
          "https://nypost.com/wp-content/uploads/sites/2/2023/02/coca-cola.jpg",
        categories: "Can Juice",
        name: "Coke",
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
        type: "beverage",
        image_link: "https://m.media-amazon.com/images/I/81C9nWCPXgL.jpg",
        categories: "Alcohol",
        name: "Jack Daniels",
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
        type: "beverage",
        image_link:
          "https://cdn.shopify.com/s/files/1/0043/9258/3217/products/Chivas-Regal-12-Year-Old-Blended-Scotch-Whisky-700ml-box_2048x2048.png?v=1664259619",
        categories: "Alcohol",
        name: "Chivas Regal",
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
        type: "beverage",
        image_link:
          "https://theurbangrape.shop/cdn/shop/products/macallan25.jpg?v=1670001218",
        categories: "Alcohol",
        name: "Macallan",
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
        type: "beverage",
        image_link:
          "https://liquorsnepal.com/wp-content/uploads/2020/08/beefeatergin__30811.1591527559.jpg",
        categories: "Alcohol",
        name: "Beefeater",
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
        type: "beverage",
        image_link:
          "https://cheers.com.np/uploads/products/967985184961269339315917346651927310567053.png",
        categories: "Alcohol",
        name: "Bombay Sapphire",
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
    packagedProducts: [
      {
        id: 1,
        type: "packagedProducts",
        image_link:
          "https://assets.winni.in/product/primary/2014/8/37606.jpeg?dpr=1&w=500",
        categories: "Chocolates",
        name: "Dairy Milk Silk",
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
        id: 2,
        type: "packagedProducts",
        image_link:
          "https://www.bestvaluemart.com.sg/4992-superlarge_default/oreo-cookie-sandwich-original-12s-x-276g-snacks.jpg",
        categories: "Biscuits",
        name: "Oreo",
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
        id: 3,
        type: "packagedProducts",
        image_link:
          "https://static-01.daraz.com.np/p/0471d614029c14448c6548f580626ff3.jpg",
        categories: "Noodles",
        name: "2Pm Noodles",
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
        id: 4,
        type: "packagedProducts",
        image_link:
          "https://i5.walmartimages.com/asr/34db4c9a-a0cd-46c0-b1b5-008c8527d0a7.e1bd9aef6062e06c1cf2d2649ddd6d33.jpeg",
        categories: "Chips",
        name: "Lays",
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
        id: 5,
        type: "packagedProducts",
        image_link:
          "https://usegeniius.com/optimized/6094be0fcf2e4-HALDIRAMS%20KHATTA%20MEETHA%20360GM.jpg",
        categories: "Bhuja",
        name: "Khatta Meetha Haldirams",
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
        id: 6,
        type: "packagedProducts",
        image_link:
          "https://static-01.daraz.com.np/p/d21207b38510b02c85f9cea23bb68d5a.jpg",
        categories: "Chocolates",
        name: "Marshmallow",
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
        id: 7,
        type: "packagedProducts",
        image_link:
          "https://assets.winni.in/product/primary/2014/8/37606.jpeg?dpr=1&w=500",
        categories: "Chocolates",
        name: "Dairy Milk Silk",
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
        type: "packagedProducts",
        image_link:
          "https://www.bestvaluemart.com.sg/4992-superlarge_default/oreo-cookie-sandwich-original-12s-x-276g-snacks.jpg",
        categories: "Biscuits",
        name: "Oreo",
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
        type: "packagedProducts",
        image_link:
          "https://static-01.daraz.com.np/p/0471d614029c14448c6548f580626ff3.jpg",
        categories: "Noodles",
        name: "2Pm Noodles",
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
        type: "packagedProducts",
        image_link:
          "https://i5.walmartimages.com/asr/34db4c9a-a0cd-46c0-b1b5-008c8527d0a7.e1bd9aef6062e06c1cf2d2649ddd6d33.jpeg",
        categories: "Chips",
        name: "Lays",
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
        type: "packagedProducts",
        image_link:
          "https://assets.winni.in/product/primary/2014/8/37606.jpeg?dpr=1&w=500",
        categories: "Chocolates",
        name: "Dairy Milk Silk",
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
        type: "packagedProducts",
        image_link:
          "https://www.bestvaluemart.com.sg/4992-superlarge_default/oreo-cookie-sandwich-original-12s-x-276g-snacks.jpg",
        categories: "Biscuits",
        name: "Oreo",
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
        type: "packagedProducts",
        image_link:
          "https://static-01.daraz.com.np/p/0471d614029c14448c6548f580626ff3.jpg",
        categories: "Noodles",
        name: "2Pm Noodles",
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
        type: "packagedProducts",
        image_link:
          "https://i5.walmartimages.com/asr/34db4c9a-a0cd-46c0-b1b5-008c8527d0a7.e1bd9aef6062e06c1cf2d2649ddd6d33.jpeg",
        categories: "Chips",
        name: "Lays",
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
        type: "packagedProducts",
        image_link:
          "https://usegeniius.com/optimized/6094be0fcf2e4-HALDIRAMS%20KHATTA%20MEETHA%20360GM.jpg",
        categories: "Bhuja",
        name: "Khatta Meetha Haldirams",
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
        type: "packagedProducts",
        image_link:
          "https://static-01.daraz.com.np/p/d21207b38510b02c85f9cea23bb68d5a.jpg",
        categories: "Chocolates",
        name: "Marshmallow",
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
        type: "packagedProducts",
        image_link:
          "https://assets.winni.in/product/primary/2014/8/37606.jpeg?dpr=1&w=500",
        categories: "Chocolates",
        name: "Dairy Milk Silk",
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
        type: "packagedProducts",
        image_link:
          "https://www.bestvaluemart.com.sg/4992-superlarge_default/oreo-cookie-sandwich-original-12s-x-276g-snacks.jpg",
        categories: "Biscuits",
        name: "Oreo",
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
        type: "packagedProducts",
        image_link:
          "https://static-01.daraz.com.np/p/0471d614029c14448c6548f580626ff3.jpg",
        categories: "Noodles",
        name: "2Pm Noodles",
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
        type: "packagedProducts",
        image_link:
          "https://i5.walmartimages.com/asr/34db4c9a-a0cd-46c0-b1b5-008c8527d0a7.e1bd9aef6062e06c1cf2d2649ddd6d33.jpeg",
        categories: "Chips",
        name: "Lays",
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
    grocery: [
      {
        id: 1,
        type: "grocery",
        image_link: "https://thulo.com/images/detailed/97/IMG_4582.jpg",
        categories: "Rice",
        name: "Hulas premium Basmati Rice",
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
        id: 2,
        type: "grocery",
        image_link:
          "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        categories: "Daal",
        name: "Chana Daal",
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
        id: 3,
        type: "grocery",
        image_link:
          "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
        categories: "Daal",
        name: "Kaalo Daal",
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
        id: 4,
        type: "grocery",
        image_link: "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
        categories: "Peas",
        name: "Safal",
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
        id: 5,
        type: "grocery",
        image_link:
          "https://www.century-foods.com/wp-content/uploads/2021/02/chicken-masala-2.png",
        categories: "Masala",
        name: "Century Chicken Masala",
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
        id: 6,
        type: "grocery",
        image_link:
          "https://static-01.daraz.com.np/p/ce9cb70368e3fcf1aa18f2d813dc5854.jpg",
        categories: "Oil",
        name: "Fortune Oil",
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
        id: 7,
        type: "grocery",
        image_link: "https://thulo.com/images/detailed/97/IMG_4582.jpg",
        categories: "Rice",
        name: "Hulas premium Basmati Rice",
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
        type: "grocery",
        image_link:
          "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        categories: "Daal",
        name: "Chana Daal",
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
        type: "grocery",
        image_link:
          "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
        categories: "Daal",
        name: "Kaalo Daal",
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
        type: "grocery",
        image_link: "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
        categories: "Peas",
        name: "Safal",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 11,
        type: "grocery",
        image_link: "https://thulo.com/images/detailed/97/IMG_4582.jpg",
        categories: "Rice",
        name: "Hulas premium Basmati Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 12,
        type: "grocery",
        image_link:
          "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        categories: "Daal",
        name: "Chana Daal",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 13,
        type: "grocery",
        image_link:
          "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
        categories: "Daal",
        name: "Kaalo Daal",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 14,
        type: "grocery",
        image_link: "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
        categories: "Peas",
        name: "Safal",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 15,
        type: "grocery",
        image_link:
          "https://www.century-foods.com/wp-content/uploads/2021/02/chicken-masala-2.png",
        categories: "Masala",
        name: "Century Chicken Masala",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 16,
        type: "grocery",
        image_link:
          "https://static-01.daraz.com.np/p/ce9cb70368e3fcf1aa18f2d813dc5854.jpg",
        categories: "Oil",
        name: "Fortune Oil",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 17,
        type: "grocery",
        image_link: "https://thulo.com/images/detailed/97/IMG_4582.jpg",
        categories: "Rice",
        name: "Hulas premium Basmati Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 18,
        type: "grocery",
        image_link:
          "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        categories: "Daal",
        name: "Chana Daal",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 19,
        type: "grocery",
        image_link:
          "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
        categories: "Daal",
        name: "Kaalo Daal",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 20,
        type: "grocery",
        image_link: "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
        categories: "Peas",
        name: "Safal",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
    ],
    bakeryanddairy: [
      {
        id: 1,
        type: "bakeryanddairy",
        image_link:
          "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
        categories: "Cake",
        name: "Birthday Cake",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 2,
        type: "bakeryanddairy",

        image_link:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F04%2F08%2Fchocolate-chip-muffins-ck-2000.jpg&q=60",
        categories: "Bakery & Bakes",
        name: "Muffins",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 3,
        type: "bakeryanddairy",
        image_link:
          "https://i5.walmartimages.com/asr/b4f8f564-4f10-4a25-b0f9-07c4fd384093.88fc00ecefb31f98440960e546c7d395.jpeg",
        categories: "Milk",
        name: "Almond Milk",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 4,
        type: "bakeryanddairy",
        image_link:
          "https://images-gmi-pmc.edge-generalmills.com/00070470004389_C1C1_s102_b219cb88-538f-470d-af7c-788f5e03491a.jpg",
        categories: "Yogurt",
        name: "Yoplait Plain",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 5,
        type: "bakeryanddairy",
        image_link:
          "https://www.sujaldairy.com.np/assets/upload/images/product/safal-standard-milk.jpg",
        categories: "Milk",
        name: "Milk",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 6,
        type: "bakeryanddairy",
        image_link:
          "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00011161451013/96cd361acc834cd7bac543cf6c0a3641_large.png&width=512&type=webp&quality=90",
        categories: "Ice Cream",
        name: "Country Fresh",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 7,
        type: "bakeryanddairy",
        image_link:
          "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
        categories: "Cake",
        name: "Birthday Cake",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 8,
        type: "bakeryanddairy",
        image_link:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F04%2F08%2Fchocolate-chip-muffins-ck-2000.jpg&q=60",
        categories: "Bakery & Bakes",
        name: "Muffins",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 9,
        type: "bakeryanddairy",
        image_link:
          "https://i5.walmartimages.com/asr/b4f8f564-4f10-4a25-b0f9-07c4fd384093.88fc00ecefb31f98440960e546c7d395.jpeg",
        categories: "Milk",
        name: "Almond Milk",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 10,
        type: "bakeryanddairy",
        image_link:
          "https://images-gmi-pmc.edge-generalmills.com/00070470004389_C1C1_s102_b219cb88-538f-470d-af7c-788f5e03491a.jpg",
        categories: "Yogurt",
        name: "Yoplait Plain",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 11,
        type: "bakeryanddairy",
        image_link:
          "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
        categories: "Cake",
        name: "Birthday Cake",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 12,
        type: "bakeryanddairy",
        image_link:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F04%2F08%2Fchocolate-chip-muffins-ck-2000.jpg&q=60",
        categories: "Bakery & Bakes",
        name: "Muffins",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 13,
        type: "bakeryanddairy",
        image_link:
          "https://i5.walmartimages.com/asr/b4f8f564-4f10-4a25-b0f9-07c4fd384093.88fc00ecefb31f98440960e546c7d395.jpeg",
        categories: "Milk",
        name: "Almond Milk",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 14,
        type: "bakeryanddairy",
        image_link:
          "https://images-gmi-pmc.edge-generalmills.com/00070470004389_C1C1_s102_b219cb88-538f-470d-af7c-788f5e03491a.jpg",
        categories: "Yogurt",
        name: "Yoplait Plain",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 15,
        type: "bakeryanddairy",
        image_link:
          "https://www.sujaldairy.com.np/assets/upload/images/product/safal-standard-milk.jpg",
        categories: "Milk",
        name: "Milk",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 16,
        type: "bakeryanddairy",
        image_link:
          "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00011161451013/96cd361acc834cd7bac543cf6c0a3641_large.png&width=512&type=webp&quality=90",
        categories: "Ice Cream",
        name: "Country Fresh",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 17,
        type: "bakeryanddairy",
        image_link:
          "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
        categories: "Cake",
        name: "Birthday Cake",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 18,
        type: "bakeryanddairy",
        image_link:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F04%2F08%2Fchocolate-chip-muffins-ck-2000.jpg&q=60",
        categories: "Bakery & Bakes",
        name: "Muffins",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 19,
        type: "bakeryanddairy",
        image_link:
          "https://i5.walmartimages.com/asr/b4f8f564-4f10-4a25-b0f9-07c4fd384093.88fc00ecefb31f98440960e546c7d395.jpeg",
        categories: "Milk",
        name: "Almond Milk",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 20,
        type: "bakeryanddairy",
        image_link:
          "https://images-gmi-pmc.edge-generalmills.com/00070470004389_C1C1_s102_b219cb88-538f-470d-af7c-788f5e03491a.jpg",
        categories: "Yogurt",
        name: "Yoplait Plain",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
    ],
    eggsandmeat: [
      {
        id: 1,
        type: "eggsandmeat",
        image_link:
          "https://freshtodommot.com/cdn/shop/products/crate-of-eggs.jpg?v=1588922566",
        categories: "Eggs & Meat",
        name: "Eggs 1 crate",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 2,
        type: "eggsandmeat",

        image_link:
          "https://media.istockphoto.com/id/1050904454/vector/vector-salmon-packaging-illustration.jpg?s=612x612&w=0&k=20&c=idcj0_1Q1YyUrBPFuE9CYrgJ3xuWXCVTnpCwAHtvlGk=",
        categories: "Fruits",
        name: "Fresh Salmon",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 3,
        type: "eggsandmeat",
        image_link:
          "https://images.freshop.com/00044700022689/0868f44829fbb3ab38ec4989dfe5bbc1_large.png",
        categories: "Bacon",
        name: "Center Cut",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 4,
        type: "eggsandmeat",
        image_link:
          "https://www.truestoryfoods.com/wp-content/uploads/2018/12/org_sweet_italian_330x380px.jpg",
        categories: "Susage",
        name: "True Story",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 5,
        type: "eggsandmeat",
        image_link: "https://thulo.com/images/detailed/143/1_zga1-o6.jpg",
        categories: "Susage",
        name: "Buff Susage",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 6,
        type: "eggsandmeat",
        image_link:
          "https://i5.walmartimages.com/asr/8d9256c7-120d-4f28-bd25-cc6dda363c0f.0dec2035d24066454d645b61626c42c4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        categories: "Salami",
        name: "Hard Salami",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 7,
        type: "eggsandmeat",
        image_link:
          "https://freshtodommot.com/cdn/shop/products/crate-of-eggs.jpg?v=1588922566",
        categories: "Eggs & Meat",
        name: "Eggs 1 crate",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 8,
        type: "eggsandmeat",
        image_link:
          "https://media.istockphoto.com/id/1050904454/vector/vector-salmon-packaging-illustration.jpg?s=612x612&w=0&k=20&c=idcj0_1Q1YyUrBPFuE9CYrgJ3xuWXCVTnpCwAHtvlGk=",
        categories: "Fruits",
        name: "Fresh Salmon",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 9,
        type: "eggsandmeat",
        image_link:
          "https://images.freshop.com/00044700022689/0868f44829fbb3ab38ec4989dfe5bbc1_large.png",
        categories: "Bacon",
        name: "Center Cut",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 10,
        type: "eggsandmeat",

        image_link:
          "https://www.truestoryfoods.com/wp-content/uploads/2018/12/org_sweet_italian_330x380px.jpg",
        categories: "Susage",
        name: "True Story",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 11,
        type: "eggsandmeat",

        image_link:
          "https://freshtodommot.com/cdn/shop/products/crate-of-eggs.jpg?v=1588922566",
        categories: "Eggs & Meat",
        name: "Eggs 1 crate",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 12,
        type: "eggsandmeat",

        image_link:
          "https://media.istockphoto.com/id/1050904454/vector/vector-salmon-packaging-illustration.jpg?s=612x612&w=0&k=20&c=idcj0_1Q1YyUrBPFuE9CYrgJ3xuWXCVTnpCwAHtvlGk=",
        categories: "Fruits",
        name: "Fresh Salmon",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 13,
        type: "eggsandmeat",

        image_link:
          "https://images.freshop.com/00044700022689/0868f44829fbb3ab38ec4989dfe5bbc1_large.png",
        categories: "Bacon",
        name: "Center Cut",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 14,
        type: "eggsandmeat",

        image_link:
          "https://www.truestoryfoods.com/wp-content/uploads/2018/12/org_sweet_italian_330x380px.jpg",
        categories: "Susage",
        name: "True Story",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 15,
        type: "eggsandmeat",

        image_link: "https://thulo.com/images/detailed/143/1_zga1-o6.jpg",
        categories: "Susage",
        name: "Buff Susage",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 16,
        type: "eggsandmeat",

        image_link:
          "https://i5.walmartimages.com/asr/8d9256c7-120d-4f28-bd25-cc6dda363c0f.0dec2035d24066454d645b61626c42c4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        categories: "Salami",
        name: "Hard Salami",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 17,
        type: "eggsandmeat",
        image_link:
          "https://freshtodommot.com/cdn/shop/products/crate-of-eggs.jpg?v=1588922566",
        categories: "Eggs & Meat",
        name: "Eggs 1 crate",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 18,
        type: "eggsandmeat",
        image_link:
          "https://media.istockphoto.com/id/1050904454/vector/vector-salmon-packaging-illustration.jpg?s=612x612&w=0&k=20&c=idcj0_1Q1YyUrBPFuE9CYrgJ3xuWXCVTnpCwAHtvlGk=",
        categories: "Fruits",
        name: "Fresh Salmon",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 19,
        type: "eggsandmeat",
        image_link:
          "https://images.freshop.com/00044700022689/0868f44829fbb3ab38ec4989dfe5bbc1_large.png",
        categories: "Bacon",
        name: "Center Cut",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
      {
        id: 20,
        type: "eggsandmeat",
        image_link:
          "https://www.truestoryfoods.com/wp-content/uploads/2018/12/org_sweet_italian_330x380px.jpg",
        categories: "Susage",
        name: "True Story",
        currentPrice: "85.00",
        previousPrice: "95.00",
      },
    ],
  },
};

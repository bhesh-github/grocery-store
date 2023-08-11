import { useState } from "react";
import SubCategoryCard from "../../forAll/SubCategoryCard";
import { ReactComponent as Beauty } from "../../../images/viewIcons/beauty.svg";
import { ReactComponent as Vegetable } from "../../../images/viewIcons/vegetable.svg";
import { ReactComponent as Milk } from "../../../images/viewIcons/milk.svg";
import { ReactComponent as Protein } from "../../../images/viewIcons/protein.svg";
import { ReactComponent as Snacks } from "../../../images/viewIcons/snacks.svg";
import { ReactComponent as Grocery } from "../../../images/viewIcons/grocery.svg";

const ViewItems = ({ viewProductsIcon, productList }) => {
  const [currentIconId, setCurrentIconId] = useState(0);
  const [hovering, setHovering] = useState();
  const [hoveredIconId, setHoveredIconId] = useState("grey");
  const [currentCategory, setCurrentCateogry] = useState(
    productList && productList.grocery && productList.grocery
  );
  const [setModalCartDataState] = useState({
    type: "",
    id: "",
  });
  const [activeAlphabet, setActiveAlphabet] = useState({
    index: 0,
    alpha: "A",
  });

  // const navigate = useNavigate();
  // const selectedCartData =
  //   productList[modalCartDataState.type] &&
  //   productList[modalCartDataState.type].find(
  //     (item) => item.id === modalCartDataState.id
  //   );
  // const [isDisplayedClass, setIsDisplayedClass] = useState("none");

  const iconBadge =
    viewProductsIcon &&
    viewProductsIcon.map((item, idx) => {
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
        beauty: (
          <Beauty
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
        <>
          <div
            key={idx}
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
          >
            {icon}
            {name}
          </div>
        </>
      );
    });
  const alphabeticFilteredSubCategory =
    currentCategory &&
    currentCategory.filter((item) => {
      return item.categories[0].toUpperCase() === activeAlphabet.alpha;
    });

  const SubCategoryCards =
    alphabeticFilteredSubCategory &&
    alphabeticFilteredSubCategory.map((item, idx) => (
      <SubCategoryCard
        item={item}
        showBtn={true}
        showZoomIcon={true}
        key={idx}
        setModalCartDataState={setModalCartDataState}
      />
    ));

  let alphabets = [];
  for (let i = 65; i < 65 + 26; i++) {
    alphabets.push(String.fromCharCode(i));
  }

  const handleAlphabetClick = (sentAlpha, sentIdx) => {
    setActiveAlphabet((prev) => ({
      ...prev,
      index: sentIdx,
      alpha: sentAlpha,
    }));
  };

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
        <div className="product-cards-outer">
          <div className="product-cards-wrapper" id="products-top">
            {SubCategoryCards && SubCategoryCards}
          </div>
          <div className="alphabets">
            {alphabets &&
              alphabets.map((alpha, idx) => {
                return activeAlphabet.index === idx ? (
                  <span
                    key={idx}
                    className="alphabet active-alphabet"
                    onClick={() => {
                      document.getElementById("products-top").scrollIntoView();
                      window.scrollBy(
                        0,
                        -document
                          .getElementById("filter_nav")
                          .getBoundingClientRect().height - 5
                      );
                    }}
                  >
                    {alpha.toUpperCase()}
                  </span>
                ) : (
                  <span
                    key={idx}
                    className="alphabet cursorable"
                    onClick={() => {
                      handleAlphabetClick(alpha, idx);
                      document.getElementById("products-top").scrollIntoView();
                      window.scrollBy(
                        0,
                        -document
                          .getElementById("filter_nav")
                          .getBoundingClientRect().height - 5
                      );
                    }}
                  >
                    {alpha.toUpperCase()}
                  </span>
                );
              })}
          </div>
        </div>
        {/* <button
          className="see-more-btn"
          onClick={() => {
            navigate("/products");
          }}
        >
          See more
        </button> */}
      </div>
    </>
  );
};

export default ViewItems;

ViewItems.defaultProps = {
  viewProductsIcon: [
    {
      id: 0,
      name: "Grocery",
      type: "grocery",
    },
    {
      id: 1,
      name: "Bakery & Dairy",
      type: "bakeryanddairy",
    },
    {
      id: 2,
      name: "Eggs & Meat",
      type: "eggsandmeat",
    },

    {
      id: 3,
      name: "Packaged Foods",
      type: "packagedProducts",
    },
    {
      id: 4,
      name: "Beauty",
      type: "beauty",
    },
  ],
  productList: {
    beauty: [
      {
        id: 1,
        type: "beauty",
        image_link:
          "https://happyshoppe.com.np/wp-content/uploads/2020/08/patanjali-saundarya-aloe-vera-gel-60g.jpg",
        categories: "Aloevera Gel",
      },
      {
        id: 2,
        type: "beauty",
        image_link:
          "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/290018/pond-s-bright-beauty-spot-less-glow-face-wash-with-vitamins-100-g-13_3_display_1652946556_d5f74c4b.jpg",
        categories: "Face Wash",
      },
      {
        id: 3,
        type: "beauty",
        image_link:
          "https://cdn.1sell.com/uploads/products/Oc/Yr/8A/OcYr8ANwy6Pnr3kgV1kejp9vyOBTylT17YlslXiXpNZwnInDE4rU1YgmNH2uQXeH1w1KRi9mCTcCfRsxvbSjIsNAnvBj9U1hITPu_1024@2x.jpg",
        categories: "Sun Block",
      },
      {
        id: 4,
        type: "beauty",
        image_link:
          "https://static.thcdn.com/images/large/original//productimg/1600/1600/11111915-1535036941287147.jpg",
        categories: "Sun Cream",
      },
      {
        id: 5,
        type: "beauty",
        image_link:
          "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,dpr-2/static/img/product/138316/faces-glam-on-volume-perfect-mascara-black-8-ml-18_3_display_1612710816_a0542575.jpg",
        categories: "Maskaras",
      },
      {
        id: 6,
        type: "beauty",
        image_link:
          "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/o/p/opi-nail-lacquer-opi-red-15ml.jpg",
        categories: "Nail Polish",
      },
      {
        id: 7,
        type: "beauty",
        image_link:
          "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/n/y/nyx-pro-makeup-epic-wear-liquid-liner-black-3-5ml.jpg",
        categories: "Eye Liner",
      },
      {
        id: 8,
        type: "beauty",
        image_link:
          "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/j/o/johnson-s-baby-lotion-500ml_2.jpg",
        categories: "Lotion",
      },
      {
        id: 9,
        type: "beauty",
        image_link: "https://m.media-amazon.com/images/I/61AlDO+mNLL.jpg",
        categories: "Lip Balm",
      },
      {
        id: 10,
        type: "beauty",
        image_link:
          "https://makeupworld.pk/cdn/shop/products/secretkey-fitting-forever-lip-stick1_1200x1200.jpg?v=1577506609",
        categories: "Lip Stick",
      },
    ],
    packagedProducts: [
      {
        id: 1,
        type: "packagedProducts",
        image_link:
          "https://assets.winni.in/product/primary/2014/8/37606.jpeg?dpr=1&w=500",
        categories: "Chocolates",
      },
      {
        id: 2,
        type: "packagedProducts",
        image_link:
          "https://www.bestvaluemart.com.sg/4992-superlarge_default/oreo-cookie-sandwich-original-12s-x-276g-snacks.jpg",
        categories: "Biscuits",
      },
      {
        id: 3,
        type: "packagedProducts",
        image_link:
          "https://static-01.daraz.com.np/p/0471d614029c14448c6548f580626ff3.jpg",
        categories: "Noodles",
      },
      {
        id: 4,
        type: "packagedProducts",
        image_link:
          "https://i5.walmartimages.com/asr/34db4c9a-a0cd-46c0-b1b5-008c8527d0a7.e1bd9aef6062e06c1cf2d2649ddd6d33.jpeg",
        categories: "Chips",
      },
      {
        id: 5,
        type: "packagedProducts",
        image_link:
          "https://usegeniius.com/optimized/6094be0fcf2e4-HALDIRAMS%20KHATTA%20MEETHA%20360GM.jpg",
        categories: "Bhuja",
      },
    ],
    grocery: [
      {
        id: 1,
        type: "grocery",
        image_link: "https://thulo.com/images/detailed/97/IMG_4582.jpg",
        categories: "Rice",
      },
      {
        id: 3,
        type: "grocery",
        image_link:
          "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
        categories: "Daal",
      },
      {
        id: 4,
        type: "grocery",
        image_link: "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
        categories: "Peas",
      },
      {
        id: 5,
        type: "grocery",
        image_link:
          "https://www.century-foods.com/wp-content/uploads/2021/02/chicken-masala-2.png",
        categories: "Masala",
      },
      {
        id: 6,
        type: "grocery",
        image_link:
          "https://static-01.daraz.com.np/p/ce9cb70368e3fcf1aa18f2d813dc5854.jpg",
        categories: "Oil",
      },
      {
        id: 21,
        type: "grocery",
        image_link:
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
        categories: "Vegetables",
      },
      {
        id: 23,
        type: "grocery",
        image_link:
          "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_1600x.jpg?v=1598080165",
        categories: "Fruits",
      },
      {
        id: 24,
        type: "grocery",
        image_link:
          "https://i5.walmartimages.com/asr/4fa8bc43-4b2e-4c2b-bbac-4562691e366d.0ff28b1b7139ae055501d5a57a64b1d4.jpeg",
        categories: "Aluminum Foil",
      },
      {
        id: 25,
        type: "grocery",
        image_link:
          "https://cdn.tragate.com/items/soft-touch-air-fresheners-air-fresheners-138133-932952.jpg",
        categories: "Air Fresheners",
      },
      {
        id: 26,
        type: "grocery",
        image_link:
          "https://static-01.daraz.com.np/p/e3008a88350e2c7d9cf9e42faba1eab3.jpg",
        categories: "Aprons",
      },
      {
        id: 26,
        type: "grocery",
        image_link:
          "https://static-01.daraz.com.np/p/26bc8eaa4cd624c783672abef5b810f1.jpg",
        categories: "Ayurvedic Products",
      },
    ],
    bakeryanddairy: [
      {
        id: 1,
        type: "bakeryanddairy",
        image_link:
          "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
        categories: "Cake",
      },
      {
        id: 2,
        type: "bakeryanddairy",

        image_link:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F04%2F08%2Fchocolate-chip-muffins-ck-2000.jpg&q=60",
        categories: "Muffin",
      },
      {
        id: 3,
        type: "bakeryanddairy",
        image_link:
          "https://i5.walmartimages.com/asr/b4f8f564-4f10-4a25-b0f9-07c4fd384093.88fc00ecefb31f98440960e546c7d395.jpeg",
        categories: "Milk",
      },
      {
        id: 4,
        type: "bakeryanddairy",
        image_link:
          "https://images-gmi-pmc.edge-generalmills.com/00070470004389_C1C1_s102_b219cb88-538f-470d-af7c-788f5e03491a.jpg",
        categories: "Yogurt",
      },

      {
        id: 6,
        type: "bakeryanddairy",
        image_link:
          "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00011161451013/96cd361acc834cd7bac543cf6c0a3641_large.png&width=512&type=webp&quality=90",
        categories: "Ice Cream",
      },
    ],
    eggsandmeat: [
      {
        id: 1,
        type: "eggsandmeat",
        image_link:
          "https://freshtodommot.com/cdn/shop/products/crate-of-eggs.jpg?v=1588922566",
        categories: "Eggs",
      },
      {
        id: 2,
        type: "eggsandmeat",
        image_link:
          "https://media.istockphoto.com/id/1050904454/vector/vector-salmon-packaging-illustration.jpg?s=612x612&w=0&k=20&c=idcj0_1Q1YyUrBPFuE9CYrgJ3xuWXCVTnpCwAHtvlGk=",
        categories: "Salmon",
      },
      {
        id: 3,
        type: "eggsandmeat",
        image_link:
          "https://images.freshop.com/00044700022689/0868f44829fbb3ab38ec4989dfe5bbc1_large.png",
        categories: "Bacon",
      },

      {
        id: 5,
        type: "eggsandmeat",
        image_link: "https://thulo.com/images/detailed/143/1_zga1-o6.jpg",
        categories: "Susage",
      },
      {
        id: 6,
        type: "eggsandmeat",
        image_link:
          "https://i5.walmartimages.com/asr/8d9256c7-120d-4f28-bd25-cc6dda363c0f.0dec2035d24066454d645b61626c42c4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        categories: "Salami",
      },
    ],
  },
};

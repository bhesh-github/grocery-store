import React, { useState, useEffect } from "react";
import ProductCard from "../../forAll/ProductCard";
import ModalCart from "../../forAll/modalCart/ModalCart";
import { useParams } from "react-router-dom";

const Products = ({ productsList, categoryList }) => {
  const [modalCartDataState, setModalCartDataState] = useState({
    type: "",
    id: "",
  });
  const [activeAlphabet, setActiveAlphabet] = useState({
    index: 0,
    alpha: "A",
  });
  let { subType = "", slugCategory = "" } = useParams();

  const [sliceNum, setSliceNum] = useState(12);
  const selectedCartData =
    productsList &&
    productsList[subType].find((item) => {
      const { id = "" } = item;
      return id === modalCartDataState.id;
    });
  const [isDisplayedClass, setIsDisplayedClass] = useState("none");

  const filteredProductCategory =
    productsList &&
    productsList[subType] &&
    productsList[subType].filter((item) => {
      const { categories } = item;
      return categories === slugCategory && slugCategory;
    });

  const sortedAlpha = [];
  let otherAlpha = [];
  const filteredProductItems =
    filteredProductCategory &&
    filteredProductCategory.filter((item) => {
      const { name = "" } = item;
      name[0] !== activeAlphabet.alpha && otherAlpha.push(item);
      if (!sortedAlpha.find((sortedA) => sortedA === name[0])) {
        sortedAlpha.push(name[0]);
      }
      return name[0] === activeAlphabet.alpha;
    });

  const otherProductsData = otherAlpha.sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  const finalSortedAlpha = sortedAlpha && sortedAlpha.sort();

  useEffect(() => {
    setActiveAlphabet((prev) => ({
      ...prev,
      index: 0,
      alpha: finalSortedAlpha[0],
    }));
  }, []);

  const displayProducts =
    filteredProductItems &&
    filteredProductItems.slice(0, `${sliceNum}`).map((item) => {
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
  const otherDisplayProducts =
    otherProductsData &&
    otherProductsData.slice(0, `${sliceNum}`).map((item) => {
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

  const handleAlphabetClick = (sentAlpha, sentIdx) => {
    setActiveAlphabet((prev) => ({
      ...prev,
      index: sentIdx,
      alpha: sentAlpha,
    }));
  };
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
          <div className="product-cards-wrapper" id="product_cards_wrapper">
            {/* <h4 className="heading">Showing Results... </h4> */}
            <div className="product-cards-alphabets-wrapper">
              <div
                className="product-cards"
                id="product_cards"
                style={{ width: "100%" }}
              >
                {displayProducts && displayProducts}
                {otherDisplayProducts && otherDisplayProducts}
              </div>
              <div className="alphabets">
                {finalSortedAlpha &&
                  finalSortedAlpha.map((item, idx) => {
                    return activeAlphabet.index === idx ? (
                      <span
                        key={idx}
                        className="alphabet active-alphabet"
                        onClick={() => {
                          handleAlphabetClick(item, idx);
                          document
                            .getElementById("product_cards_wrapper")
                            .scrollIntoView();
                          window.scrollBy(0, -25);
                        }}
                      >
                        {item}
                      </span>
                    ) : (
                      <span
                        key={idx}
                        className="alphabet cursorable"
                        onClick={() => {
                          handleAlphabetClick(item, idx);
                          document
                            .getElementById("product_cards_wrapper")
                            .scrollIntoView();
                          window.scrollBy(0, -25);
                        }}
                      >
                        {item.toUpperCase()}
                      </span>
                    );
                  })}
              </div>
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
  productsList: {
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
        image_link:
          "https://www.meroshopping.com/images/Hulas_Jeera_masino_rice_5kg.jpg",
        categories: "Rice",
        name: "Jira Masino",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://www.meroshopping.com/images/Hulas_Jeera_masino_rice_5kg.jpg",
            "https://www.meroshopping.com/images/Hulas_Jeera_masino_rice_5kg.jpg",
            "https://www.meroshopping.com/images/Hulas_Jeera_masino_rice_5kg.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 2,
        type: "grocery",
        image_link:
          "https://cdnprod.mafretailproxy.com/sys-master-root/h35/he6/13153572913182/1784853_main.jpg_480Wx480H",
        categories: "Rice",
        name: "Basmati Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://cdnprod.mafretailproxy.com/sys-master-root/h35/he6/13153572913182/1784853_main.jpg_480Wx480H",
            "https://cdnprod.mafretailproxy.com/sys-master-root/h35/he6/13153572913182/1784853_main.jpg_480Wx480H",
            "https://cdnprod.mafretailproxy.com/sys-master-root/h35/he6/13153572913182/1784853_main.jpg_480Wx480H",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 3,
        type: "grocery",
        image_link:
          "https://wholesalepasalplus.com/uploads/product/juneli_30kg.jpg",
        categories: "Rice",
        name: "Mansuli Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://wholesalepasalplus.com/uploads/product/juneli_30kg.jpg",
            "https://wholesalepasalplus.com/uploads/product/juneli_30kg.jpg",
            "https://wholesalepasalplus.com/uploads/product/juneli_30kg.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 4,
        type: "grocery",
        image_link:
          "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/11698846_XL1_20220405.jpg?w=1200&q=70",
        categories: "Rice",
        name: "Brown Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/11698846_XL1_20220405.jpg?w=1200&q=70",
            "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/11698846_XL1_20220405.jpg?w=1200&q=70",
            "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/11698846_XL1_20220405.jpg?w=1200&q=70",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 5,
        type: "grocery",
        image_link:
          "https://www.goenka.com.np/upload/product/1612088708Untitled-1.png",
        categories: "Rice",
        name: "Usina Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://www.goenka.com.np/upload/product/1612088708Untitled-1.png",
            "https://www.goenka.com.np/upload/product/1612088708Untitled-1.png",
            "https://www.goenka.com.np/upload/product/1612088708Untitled-1.png",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 6,
        type: "grocery",
        image_link:
          "https://static-01.daraz.com.np/p/78c9d91ebf96a426bc07ce9ae1d493e0.jpg",
        categories: "Rice",
        name: "Marsi Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://static-01.daraz.com.np/p/78c9d91ebf96a426bc07ce9ae1d493e0.jpg",
            "https://static-01.daraz.com.np/p/78c9d91ebf96a426bc07ce9ae1d493e0.jpg",
            "https://static-01.daraz.com.np/p/78c9d91ebf96a426bc07ce9ae1d493e0.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 7,
        type: "grocery",
        image_link:
          "https://static-01.daraz.com.np/p/3c4f2f897d2365ac69f4d67ee2d5809d.jpg",
        categories: "Rice",
        name: "Long Grain Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://static-01.daraz.com.np/p/3c4f2f897d2365ac69f4d67ee2d5809d.jpg",
            "https://static-01.daraz.com.np/p/3c4f2f897d2365ac69f4d67ee2d5809d.jpg",
            "https://static-01.daraz.com.np/p/3c4f2f897d2365ac69f4d67ee2d5809d.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 8,
        type: "grocery",
        image_link: "https://m.media-amazon.com/images/I/71IPIDdl9wL.jpg",
        categories: "Rice",
        name: "Biryani Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://m.media-amazon.com/images/I/71IPIDdl9wL.jpg",
            "https://m.media-amazon.com/images/I/71IPIDdl9wL.jpg",
            "https://m.media-amazon.com/images/I/71IPIDdl9wL.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 9,
        type: "grocery",
        image_link:
          "https://d20g9rk0b3pszo.cloudfront.net/images/detailed/686/aaaaaa.png?t=1678605652",
        categories: "Rice",
        name: "Shahi Pulao Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://d20g9rk0b3pszo.cloudfront.net/images/detailed/686/aaaaaa.png?t=1678605652",
            "https://d20g9rk0b3pszo.cloudfront.net/images/detailed/686/aaaaaa.png?t=1678605652",
            "https://d20g9rk0b3pszo.cloudfront.net/images/detailed/686/aaaaaa.png?t=1678605652",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 10,
        type: "grocery",
        image_link:
          "https://nepalgramodhyog.store/images/products/white%20lotus%20taichin%20rice%201kg.jpg",
        categories: "Rice",
        name: "Taichin Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://nepalgramodhyog.store/images/products/white%20lotus%20taichin%20rice%201kg.jpg",
            "https://nepalgramodhyog.store/images/products/white%20lotus%20taichin%20rice%201kg.jpg",
            "https://nepalgramodhyog.store/images/products/white%20lotus%20taichin%20rice%201kg.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 11,
        type: "grocery",
        image_link: "https://m.media-amazon.com/images/I/81XsRpptjPL.jpg",
        categories: "Rice",
        name: "Sushi Rice",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://m.media-amazon.com/images/I/81XsRpptjPL.jpg",
            "https://m.media-amazon.com/images/I/81XsRpptjPL.jpg",
            "https://m.media-amazon.com/images/I/81XsRpptjPL.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 12,
        type: "grocery",
        image_link:
          "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FLifestyle%2F2020-20-First-Thing-You-Should-Do-With-Aluminum-Foil%2FLifestyle-The-First-Thing-You-Should-Do-With-A-New-Box-of-Aluminum-Foil_086",
        categories: "Aluminum Foil",
        name: "Raynolds Wrap",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FLifestyle%2F2020-20-First-Thing-You-Should-Do-With-Aluminum-Foil%2FLifestyle-The-First-Thing-You-Should-Do-With-A-New-Box-of-Aluminum-Foil_086",
            "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FLifestyle%2F2020-20-First-Thing-You-Should-Do-With-Aluminum-Foil%2FLifestyle-The-First-Thing-You-Should-Do-With-A-New-Box-of-Aluminum-Foil_086",
            "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FLifestyle%2F2020-20-First-Thing-You-Should-Do-With-Aluminum-Foil%2FLifestyle-The-First-Thing-You-Should-Do-With-A-New-Box-of-Aluminum-Foil_086",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 13,
        type: "grocery",
        image_link:
          "https://www.asahikasei-hp.com/wp-content/uploads/2021/12/Reduces-Calories-FPF-1024x1024.jpg",
        categories: "Aluminum Foil",
        name: "Frying Pan Foil",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://www.asahikasei-hp.com/wp-content/uploads/2021/12/Reduces-Calories-FPF-1024x1024.jpg",
            "https://www.asahikasei-hp.com/wp-content/uploads/2021/12/Reduces-Calories-FPF-1024x1024.jpg",
            "https://www.asahikasei-hp.com/wp-content/uploads/2021/12/Reduces-Calories-FPF-1024x1024.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
      },
      {
        id: 14,
        type: "grocery",
        image_link:
          "https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hb8/h8a/8806932873246/330925.jpg?width=1280&height=1280",
        categories: "Air Fresheners",
        name: "Air Wick",
        currentPrice: "85.00",
        previousPrice: "95.00",
        modalCartData: {
          image_link_list: [
            "https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hb8/h8a/8806932873246/330925.jpg?width=1280&height=1280",
            "https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hb8/h8a/8806932873246/330925.jpg?width=1280&height=1280",
            "https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hb8/h8a/8806932873246/330925.jpg?width=1280&height=1280",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Rice",
        },
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

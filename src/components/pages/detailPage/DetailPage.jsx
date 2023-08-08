import React, { useState } from "react";
import DisplayImage from "./DisplayImage";
// import ProductCard from "../../forAll/ProductCard";
import ProductCardForCarousel from "../../forAll/ProductCardForCarousel";
import RelatedProductsCarousel from "./RelatedProductsCarousel";
import MuiTabs from "../../forAll/MuiTabs";
import ActionForm from "./ActionForm";
import { useParams } from "react-router-dom";

const DetailPage = ({ productList }) => {
  const [selectedQty, setSelectedQty] = useState(1);

  // const relatedProductsCard =  relatedProducts.map((item) => (
  //   <ProductCardForCarousel key={item.id} item={item} showBtn={true} />
  // ));
  const relatedProductsCard =
    productList &&
    productList.fruitsandvegetables &&
    productList.fruitsandvegetables.map((item) => (
      <ProductCardForCarousel key={item.id} item={item} showBtn={true} />
    ));
  const { typeSlug = "", idSlug = "" } = useParams();

  const selectedType = productList[typeSlug];
  const foundDetail =
    selectedType &&
    selectedType.find((item) => {
      return Number(item.id) === Number(idSlug);
    });

  return (
    <div style={{ textAlign: "left" }}>
      <div className="page-contain single-product">
        <div className="container">
          <div id="main-content" className="main-content">
            <div className="sumary-product single-layout">
              <DisplayImage
                displayImageList={
                  foundDetail &&
                  foundDetail.modalCartData &&
                  foundDetail.modalCartData.image_link_list
                }
              />
              <div className="product-attribute">
                <h3 className="title">
                  {foundDetail && foundDetail.name && foundDetail.name}
                </h3>
                <div className="price">
                  <ins>
                    <span className="price-amount">
                      <span className="currencySymbol">
                        Rs. {foundDetail && foundDetail.currentPrice}
                      </span>
                    </span>
                  </ins>
                  <div>
                    <span className="price-amount">
                      <span className="currencySymbol">
                        Rs. {foundDetail && foundDetail.previousPrice}
                      </span>
                    </span>
                  </div>
                </div>
                <p className="excerpt">
                  {foundDetail &&
                    foundDetail.modalCartData &&
                    foundDetail.modalCartData.introduction}
                </p>
                <hr style={{ marginRight: "5em" }} />
                <div style={{ color: "grey" }}>
                  <div>
                    <span style={{ color: "#000" }}>Categories: </span>{" "}
                    {foundDetail &&
                      foundDetail.modalCartData &&
                      foundDetail.modalCartData.categories}
                  </div>
                  <div>
                    <span style={{ color: "#000" }}>Tags: </span>{" "}
                    {foundDetail &&
                      foundDetail.modalCartData &&
                      foundDetail.modalCartData.tags}
                  </div>
                  <div>
                    <span style={{ color: "#000" }}>Brand: </span>{" "}
                    {foundDetail &&
                      foundDetail.modalCartData &&
                      foundDetail.modalCartData.brand}
                  </div>
                </div>
                {/* <div className="shipping-info">
                  <p className="shipping-day">3-Day Shipping</p>
                  <p className="for-today">Pree Pickup Today</p>
                </div> */}
              </div>
              <ActionForm
                selectedQty={selectedQty}
                setSelectedQty={setSelectedQty}
                currentPrice={foundDetail && foundDetail.currentPrice}
              />
            </div>
          </div>
          <MuiTabs
            productInformation={
              foundDetail &&
              foundDetail.modalCartData &&
              foundDetail.modalCartData.productInformation
            }
          />
          <div className="related-products-section">
            <h3 className="main-title">Related Products</h3>
            <div className="product-cards-wrapper" style={{ display: "block" }}>
              <RelatedProductsCarousel
                relatedProductsCard={relatedProductsCard}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
DetailPage.defaultProps = {
  // relatedProducts: [
  //   {
  //     id: 1,
  //     type: "beverage",

  //     image_link:
  //       "https://static-01.daraz.com.np/p/4fdcc17b871fc68f89d48946ac224a23.jpg",
  //     categories: "Juice",
  //     name: "Mixed Juice",
  //     currentPrice: "85.00",
  //     previousPrice: "95.00",
  //     modalCartData: {
  //       image_link_list: [
  //         "https://static-01.daraz.com.np/p/4fdcc17b871fc68f89d48946ac224a23.jpg",
  //         "assets/images/details-product/detail_02.jpg",
  //         "assets/images/details-product/detail_03.jpg",
  //         "assets/images/details-product/detail_04.jpg",
  //         "assets/images/details-product/detail_05.jpg",
  //         "assets/images/details-product/detail_06.jpg",
  //         "assets/images/details-product/detail_07.jpg",
  //       ],
  //       introduction:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
  //       categories: "Juice",
  //       tags: "food theme organic food organic theme",
  //       brand: "Real Juice",
  //     },
  //   },
  //   {
  //     id: 2,
  //     type: "beverage",

  //     image_link:
  //       "https://static-01.daraz.com.np/p/a21281f087480bfb69e720b0f850ee62.jpg",
  //     categories: "Juice",
  //     name: "Litchi Juice",
  //     currentPrice: "85.00",
  //     previousPrice: "95.00",
  //     modalCartData: {
  //       image_link_list: [
  //         "https://static-01.daraz.com.np/p/4fdcc17b871fc68f89d48946ac224a23.jpg",
  //         "assets/images/details-product/detail_02.jpg",
  //         "assets/images/details-product/detail_03.jpg",
  //         "assets/images/details-product/detail_04.jpg",
  //         "assets/images/details-product/detail_05.jpg",
  //         "assets/images/details-product/detail_06.jpg",
  //         "assets/images/details-product/detail_07.jpg",
  //       ],
  //       introduction:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
  //       categories: "Juice",
  //       tags: "food theme organic food organic theme",
  //       brand: "Real Juice",
  //     },
  //   },
  //   {
  //     id: 3,
  //     type: "beverage",

  //     image_link: "https://thulo.com/images/detailed/135/MTR-badam_wekc-an.jpg",
  //     categories: "Can Juice",
  //     name: "Badam Juice",
  //     currentPrice: "85.00",
  //     previousPrice: "95.00",
  //     modalCartData: {
  //       image_link_list: [
  //         "https://static-01.daraz.com.np/p/4fdcc17b871fc68f89d48946ac224a23.jpg",
  //         "assets/images/details-product/detail_02.jpg",
  //         "assets/images/details-product/detail_03.jpg",
  //         "assets/images/details-product/detail_04.jpg",
  //         "assets/images/details-product/detail_05.jpg",
  //         "assets/images/details-product/detail_06.jpg",
  //         "assets/images/details-product/detail_07.jpg",
  //       ],
  //       introduction:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
  //       categories: "Juice",
  //       tags: "food theme organic food organic theme",
  //       brand: "Real Juice",
  //     },
  //   },
  //   {
  //     id: 4,
  //     type: "beverage",

  //     image_link:
  //       "https://i0.wp.com/frontdoordelivery.co.uk/wp-content/uploads/2020/05/Red-Bull-24.png?fit=1000%2C1000&ssl=1",
  //     categories: "Can Juice",
  //     name: "Red Bull",
  //     currentPrice: "85.00",
  //     previousPrice: "95.00",
  //     modalCartData: {
  //       image_link_list: [
  //         "https://static-01.daraz.com.np/p/a21281f087480bfb69e720b0f850ee62.jpg",
  //         "assets/images/details-product/detail_02.jpg",
  //         "assets/images/details-product/detail_03.jpg",
  //         "assets/images/details-product/detail_04.jpg",
  //         "assets/images/details-product/detail_05.jpg",
  //         "assets/images/details-product/detail_06.jpg",
  //         "assets/images/details-product/detail_07.jpg",
  //       ],
  //       introduction:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
  //       categories: "Juice",
  //       tags: "food theme organic food organic theme",
  //       brand: "Real Juice",
  //     },
  //   },
  //   {
  //     id: 5,
  //     type: "beverage",

  //     image_link:
  //       "https://nypost.com/wp-content/uploads/sites/2/2023/02/coca-cola.jpg",
  //     categories: "Can Juice",
  //     name: "Coke",
  //     currentPrice: "85.00",
  //     previousPrice: "95.00",
  //     modalCartData: {
  //       image_link_list: [
  //         "https://static-01.daraz.com.np/p/a21281f087480bfb69e720b0f850ee62.jpg",
  //         "assets/images/details-product/detail_02.jpg",
  //         "assets/images/details-product/detail_03.jpg",
  //         "assets/images/details-product/detail_04.jpg",
  //         "assets/images/details-product/detail_05.jpg",
  //         "assets/images/details-product/detail_06.jpg",
  //         "assets/images/details-product/detail_07.jpg",
  //       ],
  //       introduction:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
  //       categories: "Juice",
  //       tags: "food theme organic food organic theme",
  //       brand: "Real Juice",
  //     },
  //   },
  //   {
  //     id: 6,
  //     image_link: "https://m.media-amazon.com/images/I/81C9nWCPXgL.jpg",
  //     categories: "Alcohol",
  //     name: "Jack Daniels",
  //     currentPrice: "85.00",
  //     previousPrice: "95.00",
  //     modalCartData: {
  //       image_link_list: [
  //         "https://static-01.daraz.com.np/p/a21281f087480bfb69e720b0f850ee62.jpg",
  //         "assets/images/details-product/detail_02.jpg",
  //         "assets/images/details-product/detail_03.jpg",
  //         "assets/images/details-product/detail_04.jpg",
  //         "assets/images/details-product/detail_05.jpg",
  //         "assets/images/details-product/detail_06.jpg",
  //         "assets/images/details-product/detail_07.jpg",
  //       ],
  //       introduction:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
  //       categories: "Juice",
  //       tags: "food theme organic food organic theme",
  //       brand: "Real Juice",
  //     },
  //   },
  // ],
  productList: {
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
    ],
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
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://img.freepik.com/free-photo/tomatoes_144627-15413.jpg?w=2000",
            "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/tomatoes.jpg?itok=JhlM9Onh",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
            "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",

            "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
            "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
            "https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132629704379370000",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
            "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
            "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
            "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
            "https://mmmm.com.sg/1126-tm_thickbox_default/carrots-australia-1kg.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
            "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
            "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
            "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://thulo.com/images/detailed/97/IMG_4582.jpg",
            "https://thulo.com/images/detailed/97/IMG_4582.jpg",
            "https://thulo.com/images/detailed/97/IMG_4582.jpg",
            "https://thulo.com/images/detailed/97/IMG_4582.jpg",
            "https://thulo.com/images/detailed/97/IMG_4582.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",

            "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",

            "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",

            "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",

            "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
            "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
            "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
            "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
            "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://www.century-foods.com/wp-content/uploads/2021/02/chicken-masala-2.png",
            "https://www.century-foods.com/wp-content/uploads/2021/02/chicken-masala-2.png",
            "https://www.century-foods.com/wp-content/uploads/2021/02/chicken-masala-2.png",
            "https://www.century-foods.com/wp-content/uploads/2021/02/chicken-masala-2.png",
            "https://www.century-foods.com/wp-content/uploads/2021/02/chicken-masala-2.png",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://static-01.daraz.com.np/p/ce9cb70368e3fcf1aa18f2d813dc5854.jpg",
            "https://static-01.daraz.com.np/p/ce9cb70368e3fcf1aa18f2d813dc5854.jpg",
            "https://static-01.daraz.com.np/p/ce9cb70368e3fcf1aa18f2d813dc5854.jpg",
            "https://static-01.daraz.com.np/p/ce9cb70368e3fcf1aa18f2d813dc5854.jpg",
            "https://static-01.daraz.com.np/p/ce9cb70368e3fcf1aa18f2d813dc5854.jpg",
            "https://static-01.daraz.com.np/p/ce9cb70368e3fcf1aa18f2d813dc5854.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://thulo.com/images/detailed/97/IMG_4582.jpg",
            "https://thulo.com/images/detailed/97/IMG_4582.jpg",
            "https://thulo.com/images/detailed/97/IMG_4582.jpg",
            "https://thulo.com/images/detailed/97/IMG_4582.jpg",

            "https://thulo.com/images/detailed/97/IMG_4582.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",

            "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",

            "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",

            "https://i5.walmartimages.com/asr/ec232c30-1fc6-495e-bf35-96e2246f13a6_1.9fdd89b3523654072ff84274429b1590.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
            "https://khetifood.com/image/cache/catalog/MaasKoDaalForWeb-500x500.jpg",
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
          categories: "Juice",
          tags: "food theme organic food organic theme",
          brand: "Real Juice",
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 11,
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 14,
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 17,
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 20,
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
    ],
    bekeryanddairy: [
      {
        id: 1,
        type: "bekeryanddairy",
        image_link:
          "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
        categories: "Cake",
        name: "Birthday Cake",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 2,
        type: "bekeryanddairy",

        image_link:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F04%2F08%2Fchocolate-chip-muffins-ck-2000.jpg&q=60",
        categories: "Bakery & Bakes",
        name: "Muffins",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 3,
        type: "bekeryanddairy",
        image_link:
          "https://i5.walmartimages.com/asr/b4f8f564-4f10-4a25-b0f9-07c4fd384093.88fc00ecefb31f98440960e546c7d395.jpeg",
        categories: "Milk",
        name: "Almond Milk",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 4,
        type: "bekeryanddairy",
        image_link:
          "https://images-gmi-pmc.edge-generalmills.com/00070470004389_C1C1_s102_b219cb88-538f-470d-af7c-788f5e03491a.jpg",
        categories: "Yogurt",
        name: "Yoplait Plain",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 5,
        type: "bekeryanddairy",
        image_link:
          "https://www.sujaldairy.com.np/assets/upload/images/product/safal-standard-milk.jpg",
        categories: "Milk",
        name: "Milk",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 6,
        type: "bekeryanddairy",
        image_link:
          "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00011161451013/96cd361acc834cd7bac543cf6c0a3641_large.png&width=512&type=webp&quality=90",
        categories: "Ice Cream",
        name: "Country Fresh",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 7,
        type: "bekeryanddairy",
        image_link:
          "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
        categories: "Cake",
        name: "Birthday Cake",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 8,
        type: "bekeryanddairy",
        image_link:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F04%2F08%2Fchocolate-chip-muffins-ck-2000.jpg&q=60",
        categories: "Bakery & Bakes",
        name: "Muffins",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 9,
        type: "bekeryanddairy",
        image_link:
          "https://i5.walmartimages.com/asr/b4f8f564-4f10-4a25-b0f9-07c4fd384093.88fc00ecefb31f98440960e546c7d395.jpeg",
        categories: "Milk",
        name: "Almond Milk",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 10,
        type: "bekeryanddairy",
        image_link:
          "https://images-gmi-pmc.edge-generalmills.com/00070470004389_C1C1_s102_b219cb88-538f-470d-af7c-788f5e03491a.jpg",
        categories: "Yogurt",
        name: "Yoplait Plain",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 11,
        type: "bekeryanddairy",
        image_link:
          "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
        categories: "Cake",
        name: "Birthday Cake",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 12,
        type: "bekeryanddairy",
        image_link:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F04%2F08%2Fchocolate-chip-muffins-ck-2000.jpg&q=60",
        categories: "Bakery & Bakes",
        name: "Muffins",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 13,
        type: "bekeryanddairy",
        image_link:
          "https://i5.walmartimages.com/asr/b4f8f564-4f10-4a25-b0f9-07c4fd384093.88fc00ecefb31f98440960e546c7d395.jpeg",
        categories: "Milk",
        name: "Almond Milk",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 14,
        type: "bekeryanddairy",
        image_link:
          "https://images-gmi-pmc.edge-generalmills.com/00070470004389_C1C1_s102_b219cb88-538f-470d-af7c-788f5e03491a.jpg",
        categories: "Yogurt",
        name: "Yoplait Plain",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 15,
        type: "bekeryanddairy",
        image_link:
          "https://www.sujaldairy.com.np/assets/upload/images/product/safal-standard-milk.jpg",
        categories: "Milk",
        name: "Milk",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
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
      },
      {
        id: 16,
        type: "bekeryanddairy",
        image_link:
          "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00011161451013/96cd361acc834cd7bac543cf6c0a3641_large.png&width=512&type=webp&quality=90",
        categories: "Ice Cream",
        name: "Country Fresh",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 17,
        type: "bekeryanddairy",
        image_link:
          "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
        categories: "Cake",
        name: "Birthday Cake",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 18,
        type: "bekeryanddairy",
        image_link:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F04%2F08%2Fchocolate-chip-muffins-ck-2000.jpg&q=60",
        categories: "Bakery & Bakes",
        name: "Muffins",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 19,
        type: "bekeryanddairy",
        image_link:
          "https://i5.walmartimages.com/asr/b4f8f564-4f10-4a25-b0f9-07c4fd384093.88fc00ecefb31f98440960e546c7d395.jpeg",
        categories: "Milk",
        name: "Almond Milk",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 20,
        type: "bekeryanddairy",
        image_link:
          "https://images-gmi-pmc.edge-generalmills.com/00070470004389_C1C1_s102_b219cb88-538f-470d-af7c-788f5e03491a.jpg",
        categories: "Yogurt",
        name: "Yoplait Plain",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 5,
        type: "eggsandmeat",
        image_link: "https://thulo.com/images/detailed/143/1_zga1-o6.jpg",
        categories: "Susage",
        name: "Buff Susage",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
      {
        id: 15,
        type: "eggsandmeat",

        image_link: "https://thulo.com/images/detailed/143/1_zga1-o6.jpg",
        categories: "Susage",
        name: "Buff Susage",
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
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
          productInformation: [
            {
              id: 0,
              title: "Products Descriptions",
              brief:
                "Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.",
            },
            {
              id: 1,
              title: "Addtional information",
              brief:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
            {
              id: 3,
              title: "Shipping & Delivery",
              brief:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            },
          ],
        },
      },
    ],
  },
};

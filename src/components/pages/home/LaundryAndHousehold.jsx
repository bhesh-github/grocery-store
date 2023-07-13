import React from "react";
import ProductCard from "../../forAll/ProductCard";
const LaundryAndHousehold = ({ laundryAndHousehold }) => {
  const displayProducts =
    laundryAndHousehold &&
    laundryAndHousehold.map((item) => (
      <ProductCard
        item={item}
        showBtn={true}
        showZoomIcon={true}
        key={item.id}
      />
    ));
  return (
    <div className="laundry-and-household-comp">
      <h1 className="heading">Laundry And Household</h1>

      <div className="product-cards-wrapper">
        {displayProducts && displayProducts}
      </div>
    </div>
  );
};

export default LaundryAndHousehold;

LaundryAndHousehold.defaultProps = {
  laundryAndHousehold: [
    {
      id: 1,
      image_link: "https://etimg.etb2bimg.com/photo/84794404.cms",
      categories: "Household",
      name: "Harpic",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 2,
      image_link: "https://assets.unileversolutions.com/v1/1619652.png",
      categories: "Laundry",
      name: "Dove",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 3,
      image_link:
        "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Colin",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 4,
      image_link:
        "https://cheers.com.np/uploads/products/5135942890477126817741676916492407605172389.png",
      categories: "Household",
      name: "Odonil",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 5,
      image_link:
        "https://static-01.daraz.com.np/p/d242e6d490b3129b39034345faf7a5c0.jpg",
      categories: "Household",
      name: "Hit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 6,
      image_link:
        "https://m.media-amazon.com/images/I/71nJxy1bDcL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Aroma",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 7,
      image_link:
        "https://m.media-amazon.com/images/I/81fKza7HLlL._AC_UF1000,1000_QL80_.jpg",
      categories: "Laundry",
      name: "Ariel",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 8,
      image_link:
        "https://ktmgrocery.com/storeadmin/assets/upload/products/final/42247643-dabur-red-toothpaste-175g.jpg",
      categories: "Household",
      name: "Dabur Red",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 9,
      image_link:
        "https://static-01.daraz.com.np/p/6dede3f73efd33eb0b1f1a37594938ca.jpg",
      categories: "Household",
      name: "Dustbin",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 10,
      image_link:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/312033406/QW/WV/ND/90608105/01-3--500x500.jpg",
      categories: "Cleaner",
      name: "Spin Mop",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 11,
      image_link: "https://etimg.etb2bimg.com/photo/84794404.cms",
      categories: "Household",
      name: "Harpic",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 12,
      image_link: "https://assets.unileversolutions.com/v1/1619652.png",
      categories: "Laundry",
      name: "Dove",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 13,
      image_link:
        "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Colin",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 14,
      image_link:
        "https://cheers.com.np/uploads/products/5135942890477126817741676916492407605172389.png",
      categories: "Household",
      name: "Odonil",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 15,
      image_link:
        "https://static-01.daraz.com.np/p/d242e6d490b3129b39034345faf7a5c0.jpg",
      categories: "Household",
      name: "Hit",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 16,
      image_link:
        "https://m.media-amazon.com/images/I/71nJxy1bDcL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Aroma",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 17,
      image_link:
        "https://m.media-amazon.com/images/I/81fKza7HLlL._AC_UF1000,1000_QL80_.jpg",
      categories: "Laundry",
      name: "Ariel",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 18,
      image_link:
        "https://ktmgrocery.com/storeadmin/assets/upload/products/final/42247643-dabur-red-toothpaste-175g.jpg",
      categories: "Household",
      name: "Dabur Red",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 19,
      image_link:
        "https://static-01.daraz.com.np/p/6dede3f73efd33eb0b1f1a37594938ca.jpg",
      categories: "Household",
      name: "Dustbin",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 20,
      image_link:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/312033406/QW/WV/ND/90608105/01-3--500x500.jpg",
      categories: "Cleaner",
      name: "Spin Mop",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
  ],
};

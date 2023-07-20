import MultiCarousel from "../../forAll/MultiCarousel";
import GallerySlider from "../../forAll/GallerySlider";
import FoodsFilter from "./FoodsFilter";
import AddsComp from "./AddsComp";
import LaundryAndHousehold from "./LaundryAndHousehold";
import QuickDetailViewPopup from "../../forAll/QuickDetailViewPopup";
const Home = ({ images }) => {
  const addsImage =
    "https://clickmart.com.np/storage/adse/tIdqGhogTepgfB9sgOTe9Bk9v2ZpraOpfEwHf3ED.png";
  return (
    <>
      <QuickDetailViewPopup />
      <div
        className="index-page"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <GallerySlider images={images} />
        <MultiCarousel />
        <FoodsFilter />
        <AddsComp addsImage={addsImage} />
        <LaundryAndHousehold />
      </div>
      {/* -------------------------------------------------------------------- */}
    </>
  );
};

export default Home;
Home.defaultProps = {
  images: [
    {
      created_at: "2023-06-13T06:41:42.000000Z",
      id: 1,
      image_link:
        "https://www.grocerysumo.com/media/slider/home/lyu4eat9_grocery-oil-banner.jpg",
      package_id: 5,
      updated_at: "2023-06-13T06:41:42.000000Z",
    },
    {
      created_at: "2023-06-13T06:41:42.000000Z",
      id: 2,
      image_link:
        "https://kartshoppers.in/wp-content/uploads/2022/11/grocery-banner.jpg",
      package_id: 5,
      updated_at: "2023-06-13T06:41:42.000000Z",
    },
    {
      created_at: "2023-06-13T06:41:42.000000Z",
      id: 3,
      image_link:
        "https://shop.sarandigital.in/wp-content/uploads/2018/02/Grocery-Banner-New-1200x400.jpg",
      package_id: 5,
      updated_at: "2023-06-13T06:41:42.000000Z",
    },
  ],
};

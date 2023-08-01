import MultiCarousel from "../../forAll/MultiCarousel";
import GallerySlider from "../../forAll/GallerySlider";
import FoodsFilter from "./FoodsFilter";
import AddsComp from "./AddsComp";
import LaundryAndHousehold from "./LaundryAndHousehold";
const Home = ({ galleryImages, galleryMobileImages }) => {
  const addsImage =
    "https://clickmart.com.np/storage/adse/tIdqGhogTepgfB9sgOTe9Bk9v2ZpraOpfEwHf3ED.png";
  return (
    <>
      <div
        className="index-page"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <GallerySlider
          galleryImages={galleryImages}
          galleryMobileImages={galleryMobileImages}
        />
        <div className="multi-carousel">
          <MultiCarousel />
        </div>
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
  galleryImages: [
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
  galleryMobileImages: [
    {
      created_at: "2023-06-13T06:41:42.000000Z",
      id: 1,
      image_link:
        "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2021/01/gettyimages-1224326999_1.jpg",
      package_id: 5,
      updated_at: "2023-06-13T06:41:42.000000Z",
    },
    {
      created_at: "2023-06-13T06:41:42.000000Z",
      id: 2,
      image_link:
        "https://img.freepik.com/premium-photo/paper-bag-with-healthy-food-healthy-food-background-supermarket-food-concept-shopping-supermarket-home-delivery_167368-269.jpg",
      package_id: 5,
      updated_at: "2023-06-13T06:41:42.000000Z",
    },
    {
      created_at: "2023-06-13T06:41:42.000000Z",
      id: 3,
      image_link:
        "https://imageproxy.wolt.com/venue/5f59ddb70910e35e634a94fe/6e8d7b90-279a-11ee-a1a7-16d2c5a1dcbf_82573578_10c3_11ee_bd12_224b0b9ae704_img_2592__1_.jpg",
      package_id: 5,
      updated_at: "2023-06-13T06:41:42.000000Z",
    },
  ],
};

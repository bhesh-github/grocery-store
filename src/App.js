import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const ScrollToTop = lazy(() => import("./components/forAll/ScrollToTop"));
const Header = lazy(() => import("./components/main/header/Header"));
const Footer = lazy(() => import("./components/main/Footer"));
const Home = lazy(() => import("./components/pages/home/Home"));
const Profile = lazy(() => import("./components/pages/profile/Profile"));
const Products = lazy(() => import("./components/pages/products/Products"));
const Checkout = lazy(() => import("./components/pages/checkout/Checkout"));
const Delivery = lazy(() => import("./components/pages/deliveryForm/Delivery"));
const Cart = lazy(() => import("./components/pages/cart/Cart"));
const Register = lazy(() => import("./components/pages/register/Register"));
const DetailPage = lazy(() =>
  import("./components/pages/detailPage/DetailPage")
);

const AboutUs = lazy(() => import("./components/pages/about/AboutUs"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback=<div>Loading</div>>
          <ScrollToTop />
          <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route
                path="/detail-page/:typeSlug/:idSlug"
                element={<DetailPage />}
              />
              <Route path="/delivery-form" element={<Delivery />} />
              <Route path="/products" element={<Products />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFoundPage />}></Route>
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

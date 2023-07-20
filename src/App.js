import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import QuickDetailViewPopup from "./components/forAll/QuickDetailViewPopup";
import Cake from "./components/pages/Cake";
const ScrollToTop = lazy(() => import("./components/forAll/ScrollToTop"));
const Header = lazy(() => import("./components/main/header/Header"));
const Footer = lazy(() => import("./components/main/Footer"));
const Home = lazy(() => import("./components/pages/home/Home"));
const AboutUs = lazy(() => import("./components/pages/about/AboutUs"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage"));

//
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback=<div>Loading</div> />
        <ScrollToTop />
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/cake" element={<Cake />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

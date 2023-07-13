import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const ScrollToTop = lazy(() => import('./components/forAll/ScrollToTop'));
const Header = lazy(() => import('./components/main/Header'));
const Footer = lazy(() => import('./components/main/Footer'));
const Home = lazy(() => import('./components/pages/home/Home'));
const AboutUs = lazy(() => import('./components/pages/about/AboutUs'));
const Contact = lazy(() => import('./components/pages/contact/Contact'));
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
					</Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

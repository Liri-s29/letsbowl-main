// import { lazy } from "react";
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import About from "../pages/About.jsx";
import Bookings from "../pages/Bookings.jsx";
import Category from "../pages/Category.jsx";
import Gallery from "../pages/Gallery.jsx";

/***** Pages ****/

import Home from "../pages/Home.jsx";
import Main from "../pages/Main.jsx";
import NotFound from "../pages/Notfound.jsx";

/*****Routes******/

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}>
					{/* <Route path="/bookings" element={<Bookings />} /> */}
					<Route path="/about" element={<About />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/category/:category" element={<Category />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;

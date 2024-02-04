import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import Category from "../components/Home/Section2/Category";
import Title from "../components/Home/Section2/Title";
import Section1 from "../Sections/Home/Section1";
import Footer from "../components/Footer";
import { getAllCategoriesF } from "../services/firebase.firestore";
import AboutSection from "../Sections/About/AboutSection";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "./Loading";
import Navbar from "../components/Navbar";

const controlsProps = {
	style: {
		left: "50%",
		paddingTop: "10px",
		position: "fixed",
		transform: "translateX(-50%)",
	},
};

const Home = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);
	const [categories, setCategories] = useState([]);
	const [loading1, setLoading1] = useState(true);
	const location = useLocation();
	// const [visibleSlides, setVisibleSlides] = useState(slides);
	useEffect(() => {
		getAssets();
	}, []);
	async function getAssets() {
		const assets = await getAllCategoriesF();
		setCategories(() => {
			const arr = assets.docs.map((doc) => doc.data());
			return arr.sort((a, b) => Number(a.order) - Number(b.order));
		});
		setLoading1(false);
	}

	return (
		<>
			{loading && <Loading loading={loading} />}
			<Navbar />
			{location.pathname == "/" ? (
				<FullPage controlsProps={controlsProps}>
					<Slide>
						<Section1 />
					</Slide>
					<Slide id="Gaming">
						<Title />
					</Slide>
					{loading1 ? (
						<Typography variant="h3">Loading...</Typography>
					) : (
						categories.map((category, index) => {
							const direction = index % 2 === 0 ? "row" : "row-reverse";
							return (
								<Slide key={index}>
									<Category data={category} direction={direction} />
								</Slide>
							);
						})
					)}

					<Slide>
						<AboutSection />
					</Slide>
					<Slide>
						<Footer />
					</Slide>
				</FullPage>
			) : (
				<Outlet />
			)}
		</>
	);
};

export default Home;

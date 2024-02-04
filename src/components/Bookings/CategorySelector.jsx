import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { Box, Stack, Typography, Grid } from "@mui/material";
import _ from "lodash";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { getAllCategoriesF } from "../../services/firebase.firestore";
import { Navigation, Pagination } from "swiper";
import { borderRadius } from "@mui/system";

const CategorySelector = ({ category, setCategory }) => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const [categories, setCategories] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getAssets();
	}, []);

	async function getAssets() {
		const assets = await getAllCategoriesF();
		setCategories(assets.docs.map((doc) => doc.data()));
		setLoading(false);
	}

	return (
		<Stack direction="column" justifyContent="space-evenly" sx={{ position: "relative", height: "40%", width: "100%" }}>
			<Typography variant="h5" fontFamily="Bebas Neue" sx={{ textAlign: "left" }}>
				Select your Category
			</Typography>
			<Box
				component={Swiper}
				slidesPerView={1.5}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
				breakpoints={{
					640: {
						slidesPerView: 2.5,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 3.5,
						spaceBetween: 10,
					},
					1024: {
						slidesPerView: 5.5,
						spaceBetween: 10,
					},
				}}
				sx={{ ...swiperClass, "& .swiper-slide": swiperSlideClass, ...swiperSlideImageClass }}
			>
				{loading ? (
					<Typography variant="h3">Loading</Typography>
				) : (
					categories.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<Box
									component="img"
									src={item.image1}
									sx={{
										border: category === item.category ? "3px solid #000" : "none",
									}}
									onClick={() => setCategory(item.category)}
								/>
							</SwiperSlide>
						);
					})
				)}
			</Box>
		</Stack>
	);
};
const swiperClass = {
	width: "100%",
	background: "#00000080",
	borderRadius: "20px",
	py: "1rem",
};

const swiperSlideClass = {
	textAlign: "center",
	display: "-webkit-box",
	display: "-ms-flexbox",
	display: "-webkit-flex",
	display: "flex",
	webkitBoxPack: " center",
	msFlexPack: "center",
	webkitJustifyContent: "center",
	justifyContent: "center",
	webkitBoxAlign: "center",
	msFlexAlign: "center",
	webkitAlignItems: "center",
	alignItems: "center",
};
const swiperSlideImageClass = {
	"& .swiper-slide img": {
		display: "block",
		width: "200px",
		height: "150px",
		objectFit: "cover",
		cursor: "pointer",
		borderRadius: "20px",
	},
};

export default CategorySelector;

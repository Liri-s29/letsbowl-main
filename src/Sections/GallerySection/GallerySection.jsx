import { Stack, Typography, Tab, Tabs, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { getAllCategoriesF, getAllImageF } from "../../services/firebase.firestore";
import _ from "lodash";

const GallerySection = () => {
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState([]);
	const [value, setValue] = useState("All");
	const [loading, setLoading] = useState(true);
	const [loading1, setLoading1] = useState(true);

	useEffect(() => {
		getAssets();

		handleSet("All");
	}, []);

	async function getAssets() {
		const assets = await getAllCategoriesF();
		setCategories(assets.docs.map((doc) => doc.data()));
		setLoading(false);
	}

	async function handleSet(name) {
		setCategory([]);
		const categoryList = ["Bowling", "Billiards", "Turf", "Machine_cricket", "CafeCurry", "Kids_area"];
		setValue(name);
		if (name === "All") {
			categoryList.forEach(async (item) => {
				const temp1 = await getAllImageF(item);
				const temp2 = temp1.docs.map((doc) => doc.data());
				setCategory((existing) => {
					return [...existing, ...temp2];
				});
			});
		} else {
			const temp1 = await getAllImageF(name);
			const temp2 = temp1.docs.map((doc) => doc.data());
			setCategory(temp2);
		}
		setLoading1(false);
	}

	return (
		<Stack sx={{ height: "100vh" }} direction="column" justifyContent="center"  alignItems="center">
			{loading ? (
				<Typography variant="h3">Loading...</Typography>
			) : (
				<>
					<Typography variant="h2" fontFamily="Bebas Neue">
						Gallery
					</Typography>
					<Stack direction="row" justifyContent="space-evenly" sx={{ width: "100%", flexWrap: "wrap" }}>
						<Box>
							<Button
								onClick={() => handleSet("All")}
								sx={{
									fontFamily: "Bebas Neue",
									color: "#fff",
									fontSize: { xs: "1rem", md: "2rem" },
									background: value === "All" ? "linear-gradient(140deg, #FF2CDF 10%, #4136F1 80%)" : "#151515",
								}}
							>
								All
							</Button>
						</Box>
						{categories.map((item, index) => {
							return (
								<Box key={index}>
									<Button
										onClick={() => handleSet(item.category)}
										sx={{
											fontFamily: "Bebas Neue",
											color: "#fff",
											fontSize: { xs: "1rem", md: "2rem" },
											background:
												value === item.category ? "linear-gradient(140deg, #FF2CDF 10%, #4136F1 80%)" : "#151515",
										}}
									>
										{_.replace(item.category, "_", " ")}
									</Button>
								</Box>
							);
						})}
					</Stack>
					<Box
						component={Swiper}
						slidesPerView={1}
						spaceBetween={30}
						slidesPerGroup={1}
						loop={true}
						loopFillGroupWithBlank={true}
						className="mySwiper"
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 40,
							},
							1024: {
								slidesPerView: 4.5,
								spaceBetween: 50,
							},
						}}
						sx={{ ...swiperClass, "& .swiper-slide": swiperSlideClass, ...swiperSlideImageClass }}
					>
						{loading1 ? (
							<Typography variant="h3">Loading...</Typography>
						) : (
							category.map((item, index) => {
								return (
									<SwiperSlide key={index}>
										<Box
											key={index}
											component="img"
											src={item.url}
											sx={{
												height: "250px",
												width: "250px",
												margin: ".5rem",
												transition: "all 0.3s ease-in-out",
												"&:hover": {
													transform: "scale(1.1)",
												},
											}}
										/>
									</SwiperSlide>
								);
							})
						)}
						{category.length < 5 &&
							placeholderArray.map((item, index) => {
								return (
									<SwiperSlide key={index}>
										<Box component="img" src={item} />
									</SwiperSlide>
								);
							})}
					</Box>
				</>
			)}
		</Stack>
	);
};

const placeholderArray = [
	"https://via.placeholder.com/300",
	"https://via.placeholder.com/300",
	"https://via.placeholder.com/300",
	"https://via.placeholder.com/300",
];

const swiperClass = {
	width: "90%",
	height: "50%",
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
		width: "300px",
		height: "300px",
		objectFit: "cover",
		cursor: "pointer",
		transition: "transform ease-in 250ms",
		zIndex: "0",
		"&:hover": {
			transform: "scale(1.25)",
			zIndex: "2",
		},
	},
};

export default GallerySection;

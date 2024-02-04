import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";
import { getAllImageF } from "../../services/firebase.firestore";
import { Box, Stack, Typography } from "@mui/material";
import _ from "lodash";

const placeholderArray = [
	"https://via.placeholder.com/300",
	"https://via.placeholder.com/300",
	"https://via.placeholder.com/300",
	"https://via.placeholder.com/300",
];

export default function CategoryImage(props) {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cursor, setCursor] = useState(true);

	useEffect(() => {
		getCategoryImages();
	}, []);

	async function getCategoryImages() {
		const path = window.location.pathname;
		const category = path.split("/")[2];
		const imagesSnapshot = await getAllImageF(_.upperFirst(category));
		setImages(imagesSnapshot.docs.map((doc) => doc.data()));
		setLoading(false);
	}

	function handleMouseIn(e) {
		setCursor(false);
		setTimeout(() => {
			setCursor(true);
		}, 3000);
	}

	return (
		<Stack direction="column" justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
			<Typography sx={{ fontSize: "4rem", fontFamily: "Bebas Neue" }}>GALLERY</Typography>
			<Box
				component={Swiper}
				slidesPerView={1}
				spaceBetween={30}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				className="mySwiper"
				modules={[Autoplay]}
				autoplay={{
					delay: cursor ? 1500 : 20000,
					disableOnInteraction: false,
				}}
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
						slidesPerView: 4,
						spaceBetween: 50,
					},
				}}
				sx={{ ...swiperClass, "& .swiper-slide": swiperSlideClass, ...swiperSlideImageClass }}
			>
				{loading ? (
					<Typography variant="h3">Loading</Typography>
				) : (
					images.map((item, index) => {
						return (
							<SwiperSlide key={index} onMouseOver={handleMouseIn}>
								<Box component="img" src={item.url} onMouseOver={handleMouseIn} />
							</SwiperSlide>
						);
					})
				)}
				{images.length < 5 &&
					placeholderArray.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<Box component="img" src={item} />
							</SwiperSlide>
						);
					})}
			</Box>
		</Stack>
	);
}

const swiperClass = {
	width: "100%",
	height: "60%",
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
		"&:hover": {
			transform: "scale(1.25)",
			zIndex: "1",
		},
	},
};

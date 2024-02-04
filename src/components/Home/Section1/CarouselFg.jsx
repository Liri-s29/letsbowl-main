import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";
import { Box, Stack, Typography } from "@mui/material";
import _ from "lodash";
import { getAllImageF } from "../../../services/firebase.firestore";

const placeholderArray = [
	"https://via.placeholder.com/300",
	"https://via.placeholder.com/300",
	"https://via.placeholder.com/300",
	"https://via.placeholder.com/300",
];

export default function CarouselFg(props) {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getCarouselImages();
	}, []);

	async function getCarouselImages() {
		const imagesSnapshot = await getAllImageF("Carousel_Outer");
		setImages(imagesSnapshot.docs.map((doc) => doc.data()));
		setLoading(false);
	}

	return (
		<Stack direction="column" justifyContent="center" alignItems="center" sx={{ height: "90vh" }}>
			<Box
				component={Swiper}
				slidesPerView={1}
				slidesPerGroup={1}
				spaceBetween={30}
				loop={true}
				loopFillGroupWithBlank={true}
				className="mySwiper"
				modules={[Autoplay]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				sx={{ ...swiperClass, "& .swiper-slide": swiperSlideClass, ...swiperSlideImageClass }}
			>
				{loading ? (
					<Typography variant="h3">Loading</Typography>
				) : (
					images.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<SliderItem title={item.title} url={item.url} />
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

const SliderItem = (props) => {
	return (
		<Box style={{ height: "100vh", position: "relative", width: "100vw" }}>
			<Typography
				fontFamily="'Permanent Marker', cursive"
				sx={{
					position: "relative",
					top: "50%",
					transform: "translateY(-50%)",
					fontSize: { xs: "5rem", md: "10rem" },
					zIndex: 0,
					color: "#FFED00",
				}}
			>
				{props.title}
			</Typography>
			<Box
				component="img"
				src={props.url}
				sx={{
					maxHeight: { xs: "40% !important", md: "60% !important" },
					position: "absolute",
					margin: "auto",
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
					zIndex: "1",
				}}
			/>
		</Box>
	);
};

const swiperClass = {
	width: "100%",
	height: "100%",
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
		objectFit: "cover",
	},
};

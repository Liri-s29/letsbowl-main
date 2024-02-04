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

export default function CarouselBg(props) {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getCarouselImages();
	}, []);

	async function getCarouselImages() {
		const imagesSnapshot = await getAllImageF("Carousel_Inner");
		setImages(imagesSnapshot.docs.map((doc) => doc.data()));
		setLoading(false);
	}

	return (
		<Stack direction="column" justifyContent="center" alignItems="center" sx={{ height: "45vh" }}>
			<Box
				component={Swiper}
				slidesPerView={"auto"}
				spaceBetween={30}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				className="mySwiper"
				modules={[Autoplay]}
				autoplay={{
					delay: 1500,
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
						slidesPerView: 5,
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
							<SwiperSlide key={index}>
								<Box
									component="img"
									src={item.url}
									sx={{ height: { xs: "300px", md: "250px" }, width: { xs: "300px", md: "250px" } }}
								/>
							</SwiperSlide>
						);
					})
				)}

				{images.length < 5 &&
					placeholderArray.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<Box
									component="img"
									src={item}
									sx={{ height: { xs: "300px", md: "250px" }, width: { xs: "300px", md: "250px" } }}
								/>
							</SwiperSlide>
						);
					})}
			</Box>
		</Stack>
	);
}

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

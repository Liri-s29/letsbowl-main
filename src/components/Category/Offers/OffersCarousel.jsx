import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";
import { getAllImageF } from "../../../services/firebase.firestore";
import { Box, Typography } from "@mui/material";

export default function OffersCarousel() {
	const [offers, setOffers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cursor, setCursor] = useState(true);

	useEffect(() => {
		getOffers();
	}, []);

	async function getOffers() {
		const offersSnapshot = await getAllImageF("Offers");
		console.log(offersSnapshot.docs.map((doc) => doc.data()));
		setOffers(offersSnapshot.docs.map((doc) => doc.data()));
		setLoading(false);
	}

	function handleMouseIn(e) {
		setCursor(false);
		setTimeout(() => {
			setCursor(true);
		}, 3000);
	}

	return (
		<>
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
					offers.map((item, index) => {
						return (
							<SwiperSlide key={index} onMouseOver={handleMouseIn}>
								<Box component="img" src={item.url} onMouseOver={handleMouseIn} />
							</SwiperSlide>
						);
					})
				)}
			</Box>
		</>
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

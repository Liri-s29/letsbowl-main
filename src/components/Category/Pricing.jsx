import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, Stack, Typography, Grid, Paper } from "@mui/material";
import { getPricing } from "../../services/firebase.firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import _ from "lodash";

const Pricing = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const [pricing, setPricing] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cursor, setCursor] = useState(true);

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
		getAssets();
	}, [control, inView]);

	const getAssets = async () => {
		const snapshot = await getPricing();
		setPricing(snapshot.docs.map((doc) => doc.data()));
		setLoading(false);
	};

	const boxVariant = {
		visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
		hidden: { opacity: 0, scale: 0 },
	};

	function handleMouseIn(e) {
		setCursor(false);
		setTimeout(() => {
			setCursor(true);
		}, 3000);
	}

	return (
		<Box
			component={motion.div}
			ref={ref}
			variants={boxVariant}
			initial="hidden"
			animate={control}
			sx={{ height: "100vh" }}
		>
			<Stack direction="column" justifyContent="center" alignItems="center" spacing={1} sx={{ height: "100%" }}>
				<Typography sx={{ fontSize: "4rem", fontFamily: "Bebas Neue" }}>PRICING</Typography>
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
						delay: cursor ? 1500 : 4500,
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
						pricing.map((data, index) => {
							return (
								<SwiperSlide key={index} onMouseOver={handleMouseIn}>
									<PriceCard key={index} data={data} />
								</SwiperSlide>
							);
						})
					)}
				</Box>
			</Stack>
		</Box>
	);
};

function PriceCard(props) {
	return (
		<div>
			<Paper
				sx={{
					width: "300px",
					my: "1rem",
					position: "relative",
					background: "#151515",
					borderRadius: "50px",
					padding: "10px",
					transition: "background .2s ease-in-out",
					opacity: "1",
					"&:hover": { background: "#F8F2F8", cursor: "pointer" },
				}}
			>
				<Bg1 />
				<Bg2 />
				<Stack
					direction="column"
					justifyContent="space-evenly"
					alignItems="center"
					spacing={1}
					sx={{ height: "100%", color: "#ffffff" }}
				>
					<Typography variant="h3" sx={{ fontFamily: "Anton", color: props.data.id % 2 == 0 ? "#FF42D3" : "#00DCFF" }}>
						{props.data.name}
					</Typography>
					{props.data.data.map((category, index) => (
						<Stack key={index} direction="column" justifyContent="center" alignItems="center">
							<Typography variant="h5" sx={{ fontWeight: "600", color: "#7B7B7B" }}>
								{_.replace(category.name, "_", " ")}
							</Typography>
							<Typography variant="h5" sx={{ color: "#D4D4D4", textAlign: "center" }}>
								{category.name == "Bowling" ? `${category.price} / person / game.` : ""}
								{category.name == "Billiards"
									? `Small table ${category.price[0]} & Medium table ${category.price[1]} / hour.`
									: ""}
								{category.name == "Turf" ? `${category.price} / hour.` : ""}
								{category.name == "Machine Cricket" ? `${category.price} / person.` : ""}
								{category.name == "Basketball" ? `${category.price}` : ""}
							</Typography>
						</Stack>
					))}
				</Stack>
			</Paper>
		</div>
	);
}

const Bg1 = () => {
	return (
		<Paper
			sx={{
				height: "100%",
				width: "100%",
				position: "absolute",
				top: "0",
				left: "0",
				background: "#FFE6FB",
				borderRadius: "50px",
				innerShadow: "10px 13px 45px #F3E8F3",
				boxShadow: "8px 8px 50px #FFFFFF",
				opacity: ".1",
				filter: "blur(.5px)",
			}}
		/>
	);
};

const Bg2 = () => {
	return (
		<Paper
			sx={{
				height: "100%",
				width: "100%",
				position: "absolute",
				top: "0",
				left: "0",
				borderRadius: "50px",
				background: "transparent",
				border: "1px solid #F8F2F8",
			}}
		/>
	);
};

const swiperClass = {
	width: "100%",
	height: "70%",
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

export default Pricing;

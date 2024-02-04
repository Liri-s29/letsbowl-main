import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Ball from "../assets/images/Loading/ball.png";
import Pin from "../assets/images/Loading/pin.png";
import Logo from "../assets/images/Logo/logo.jpeg";

const Loading = (props) => {
	const [disappear, setDisappear] = useState(false);
	const [bowling, setBowling] = useState(true);
	const [pin, setPin] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setPin(true);
		}, 700);
		setTimeout(() => {
			setDisappear(true);
		}, 1500);
		setTimeout(() => {
			setBowling(false);
		}, 2000);
		setTimeout(() => {
			setBowling(false);
		}, 3000);
	}, []);

	return (
		<Box
			sx={{
				position: "absolute",
				height: "100vh",
				width: "100vw",
				zIndex: 10000000,
				backgroundColor: "#000000",
			}}
		>
			{bowling ? (
				<Box component={motion.div} animate={disappear && { opacity: 0 }} transition={{ duration: 0.5 }}>
					<Stack
						sx={{ height: "100vh", width: "100vw", position: "relative" }}
						direction="row"
						justifyContent="center"
						alignItems="center"
					>
						<Box
							component={motion.img}
							src={Pin}
							sx={{
								height: "150px",
								position: "absolute",
								zIndex: 1,
								mb: "75px",
							}}
							animate={pin && { x: 100, y: -50, rotate: 65 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						/>
						<Box
							component={motion.img}
							src={Pin}
							sx={{
								height: "150px",
								position: "absolute",
								zIndex: 1,
								mb: "75px",
							}}
							animate={pin && { x: 20, y: -100, rotate: 15 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						/>
						<Box
							component={motion.img}
							src={Pin}
							sx={{
								height: "150px",
								position: "absolute",
								zIndex: 1,
								mb: "75px",
							}}
							animate={pin && { x: -80, y: -70, rotate: -35 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						/>
						<Box
							component={motion.img}
							src={Ball}
							sx={{
								height: "100px",
								position: "absolute",
							}}
							animate={{ rotate: 360, y: [500, 0], height: [500, 100] }}
							transition={{ duration: 1, ease: "easeOut" }}
						/>
					</Stack>
				</Box>
			) : (
				<Stack
					justifyContent="center"
					alignItems="center"
					sx={{ height: "100vh", width: "100vw", position: "relative" }}
				>
					<Typography
						component={motion.h1}
						fontFamily="Bebas Neue"
						textAlign="center"
						animate={{ fontSize: ["4rem", "10rem"] }}
						transition={{ duration: 1 }}
					>
						LETS BOWL
					</Typography>
				</Stack>
			)}
		</Box>
	);
};

export default Loading;

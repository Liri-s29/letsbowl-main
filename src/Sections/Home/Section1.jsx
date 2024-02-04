import { Box, Stack } from "@mui/material";
import React from "react";
import CarouselBg from "../../components/Home/Section1/CarouselBg";
import CarouselFg from "../../components/Home/Section1/CarouselFg";

const Section1 = () => {
	return (
		<div>
			<Box sx={{ position: "relative", height: "100vh" }}>
				<Box
					sx={{
						height: "100%",
						width: "100%",
						position: "absolute",
						opacity: 0.5,
						backgroundColor: "#1A1919",
						zIndex: 0,
						filter: "blur(5px)",
					}}
				/>
				<Stack
					direction="column"
					justifyContent="center"
					sx={{
						height: "100%",
						width: "100%",
						position: "absolute",
						zIndex: -1,
					}}
				>
					<Box sx={{ height: "40%" }}>
						<CarouselBg />
					</Box>
					<Box sx={{ transform: "scaleX(-1)", height: "40%" }}>
						<CarouselBg />
					</Box>
				</Stack>

				<CarouselFg />
			</Box>
		</div>
	);
};
export default Section1;

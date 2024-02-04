import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import randomColor from "randomcolor";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const Category = ({ data, direction }) => {
	const navigate = useNavigate();
	const control = useAnimation();
	const [ref, inView] = useInView();
	const color = randomColor();
	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	const boxVariant = {
		visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
		hidden: { opacity: 0, scale: 0 },
	};
	return (
		<Box sx={{ height: "100vh", position: "relative" }}>
			<Box
				component={motion.div}
				ref={ref}
				variants={boxVariant}
				initial="hidden"
				animate={control}
				sx={{ height: "100%" }}
			>
				<Stack sx={{ height: "100%" }} direction="column" justifyContent="center">
					<Grid container direction={direction} justifyContent="center" alignItems="center" sx={{ height: "80%" }}>
						<Grid item xs={1} md={1} sx={{ height: { xs: "40%", md: "auto" } }} />
						<Grid item xs={10} md={5} sx={{ height: { xs: "40%", md: "auto" } }}>
							<Stack justifyContent="center" alignItems="center" sx={{ height: "100%", textAlign: "center" }}>
								<Typography
									sx={{
										fontSize: "5rem",
										fontWeight: "bold",
										fontFamily: "Bebas Neue, cursive",
										color: color,
										lineHeight: { xs: "5rem", md: "6rem" },
									}}
								>
									{_.toUpper(_.replace(data.category, "_", " "))}
								</Typography>
								<Typography sx={{ fontSize: "1.5rem", fontFamily: "Arial, sans-serif" }}>{data.description}</Typography>
								<Button
									sx={{
										my: { xs: "1rem", md: "2rem" },
										color: "white",
										width: { xs: "50%", md: "30%" },
										background: "linear-gradient(140deg, #FF2CDF 10%, #4136F1 80%)",
									}}
									onClick={() => navigate(`/category/${_.toLower(data.category)}`)}
								>
									Know More
								</Button>
							</Stack>
						</Grid>
						<Grid item xs={1} sx={{ display: { xs: "block", md: "none" }, height: { xs: "40%", md: "auto" } }} />
						<Grid item xs={1} sx={{ display: { xs: "block", md: "none" }, height: { xs: "40%", md: "auto" } }} />

						<Grid item xs={10} md={5} sx={{ height: { xs: "40%", md: "auto" } }}>
							<Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
								<Box
									component="img"
									src={data.image1}
									sx={{
										height: { xs: "300px", md: "400px" },
										width: { xs: "300px", md: "400px" },
										borderRadius: "10px",
										objectFit: "cover",
									}}
								/>
							</Stack>
						</Grid>

						<Grid item xs={1} md={1} sx={{ height: { xs: "40%", md: "auto" } }} />
					</Grid>
				</Stack>
			</Box>
		</Box>
	);
};
export default Category;

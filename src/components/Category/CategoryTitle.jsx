import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { Box, Stack, Typography, Grid } from "@mui/material";
import _ from "lodash";
import { getCategory } from "../../services/firebase.firestore";

const CategoryTitle = (props) => {
	const [category, setCategory] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getAssets();
	}, []);

	async function getAssets() {
		const asset = await getCategory(_.upperFirst(props.title));
		setCategory(asset);
		setLoading(false);
	}

	return (
		<Grid container sx={{ height: "100%" }}>
			<Grid item xs={1} md={2} />
			<Grid item xs={10} md={8}>
				{loading ? (
					<Typography variant="h3">Loading</Typography>
				) : (
					<Stack direction="column" spacing={2} justifyContent="center" sx={{ height: "100%", textAlign: "center" }}>
						<Typography sx={{ fontSize: "4rem", fontFamily: "anton" }}>
							{_.toUpper(_.replace(category.category, "_", " "))}
						</Typography>
						<Box sx={{ width: "100%", height: "60% !important", position: "relative" }}>
							<Box
								component="img"
								src={category.image2}
								sx={{
									height: "450px",
									width: "100%",
									objectFit: "cover",
									borderRadius: "20px",
									filter: "blur(4px)",
								}}
							/>
							<Box
								sx={{
									position: "absolute",
									top: "0",
									left: "0",
									width: "100%",
									height: "450px",
									background: "linear-gradient(270deg, #E20069 10%, #2A00FF 80%)",
									opacity: "0.5",
									borderRadius: "20px",
									filter: "blur(4px)",
									boxShadow:
										"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
								}}
							/>

							<Typography
								sx={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
								}}
							>
								{category.description}
							</Typography>
						</Box>
					</Stack>
				)}
			</Grid>
			<Grid item xs={1} md={2} />
		</Grid>
	);
};

export default CategoryTitle;

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import OffersCarousel from "./OffersCarousel";
import { useInView } from "react-intersection-observer";
import { Box, Stack, Typography, Grid } from "@mui/material";
import { getAllImageF } from "../../../services/firebase.firestore";

const Offers = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const [offers, setOffers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
		getAssets();
	}, [control, inView]);

	const getAssets = async () => {
		const snapshot = await getAllImageF("Offers");
		setOffers(snapshot.docs.map((doc) => doc.data()));
		setLoading(false);
	};

	const boxVariant = {
		visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
		hidden: { opacity: 0, scale: 0 },
	};

	return (
		<Box
			component={motion.div}
			ref={ref}
			variants={boxVariant}
			initial="hidden"
			animate={control}
			sx={{ height: "100vh" }}
		>
			<Grid container sx={{ height: "100%" }}>
				<Grid item xs={1} md={1} />
				<Grid item xs={10} md={10}>
					<Stack direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{ height: "100%" }}>
						<Typography sx={{ fontSize: "4rem", fontFamily: "Bebas Neue" }}>OFFERS</Typography>
						{loading ? <Typography variant="h3">Loading</Typography> : <OffersCarousel offers={offers} />}
					</Stack>
				</Grid>

				<Grid item xs={1} md={1} />
			</Grid>
		</Box>
	);
};

export default Offers;

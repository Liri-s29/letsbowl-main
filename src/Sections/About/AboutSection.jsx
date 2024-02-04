import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { Box, Stack, Typography, Grid } from "@mui/material";
import Logo from "../../assets/images/Logo/logo.jpeg";

const AboutSection = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();

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

	const Text = ({ text }) => {
		return <Typography sx={{ fontSize: { xs: ".75rem", md: "1.5rem" } }}>{text}</Typography>;
	};

	const TextDark = ({ text }) => {
		return <Typography sx={{ fontSize: { xs: ".75rem", md: "1.5rem" }, opacity: 0.4 }}>{text}</Typography>;
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
					<Stack direction="column" alignItems="center" sx={{ height: "100%", justifyContent: "center" }} spacing={1}>
						<Typography sx={{ fontSize: "3rem", fontFamily: "anton" }}>ABOUT</Typography>
						<Grid container spacing={2}>
							<Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
								<Box component="img" src={Logo} sx={{ height: "300px", borderRadius: "10px" }} />
							</Grid>
							<Grid item xs={12} md={2} />
							<Grid item xs={12} md={7}>
								<Stack direction="column" justifyContent="space-between" sx={{ height: "100%" }}>
									<TextDark text="Lets bowl has these five unique games and restaurants all in one place" />
									<Stack direction="column" justifyContent="space-evenly" sx={{ height: "80%" }}>
										<Text text="- Biggest bowling alley in chennai with six tracks. " />
										<Text text="- Three Billards table. " />
										<Text text="- Roof top football turf for the ultimate experience. " />
										<Text text="- Cafecurry, a multi cusine game themed cafe. " />
										<Text text="- Simulation cricket to train yourself." />
										<Text text="- Kidszone, the best place to spend time with you kids." />
									</Stack>
								</Stack>
							</Grid>
						</Grid>
						<TextDark
							text="Lets bowl is a game center which not only has the game arenas also different restaurants all in the same
							place, we have a multicuisine restaurant ( veg and non veg ) - Cafe Curry, pure veg restaurant - Lets Dine, Juice
							shop hangout, Sweets and Chats ajnabee."
						/>
					</Stack>
				</Grid>
				<Grid item xs={1} md={1} />
			</Grid>
		</Box>
	);
};

export default AboutSection;

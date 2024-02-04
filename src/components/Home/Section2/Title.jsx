import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { Box, Stack, Typography } from "@mui/material";

const Title = () => {
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
	return (
		<Box
			component={motion.div}
			ref={ref}
			variants={boxVariant}
			initial="hidden"
			animate={control}
			sx={{ height: "100vh" }}
		>
			<Stack direction="column" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
				<Typography fontFamily="Anton, sans-serif" sx={{ fontSize: { xs: "4rem", md: "8rem" }, textAlign: "center" }}>
					SELECT YOUR ARENA
				</Typography>
			</Stack>
		</Box>
	);
};

export default Title;

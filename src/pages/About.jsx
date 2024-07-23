import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import AboutSection from "../Sections/About/AboutSection";
import BookingSection from "../Sections/Bookings/BookingSection";

const controlsProps = {
	style: {
		left: "50%",
		paddingTop: "10px",
		position: "fixed",
		transform: "translateX(-50%)",
	},
};

const About = () => {
	return (
		<>
			<Helmet>
				<title>Lets Bowl | About</title>
				<meta
					name="description"
					content="Lets bowl is a game center which not only has the game arenas also different restaurants all in the same place, we have a multicuisine restaurant ( veg and non veg ) - By the alley the Bowling Cafe, pure veg restaurant - Lets Dine, Juice shop hangout, Sweets and Chats ajnabee"
				/>
				<meta name="keywords" content="Bowling, Lets Bowl, about" />
			</Helmet>

			<FullPage controlsProps={controlsProps}>
				<Slide>
					<AboutSection />
				</Slide>
				<Slide>
					<Footer />
				</Slide>
			</FullPage>
		</>
	);
};

export default About;

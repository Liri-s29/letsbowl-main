import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import BookingSection from "../Sections/Bookings/BookingSection";

const controlsProps = {
	style: {
		left: "50%",
		paddingTop: "10px",
		position: "fixed",
		transform: "translateX(-50%)",
	},
};

const Bookings = () => {
	return (
		<>
			<Helmet>
				<title>Lets Bowl | Bookings</title>
				<meta name="description" content="Reserve your seats at Lets Bowl, the best game center in the city" />
				<meta name="keywords" content="Bowling, Lets Bowl, Bookings, Booking" />
			</Helmet>
			<FullPage controlsProps={controlsProps}>
				<Slide>
					<BookingSection />
				</Slide>
				<Slide>
					<Footer />
				</Slide>
			</FullPage>
		</>
	);
};

export default Bookings;

import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategorySelector from "../../components/Bookings/CategorySelector";
import BookingDetails from "../../components/Bookings/BookingDetails";

const BookingSection = () => {
	const [category, setCategory] = useState("");
	const navigate = useNavigate();
	useEffect(() => {}, []);

	return (
		<Stack sx={{ height: "100vh" }} justifyContent="center" spacing={1} alignItems="center">
			<Typography variant="h2" fontFamily="Bebas Neue">
				Bookings
			</Typography>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={4}
				sx={{
					height: { xs: "75%", md: "70%" },
					width: { xs: "90%", md: "80%" },
					background: "linear-gradient(140deg, #4136F1C4 10%, #FF2CDFC4 80%)",
					borderRadius: "20px",
					boxShadow:
						"rgba(238, 238, 229, 0.1) 0px 1px 0px, rgba(238, 238, 229, 0.1) 0px 8px 24px, rgba(238, 238, 229, 0.1) 0px 16px 48px",
					px: "1rem",
				}}
			>
				<CategorySelector category={category} setCategory={setCategory} />
				<BookingDetails category={category} />
			</Stack>
		</Stack>
	);
};

export default BookingSection;

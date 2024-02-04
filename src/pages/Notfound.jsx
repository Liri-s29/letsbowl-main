import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();
	useEffect(() => {
		toHome();
	}, []);

	function toHome() {
		setTimeout(() => {
			navigate("/");
		}, 1000);
	}
	return (
		<Stack sx={{ height: "100vh" }} justifyContent="center" alignItems="center">
			<Typography variant="h1" fontFamily="Bebas Neue">
				404
			</Typography>
			<Typography variant="h2" fontFamily="Anton">
				Page not found
			</Typography>
		</Stack>
	);
};

export default NotFound;

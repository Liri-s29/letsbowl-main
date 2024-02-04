import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "./Loading";

const Main = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<Box>
			{loading && <Loading loading={loading} />}
			<Navbar />
			<Outlet />
		</Box>
	);
};

export default Main;

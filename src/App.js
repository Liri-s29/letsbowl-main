import React from "react";
import { useRoutes } from "react-router-dom";
import Router from "./routes/Router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
	position: positions.BOTTOM_RIGHT,
	timeout: 5000,
	offset: "30px",
	transition: transitions.SCALE,
};

const theme = createTheme({
	status: {
		danger: "#e53e3e",
	},
	palette: {
		primary: {
			main: "#1A1919",
			darker: "#053e85",
		},
		secondary: {
			main: "#ffffff",
			darker: "#f5f5f5",
		},
	},
});

const App = () => {
	return (
		<AlertProvider template={AlertTemplate} {...options}>
			<ThemeProvider theme={theme}>
				<Router />
			</ThemeProvider>
		</AlertProvider>
	);
};

export default App;

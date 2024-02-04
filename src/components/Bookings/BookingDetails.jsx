import { Alert, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useAlert } from "react-alert";
import { addBooking } from "../../services/firebase.firestore";
import _ from "lodash";

const BookingDetails = (props) => {
	const alert = useAlert();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [count, setCount] = useState(0);

	async function handleSubmit(e) {
		e.preventDefault();
		const validation = await validateFields();
		if (validation) {
			const data = await makeJson();
			await addBooking(data);
			alert.success("Booking added successfully");
			navigate("/");
		}
	}

	return (
		<Stack justifyContent="space-evenly" spacing={1} sx={{ position: "relative", height: "40%", width: "100%" }}>
			<Typography variant="h5" fontFamily="Bebas Neue" sx={{ textAlign: "left" }}>
				Booking Details
			</Typography>
			<Stack
				direction="row"
				justifyContent="space-evenly"
				sx={{ width: "100%", background: "#00000080", borderRadius: "20px", py: "1rem", flexWrap: "wrap" }}
			>
				<Stack
					direction="column"
					justifyContent="space-evenly"
					alignItems="center"
					spacing={1}
					sx={{ width: "50%", flexWrap: "wrap" }}
				>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						sx={{ width: "70%", flexWrap: "wrap" }}
					>
						<Typography variant="h6" fontFamily="Bebas Neue">
							Name
						</Typography>
						<TextField
							variant="standard"
							color="secondary"
							type="text"
							focused
							value={name}
							onChange={(e) => setName(e.target.value)}
							sx={{ "& .MuiInputBase-input": { color: "#fff" } }}
						/>
					</Stack>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						sx={{ width: "70%", flexWrap: "wrap" }}
					>
						<Typography variant="h6" fontFamily="Bebas Neue">
							Booking Date
						</Typography>
						<TextField
							variant="standard"
							color="secondary"
							type="date"
							focused
							value={date}
							onChange={(e) => setDate(e.target.value)}
							sx={{ "& .MuiInputBase-input": { color: "#fff" } }}
						/>
					</Stack>

					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						sx={{ width: "70%", flexWrap: "wrap" }}
					>
						<Typography variant="h6" fontFamily="Bebas Neue">
							Phone
						</Typography>
						<TextField
							variant="standard"
							color="secondary"
							type="text"
							focused
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							sx={{
								"& .MuiInputBase-input": { color: "#fff" },
							}}
						/>
					</Stack>
				</Stack>
				<Stack
					direction="column"
					justifyContent="space-evenly"
					alignItems="center"
					spacing={1}
					sx={{ width: "50%", flexWrap: "wrap" }}
				>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						sx={{ width: "70%", flexWrap: "wrap" }}
					>
						<Typography variant="h6" fontFamily="Bebas Neue">
							Email
						</Typography>
						<TextField
							variant="standard"
							color="secondary"
							type="email"
							focused
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							sx={{
								"& .MuiInputBase-input": { color: "#fff" },
							}}
						/>
					</Stack>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						sx={{ width: "70%", flexWrap: "wrap" }}
					>
						<Typography variant="h6" fontFamily="Bebas Neue">
							Entry Time
						</Typography>
						<TextField
							variant="standard"
							color="secondary"
							type="time"
							focused
							value={time}
							onChange={(e) => setTime(e.target.value)}
							sx={{
								"& .MuiInputBase-input": { color: "#fff" },
							}}
						/>
					</Stack>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						sx={{ width: "70%", flexWrap: "wrap" }}
					>
						<Typography variant="h6" fontFamily="Bebas Neue">
							People Count
						</Typography>
						<TextField
							variant="standard"
							color="secondary"
							type="number"
							focused
							value={count}
							onChange={(e) => setCount(e.target.value)}
							sx={{ "& .MuiInputBase-input": { color: "#fff" } }}
						/>
					</Stack>
				</Stack>
			</Stack>
			<Button
				variant="contained"
				sx={{
					background: "linear-gradient(140deg, #00E1FD 10%, #FC007A 80%)",
					width: { xs: "100%", md: "20%" },
					alignSelf: "center",
					borderRadius: "20px",
				}}
				onClick={handleSubmit}
			>
				Book Now
			</Button>
		</Stack>
	);

	async function validateFields() {
		if (name.length === 0) {
			alert.error("Please enter your name");
			return;
		}
		if (email.length === 0) {
			alert.error("Please enter your email");
			return;
		}
		if (phone.length === 0) {
			alert.error("Please enter your phone number");
			return;
		}
		if (date.length === 0) {
			alert.error("Please enter a date");
			return;
		}
		if (time.length === 0) {
			alert.error("Please enter a time");
			return;
		}
		if (count === 0) {
			alert.error("Please enter a number of people");
			return;
		}
		if (props.category.length === 0) {
			alert.error("Please select a category");
			return;
		}
		return true;
	}

	async function makeJson() {
		const data = {
			name: name,
			email: email,
			phone: phone,
			date: date,
			time: time,
			count: count,
			category: _.toUpper(_.replace(props.category, "_", " ")),
			bookingTime: Date.now(),
		};
		return data;
	}
};

export default BookingDetails;

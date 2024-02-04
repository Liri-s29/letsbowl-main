import React, { useEffect } from "react";
import { Box, Button, Grid, IconButton, Link, Stack, TextField, Typography } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import SwiggyIcon from "../assets/images/Icons/swiggy.svg";
import ZomatoIcon from "../assets/images/Icons/zomato.svg";
import LogoIcon from "../assets/images/Logo/logo.jpeg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	return (
		<Stack direction="column" justifyContent="end" sx={{ height: "100%" }} id="Contact">
			<Box sx={{ height: "10%", background: "linear-gradient(90deg, #E20069 10%, #2A00FF  80%)" }}>
				<Box component="marquee" direction="right" sx={{ fontSize: "3rem", color: "#E6E6E6" }}>
					LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL
					LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL
					LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL
					LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL LETS BOWL
				</Box>
			</Box>
			<Box sx={{ height: "75%" }}>
				<Stack direction="column" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
					<Grid container sx={{ height: "100%" }}>
						<Grid item xs={12} md={6}>
							<FooterLeft />
						</Grid>
						<Grid item xs={12} md={6}>
							<FooterRight />
						</Grid>
					</Grid>
				</Stack>
			</Box>
		</Stack>
	);
};

const FooterRight = () => {
	return (
		<Grid container sx={{ height: "100%" }}>
			<Grid item xs={0} md={1} />
			<Grid item xs={12} md={10}>
				<Stack
					direction="column"
					alignItems="stretch"
					sx={{ height: "100%", justifyContent: { xs: "center", md: "space-evenly" } }}
				>
					<FindUsAt />
					<ContactUs />
				</Stack>
			</Grid>
			<Grid item xs={0} md={1} />
		</Grid>
	);

	function FindUsAt() {
		return (
			<Box>
				<Typography sx={{ fontSize: "1.5rem", fontWeight: "600", mb: "1rem" }}>FIND US AT</Typography>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62204.41406520458!2d80.17848375618917!3d12.986181756570744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d34512d2559%3A0x791e4b9593ccf37!2sLets%20Bowl!5e0!3m2!1sen!2sin!4v1656287481428!5m2!1sen!2sin"
					width="100%"
					style={{ border: 0 }}
					loading="lazy"
				></iframe>
			</Box>
		);
	}

	function ContactUs() {
		return (
			<div id="contact">
				<Typography sx={{ fontSize: "1.5rem", fontWeight: "600", mb: "1rem" }}>CONTACT US</Typography>
				<Grid container sx={{ mb: "1rem" }}>
					<Grid item xs={6} md={6}>
						<Typography sx={{ fontSize: "1rem", fontWeight: "600", mb: ".5rem" }}> PHONE </Typography>
						<Stack direction="column">
							<Typography sx={{ fontSize: "1rem" }}> +91 8508700000 </Typography>
							<Typography sx={{ fontSize: "1rem" }}> +91 9040145678 </Typography>
							<Typography sx={{ fontSize: "1rem" }}> 044 - 24560000 </Typography>
						</Stack>
					</Grid>
					<Grid item xs={6} md={6}>
						<Typography sx={{ fontSize: "1rem", fontWeight: "600", mb: ".5rem" }}> EMAIL</Typography>
						<Typography sx={{ fontSize: "1rem" }}> letsbowl97@gmail.com </Typography>
					</Grid>
				</Grid>
				{/* <IconButton
					href="https://dashboard.letsbowlchennai.in"
					target="_blank"
					sx={{ display: { xs: "inline-block", md: "none" } }}
				>
					<Box component="img" sx={{ height: "30px", width: "30px" }} src={LogoIcon} />
				</IconButton> */}
			</div>
		);
	}
};

const FooterLeft = () => {
	return (
		<Grid container sx={{ height: "100%" }}>
			<Grid item xs={0} md={1} />
			<Grid item xs={12} md={10}>
				<Stack
					direction="column"
					alignItems="stretch"
					sx={{ height: "100%", justifyContent: { xs: "center", md: "space-evenly" } }}
				>
					<UsefulLinks />
					<FollowUs />
					<Subscribe />
				</Stack>
			</Grid>
			<Grid item xs={0} md={1} />
		</Grid>
	);

	function UsefulLinks() {
		const navigate = useNavigate();
		return (
			<Box>
				<Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>USEFULL LINKS</Typography>
				<Stack direction="row" justifyContent="start" spacing={2}>
					<Button sx={{ color: "#ffffff" }} onClick={() => navigate("/")}>
						HOME
					</Button>
					<Button sx={{ color: "#ffffff" }} onClick={() => navigate("/about")}>
						ABOUT
					</Button>
					<Button sx={{ color: "#ffffff" }} onClick={() => navigate("/gallery")}>
						GALLERY
					</Button>
					<Button sx={{ color: "#ffffff" }} onClick={() => navigate("/bookings")}>
						BOOK NOW
					</Button>
				</Stack>
			</Box>
		);
	}

	function FollowUs() {
		return (
			<Box>
				<Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>FOLLOW </Typography>
				<Stack direction="row" justifyContent="start" spacing={2}>
					<IconButton
						href="https://www.facebook.com/letsbowl_chennai-100600541792451/"
						target="_blank"
						sx={{ color: "#ffffff" }}
					>
						<Facebook />
					</IconButton>
					<IconButton href="https://www.instagram.com/letsbowl_chennai/" target="_blank" sx={{ color: "#ffffff" }}>
						<Instagram />
					</IconButton>
					<IconButton
						href="https://www.swiggy.com/restaurants/cafe-curry-omr-perungudi-chennai-411671?sld=false"
						target="_blank"
					>
						<Box component="img" sx={{ height: "20px", width: "20px" }} src={SwiggyIcon} />
					</IconButton>
					<IconButton href="https://www.zomato.com/chennai/cafe-curry-thuraipakkam" target="_blank">
						<Box component="img" sx={{ height: "30px", width: "30px" }} src={ZomatoIcon} />
					</IconButton>
				</Stack>
			</Box>
		);
	}

	function Subscribe() {
		return (
			<Box>
				<Typography sx={{ fontSize: "1rem", mb: "1rem" }}>Send us your mail-id for contacting you</Typography>
				<Stack direction="row">
					<TextField
						variant="outlined"
						sx={{
							backgroundColor: "#ffffff",
							borderRadius: "10px 0 0 10px",
							width: "60%",
						}}
					/>
					<Button
						onClick={() => {
							window.open("mailto:letsbowl.97@gmail.com");
						}}
						sx={{
							color: "#ffffff",
							background: "linear-gradient(270deg, #E20069 10%, #2A00FF  80%)",
							borderRadius: "0px 10px 10px 0px",
						}}
					>
						Subscribe
					</Button>
				</Stack>

				<IconButton
					href="https://dashboard.letsbowlchennai.in"
					target="_blank"
					sx={{ display: { xs: "none", md: "inline-block" } }}
				>
					<Box component="img" sx={{ height: "30px", width: "30px" }} src={LogoIcon} />
				</IconButton>
			</Box>
		);
	}
};

export default Footer;

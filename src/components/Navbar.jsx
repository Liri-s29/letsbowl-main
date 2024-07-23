import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "../assets/images/Logo/letsBowlLogo.svg";
import LogoClose from "../assets/images/Logo/logoClose.png";
import LogoOpen from "../assets/images/Logo/logoOpen.png";
import { Link, Stack } from "@mui/material";

const Navbar = () => {
	const homeUrl = window.location.host + "/home";
	const navigate = useNavigate();
	const [menu, setMenu] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setMenu(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setMenu(null);
	};

	return (
		<AppBar position="fixed" color="transparent" sx={{ boxShadow: "none" }}>
			<Toolbar>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					sx={{ height: "100%", width: "100%" }}
				>
					<Box
						component="img"
						src={Logo}
						alt="letsBowlLogo"
						onClick={() => {
							navigate("/");
						}}
						sx={{
							display: { xs: "none", md: "block" },
							mr: 1,
							height: "100px",
							cursor: "pointer",
						}}
					/>
					<Box
						component="img"
						src={Logo}
						alt="letsBowlLogo"
						onClick={() => {
							navigate("/");
						}}
						sx={{
							display: { xs: "clock", md: "none" },
							justifySelf: "center",
							height: "100px",
						}}
					/>

					<Stack direction="row" justifyContent="space-evenly" sx={{ width: { xs: "auto", md: "70%" } }}>
						<MenuButton page="HOME" url="/" menu={menu} />
						<MenuButton page="ABOUT" url="/about" menu={menu} />
						<MenuButton page="GALLERY" url="/gallery" menu={menu} />
						<MenuButton page="CONTACT" scroll={true} url="/gallery" menu={menu} />
						{/* <Button
							sx={{
								my: 2,
								color: "white",
								mx: 5,
								px: 2,
								display: { xs: "none", md: "block" },
								background: "linear-gradient(140deg, #00E1FD 10%, #FC007A 80%)",
							}}
							onClick={() => {
								navigate("/bookings");
							}}
						>
							Book Now
						</Button> */}
						<Tooltip title="Open Menu">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<LogoMenu menu={menu} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{
								mt: "60px",
								".MuiMenu-paper": {
									background: "#fff",
									zIndex: "3",
									width: { xs: "50vw", md: "15vw" },
									borderRadius: "30px",
								},
								transition: "all ease-in 300ms",
								textAlign: "center",
							}}
							id="menu-appbar"
							anchorEl={menu}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(menu)}
							onClose={handleCloseUserMenu}
						>
							<Box
								sx={{
									position: "absolute",
									height: "100%",
									width: "100%",
									background: "linear-gradient(140deg, #00E1FD 10%, #FC007A 80%)",
									opacity: 0.5,
									zIndex: "2",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
								}}
							/>
							<LogoMenuItem page="HOME" url="/" />
							<LogoMenuItem page="ABOUT" url={`/about`} />
							<LogoMenuItem page="GALLERY" url="/gallery" />

							<LogoMenuItem page="CONTACT" scroll={true} />
							{/* <LogoMenuItem
								page="BOOK NOW"
								url="/bookings"
								sx={{
									display: { xs: "block", md: "none" },
								}}
							/> */}
						</Menu>
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	);

	function LogoMenuItem(props) {
		return (
			<MenuItem sx={{ zIndex: 3, justifyContent: "center", my: "1rem", ...props.sx }}>
				<Link
					onClick={() => {
						setMenu(false);
						if (props.scroll) {
							window.scrollTo({
								top: document.body.scrollHeight,
								behavior: "smooth",
							});
						} else navigate(props.url);
					}}
					sx={{ width: "100%", height: "100%", textDecoration: "none" }}
				>
					<Typography textAlign="center">{props.page}</Typography>
				</Link>
			</MenuItem>
		);
	}
};

function MenuButton(props) {
	const navigate = useNavigate();
	return (
		<Button
			sx={{
				my: 2,
				color: "white",
				mx: 5,
				transition: "opacity ease-in 300ms",
				opacity: props.menu ? 0 : 1,
				display: { xs: "none", md: "block" },
			}}
			onClick={() => {
				if (props.scroll) {
					window.scrollTo({
						top: document.querySelector('#contact').offsetTop,
						behavior: 'smooth'
					});
				} else navigate(props.url);
			}}
		>
			{props.page}
		</Button>
	);
}

const LogoMenu = (props) => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const [logo, setLogo] = React.useState(LogoClose);
	useEffect(() => {
		if (props.menu) {
			control.start("hidden");
			setTimeout(() => {
				setLogo(LogoOpen);
				control.start("visible");
			}, 100);
		} else {
			control.start("hidden");
			setTimeout(() => {
				setLogo(LogoClose);
				control.start("visible");
			}, 100);
		}
	}, [logo, inView, props.menu]);

	const boxVariant = {
		visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
		hidden: { opacity: 0, scale: 0 },
	};
	return (
		<Box
			component={motion.img}
			ref={ref}
			variants={boxVariant}
			initial="hidden"
			animate={control}
			src={logo}
			alt="letsBowlLogo"
			sx={{ height: "50px" }}
		/>
	);
};

export default Navbar;

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import CategoryTitle from "../components/Category/CategoryTitle";
import Offers from "../components/Category/Offers/Offers";
import Pricing from "../components/Category/Pricing";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import CategoryImage from "../components/Category/CategoryImage";
import Footer from "../components/Footer";

const controlsProps = {
	style: {
		left: "50%",
		paddingTop: "10px",
		position: "fixed",
		transform: "translateX(-50%)",
	},
};

const Category = () => {
	const path = window.location.pathname;
	const category = path.split("/")[2];
	const [visibleSlides, setVisibleSlides] = useState();
	const navigate = useNavigate();
	const [title, setTitle] = useState(_.upperFirst(category));

	useEffect(() => {
		CategoryVerify();
	}, [title]);

	function CategoryVerify() {
		const categoryList = ["Bowling", "Billiards", "Turf", "Machine_cricket", "Cafe_curry", "Kidzone"];
		console.log(title);
		if (!categoryList.includes(title)) {
			navigate("/");
		}
	}

	return (
		<>
			<FullPage controlsProps={controlsProps}>
				<Slide>
					<CategoryTitle title={title} />
				</Slide>
				<Slide>
					<Offers />
				</Slide>
				<Slide>
					<Pricing />
				</Slide>
				<Slide>
					<CategoryImage category={title} />
				</Slide>
				<Slide>
					<Footer />
				</Slide>
			</FullPage>
		</>
	);
};

export default Category;

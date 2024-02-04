import React from "react";
import { FullPage, Slide } from "react-full-page";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import GallerySection from "../Sections/GallerySection/GallerySection";

const controlsProps = {
	style: {
		left: "50%",
		paddingTop: "10px",
		position: "fixed",
		transform: "translateX(-50%)",
	},
};

const Gallery = () => {
	return (
		<>
			<Helmet>
				<title>Lets Bowl | Gallery</title>
				<meta name="description" content="Check out the moments at Lets Bowl" />
				<meta name="keywords" content="Bowling, Lets Bowl, Gallery, moments" />
			</Helmet>
			<FullPage controlsProps={controlsProps}>
				<Slide>
					<GallerySection />
				</Slide>
				<Slide>
					<Footer />
				</Slide>
			</FullPage>
		</>
	);
};

export default Gallery;

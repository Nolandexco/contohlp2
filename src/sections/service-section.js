import React, { useState } from "react";
/** @jsx jsx */
import {
	jsx,
	Container,
	Box,
	Grid,
	Text,
	Heading,
	Button,
	Image,
} from "theme-ui";
import { keyframes } from "@emotion/core";
import TextFeature from "components/text-feature";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import { IoIosPlay } from "react-icons/io";

// 1. Impor data
import data from "config/data.json";

// Impor Aset
import ServiceThumb from "assets/service-thumb.png";
import shapePattern from "assets/shape-pattern1.png";
import Smart from "assets/services/smart.svg";
import Secure from "assets/services/secure.svg";

// 2. Ambil data yang relevan
const { services } = data;

// 4. Peta Ikon
const iconMap = {
	"assets/services/smart.svg": Smart,
	"assets/services/secure.svg": Secure,
};

export default function ServiceSection() {
	const [videoOpen, setVideoOpen] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setVideoOpen(true);
	};

	return (
		<section sx={{ variant: "section.services" }}>
			<Container sx={styles.containerBox}>
				<Box sx={styles.thumbnail}>
					<Image src={ServiceThumb} alt="Thumbnail" />
					<Button
						sx={styles.videoBtn}
						onClick={handleClick}
						aria-label={services.video.buttonLabel}
					>
						<span>
							<IoIosPlay />
						</span>
					</Button>
					<Box sx={styles.shapeBox}>
						<Image src={shapePattern} alt="shape" />
					</Box>
				</Box>
				<Box sx={styles.contentBox}>
					{/* 3. Gunakan data dari JSON */}
					<TextFeature subTitle={services.subTitle} title={services.title} />
					<Grid sx={styles.grid}>
						{services.features.map((feature) => (
							<Box sx={styles.card} key={feature.id}>
								<Image
									src={iconMap[feature.imgSrc]}
									alt={feature.altText}
									sx={styles.icon}
								/>
								<Box sx={styles.wrapper}>
									<Heading sx={styles.wrapper.title}>{feature.title}</Heading>
									<Text sx={styles.wrapper.subTitle}>{feature.text}</Text>
								</Box>
							</Box>
						))}
					</Grid>
				</Box>
			</Container>
			<ModalVideo
				channel="youtube"
				isOpen={videoOpen}
				videoId={services.video.videoId} // Gunakan videoId dari JSON
				onClose={() => setVideoOpen(false)}
			/>
		</section>
	);
}

// Styles tidak perlu diubah
const styles = {
    // ... (kode styles sama seperti sebelumnya)
};

/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";

// 1. Impor data terpusat
import data from "config/data.json";

// Impor aset gambar (tetap diperlukan untuk optimasi build)
import BannerImg from "assets/banner-thumb.png";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";

// 2. Ambil data yang relevan
const { banner } = data;

export default function Banner() {
	return (
		<section sx={styles.banner} id="home">
			<Container sx={styles.banner.container}>
				<Box sx={styles.banner.contentBox}>
					{/* 3. Gunakan data dari JSON */}
					<Heading as="h1" variant="heroPrimary">
						{banner.title}
					</Heading>
					<Text as="p" variant="heroSecondary">
						{banner.description}
					</Text>
					<Button variant="primary" as="a" href={banner.button.link}>
						{banner.button.text}
					</Button>
				</Box>
				<Box sx={styles.banner.imageBox}>
					<Image src={BannerImg} alt="banner" />
				</Box>
			</Container>
		</section>
	);
}

// Styles object tidak perlu diubah
const styles = {
	banner: {
		pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
		pb: [2, null, 0, null, 2, 0, null, 5],
		position: "relative",
		zIndex: 2,
		"&::before": {
			position: "absolute",
			content: '""',
			bottom: 6,
			left: 0,
			height: "100%",
			width: "100%",
			zIndex: -1,
			backgroundImage: `url(${ShapeLeft})`,
			backgroundRepeat: `no-repeat`,
			backgroundPosition: "bottom left",
			backgroundSize: "36%",
		},
		"&::after": {
			position: "absolute",
			content: '""',
			bottom: "40px",
			right: 0,
			height: "100%",
			width: "100%",
			zIndex: -1,
			backgroundImage: `url(${ShapeRight})`,
			backgroundRepeat: `no-repeat`,
			backgroundPosition: "bottom right",
			backgroundSize: "32%",
		},
		container: {
			minHeight: "inherit",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		},
		contentBox: {
			width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
			mx: "auto",
			textAlign: "center",
			mb: ["40px", null, null, null, null, 7],
		},
		imageBox: {
			justifyContent: "center",
			textAlign: "center",
			display: "inline-flex",
			mb: [0, null, -6, null, null, "-40px", null, -3],
			img: {
				position: "relative",
				height: [245, "auto"],
			},
		},
	},
};

/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "components/text-feature";

// 1. Impor data
import data from "config/data.json";

// Impor aset
import FeatureThumb from "assets/core-feature.png";
import shapePattern from "assets/shape-pattern2.png";

// 2. Ambil data yang relevan
const { coreFeature } = data;

export default function CoreFeature() {
	return (
		<section sx={{ variant: "section.coreFeature" }}>
			<Container sx={styles.containerBox}>
				<Box sx={styles.contentBox}>
					{/* 3. Gunakan data dari JSON */}
					<TextFeature
						subTitle={coreFeature.subTitle}
						title={coreFeature.title}
						description={coreFeature.description}
						btnName={coreFeature.button.text}
						btnURL={coreFeature.button.link}
					/>
				</Box>
				<Box sx={styles.thumbnail}>
					<Image src={FeatureThumb} alt="Thumbnail" />
					<Box sx={styles.shapeBox}>
						<Image src={shapePattern} alt="Shape" />
					</Box>
				</Box>
			</Container>
		</section>
	);
}

// Styles tidak perlu diubah
const styles = {
    // ... (kode styles sama seperti sebelumnya)
};

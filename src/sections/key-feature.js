/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";

// 1. Impor data
import data from "config/data.json";

// Impor semua ikon SVG
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

// 2. Ambil data yang relevan
const { keyFeature } = data;

// 4. Buat peta ikon
const iconMap = {
	"assets/key-feature/performance.svg": Performance,
	"assets/key-feature/partnership.svg": Partnership,
	"assets/key-feature/subscription.svg": Subscription,
	"assets/key-feature/support.svg": Support,
};

export default function KeyFeature() {
	return (
		<section sx={{ variant: "section.keyFeature" }} id="feature">
			<Container>
				{/* 3. Gunakan data dari JSON */}
				<SectionHeader
					slogan={keyFeature.slogan}
					title={keyFeature.title}
				/>
				<Grid sx={styles.grid}>
					{keyFeature.items.map((item) => (
						<FeatureCardColumn
							key={item.id}
							src={iconMap[item.imgSrc]} // Gunakan peta ikon
							alt={item.altText}
							title={item.title}
							text={item.text}
						/>
					))}
				</Grid>
			</Container>
		</section>
	);
}

// Styles tidak perlu diubah
const styles = {
    // ... (kode styles sama seperti sebelumnya)
};

/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";

// 1. Impor data
import data from "config/data.json";

// Impor semua ikon SVG yang mungkin digunakan
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

// 2. Ambil data yang relevan
const { features } = data;

// 4. Buat peta untuk mencocokkan path string dari JSON ke komponen Ikon
const iconMap = {
	"assets/feature/performance.svg": Performance,
	"assets/feature/partnership.svg": Partnership,
	"assets/feature/subscription.svg": Subscription,
	"assets/feature/support.svg": Support,
};

export default function Feature() {
	return (
		<section sx={{ variant: "section.feature" }}>
			<Container>
				{/* 3. Gunakan data dari JSON */}
				<SectionHeader
					slogan={features.slogan}
					title={features.title}
				/>
				<Grid sx={styles.grid}>
					{features.items.map((item) => (
						<FeatureCard
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

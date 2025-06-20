/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";

import data from "config/data.json";

import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const { keyFeature } = data;

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
				<SectionHeader
					slogan={keyFeature.slogan}
					title={keyFeature.title}
				/>
				<Grid sx={styles.grid}>
					{keyFeature.items.map((item) => (
						<FeatureCardColumn
							key={item.id}
							src={iconMap[item.imgSrc]}
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

const styles = {
	grid: {
		width: ["100%", "80%", "100%"],
		mx: "auto",
		gridGap: [
			"35px 0",
			null,
			"40px 40px",
			"50px 60px",
			"30px",
			"50px 40px",
			"55px 90px",
		],
		gridTemplateColumns: [
			"repeat(1,1fr)",
			null,
			"repeat(2,1fr)",
			null,
			"repeat(4,1fr)",
		],
	},
};

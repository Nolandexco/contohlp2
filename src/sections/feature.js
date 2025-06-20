/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header.js";
import FeatureCard from "components/feature-card.js";

import data from "config/data.json";

import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const { features } = data;

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
				<SectionHeader
					slogan={features.slogan}
					title={features.title}
				/>
				<Grid sx={styles.grid}>
					{features.items.map((item) => (
						<FeatureCard
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
		pt: [0, null, null, null, null, null, 2],
		px: [5, 6, 0, null, 7, 8, 7],
		gridGap: [
			"40px 0",
			null,
			"45px 30px",
			null,
			"60px 50px",
			"70px 50px",
			null,
			"80px 90px",
		],
		gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
	},
};

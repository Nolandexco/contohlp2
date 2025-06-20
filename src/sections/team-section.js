/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";

import data from "config/data.json";

import Member1 from "assets/team/member-1.png";
import Member2 from "assets/team/member-2.png";
import Member3 from "assets/team/member-3.png";
import Member4 from "assets/team/member-4.png";
import Member5 from "assets/team/member-5.png";
import Member6 from "assets/team/member-6.png";

const { team } = data;

const imageMap = {
	"assets/team/member-1.png": Member1,
	"assets/team/member-2.png": Member2,
	"assets/team/member-3.png": Member3,
	"assets/team/member-4.png": Member4,
	"assets/team/member-5.png": Member5,
	"assets/team/member-6.png": Member6,
};

export default function TeamSection() {
	return (
		<section>
			<Container>
				<SectionHeader slogan={team.slogan} title={team.title} />
				<Grid sx={styles.grid}>
					{team.members.map((item) => (
						<TeamCard
							key={item.id}
							src={imageMap[item.imgSrc]}
							altText={item.altText}
							title={item.title}
							designation={item.designation}
							// Menghapus prop social
						/>
					))}
				</Grid>
			</Container>
		</section>
	);
}

const styles = {
	grid: {
		mt: [0, null, -6, null, -4],
		gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
		gridTemplateColumns: [
			"repeat(2,1fr)",
			null,
			"repeat(2,1fr)",
			null,
			"repeat(3,1fr)",
		],
	},
};

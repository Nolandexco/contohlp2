/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// 1. Impor data
import data from "config/data.json";

// Impor aset gambar
import Member1 from "assets/team/member-1.png";
import Member2 from "assets/team/member-2.png";
import Member3 from "assets/team/member-3.png";
import Member4 from "assets/team/member-4.png";
import Member5 from "assets/team/member-5.png";
import Member6 from "assets/team/member-6.png";

// 2. Ambil data yang relevan
const { team } = data;

// 4. Peta untuk gambar dan ikon
const imageMap = {
	"assets/team/member-1.png": Member1,
	"assets/team/member-2.png": Member2,
	"assets/team/member-3.png": Member3,
	"assets/team/member-4.png": Member4,
	"assets/team/member-5.png": Member5,
	"assets/team/member-6.png": Member6,
};
const iconMap = {
	facebook: <FaFacebookF />,
	twitter: <FaTwitter />,
	instagram: <FaInstagram />,
};

export default function TeamSection() {
	return (
		<section>
			<Container>
				{/* 3. Gunakan data dari JSON */}
				<SectionHeader slogan={team.slogan} title={team.title} />
				<Grid sx={styles.grid}>
					{team.members.map((item) => {
						// Ubah profil sosial untuk menyertakan komponen ikon
						const socialProfilesWithIcons = item.socialProfile.map(
							(profile) => ({
								...profile,
								icon: iconMap[profile.name],
							})
						);
						return (
							<TeamCard
								key={item.id}
								src={imageMap[item.imgSrc]} // Gunakan peta gambar
								altText={item.altText}
								title={item.title}
								designation={item.designation}
								social={socialProfilesWithIcons} // Gunakan profil sosial yang sudah diubah
							/>
						);
					})}
				</Grid>
			</Container>
		</section>
	);
}

// Styles tidak perlu diubah
const styles = {
    // ... (kode styles sama seperti sebelumnya)
};

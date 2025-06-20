/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";

// 1. Impor data
import data from "config/data.json";

// Impor Aset
import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.svg";
import ArrowEven from "assets/arrowEven.svg";

// 2. Ambil data yang relevan
const { workflow } = data;

export default function WorkFlow() {
	return (
		<section sx={styles.workflow}>
			<Container>
				{/* 3. Gunakan data dari JSON */}
				<SectionHeader
					slogan={workflow.slogan}
					title={workflow.title}
					isWhite={true}
				/>
				<Grid sx={styles.grid}>
					{workflow.steps.map((item) => (
						<Box sx={styles.card} key={item.id}>
							<Box sx={styles.iconBox}>{`0${item.id}`}</Box>
							<Box sx={styles.wrapper}>
								<Heading sx={styles.wrapper.title}>{item.title}</Heading>
								<Text sx={styles.wrapper.subTitle}>{item.text}</Text>
							</Box>
						</Box>
					))}
				</Grid>
			</Container>
		</section>
	);
}

// Styles tidak perlu diubah
const styles = {
    // ... (kode styles sama seperti sebelumnya, pastikan path BG dan arrow benar)
};

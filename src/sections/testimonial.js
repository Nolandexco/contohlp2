/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";

// 1. Impor data
import data from "config/data.json";

// Impor aset gambar
import Avatar1 from "assets/testimonial/avatar1.png";
import Avatar2 from "assets/testimonial/avatar2.png";
import Avatar3 from "assets/testimonial/avatar3.png";
import Avatar4 from "assets/testimonial/avatar4.png";

// 2. Ambil data yang relevan
const { testimonials } = data;

// 4. Peta gambar avatar
const avatarMap = {
	"assets/testimonial/avatar1.png": Avatar1,
	"assets/testimonial/avatar2.png": Avatar2,
	"assets/testimonial/avatar3.png": Avatar3,
	"assets/testimonial/avatar4.png": Avatar4,
};

const responsive = { /* ... */ };
const carouselParams = { /* ... */ };

export default function TestimonialCard() {
	return (
		<section id="testimonial" sx={{ variant: "section.testimonial" }}>
			<Container css={{ textAlign: "center" }}>
				{/* 3. Gunakan data dari JSON */}
				<SectionHeader
					slogan={testimonials.slogan}
					title={testimonials.title}
				/>
			</Container>
			<Box sx={styles.carouselWrapper}>
				<Carousel {...carouselParams}>
					{testimonials.reviews.map((item) => (
						<Box sx={styles.reviewCard} key={item.id}>
							<Rating rating={item.review} />
							<Heading as="h3" sx={styles.title}>
								{item.title}
							</Heading>
							<Text sx={styles.description}>{item.description}</Text>
							<div className="card-footer">
								<div className="image">
									<Image src={avatarMap[item.avatar]} alt={item.name} />
								</div>
								<div className="reviewer-info">
									<Heading as="h4" sx={styles.heading}>
										{item.name}
									</Heading>
									<Text sx={styles.designation}>{item.designation}</Text>
								</div>
							</div>
						</Box>
					))}
				</Carousel>
			</Box>
		</section>
	);
}

// Styles tidak perlu diubah
const styles = {
    // ... (kode styles sama seperti sebelumnya)
};

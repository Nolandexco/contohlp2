/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
// ... import lainnya
import Logo from "components/logo";
import LogoDark from "assets/logo.svg";
// Baris import MobileDrawer sudah dihapus
import menuItems from "./header.data";

export default function Header({ className }) {
	return (
		<header sx={styles.header} className={className}>
			<Container sx={styles.container}>
				<Logo src={LogoDark} />
				<Flex as="nav" sx={styles.nav}>
					{menuItems.map((menuItem, i) => (
						<Link
							activeClass="active"
							to={menuItem.path}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							key={i}
						>
							{menuItem.label}
						</Link>
					))}
				</Flex>
				<Button
					className="donate__btn"
					variant="secondary"
					aria-label="Get Started"
				>
					Get Started
				</Button>
				{/* Komponen MobileDrawer sudah dihapus */}
			</Container>
		</header>
	);
}

// ... styles (tidak perlu diubah)
const styles = {
    // ... isi styles tetap sama
}

/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
// ... import lainnya
import Logo from "components/logo";
import LogoDark from "assets/logo.svg";
import MobileDrawer from "./mobile-drawer"; // <-- HAPUS BARIS INI
import menuItems from "./header.data";

export default function Header({ className }) {
	return (
		<header sx={styles.header} className={className}>
			<Container sx={styles.container}>
				<Logo src={LogoDark} />
				<Flex as="nav" sx={styles.nav}>
					{/* ... kode menu desktop */}
				</Flex>
				<Button
					className="donate__btn"
					variant="secondary"
					aria-label="Get Started"
				>
					Get Started
				</Button>
				<MobileDrawer /> {/* <-- HAPUS BARIS INI */}
			</Container>
		</header>
	);
}

// ... styles

/** @jsx jsx */
import { jsx, Box, Flex, Container } from "theme-ui";
import { keyframes } from "@emotion/core";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import menuItems from "./header.data";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={styles.wrapper}>
      {/* Menu button */}
      <Box
        sx={styles.handler}
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <IoMdMenu size="26px" />
      </Box>

      {/* Mobile menu overlay */}
      {isOpen && (
        <Box sx={styles.menuOverlay}>
          <Container sx={styles.container}>
            {/* Close button */}
            <Box
              sx={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <IoMdClose size="24px" />
            </Box>

            {/* Menu items */}
            <Flex sx={styles.menuItems}>
              {menuItems.map((menuItem, i) => (
                <Link
                  key={i}
                  activeClass="active"
                  to={menuItem.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  sx={styles.menuLink}
                >
                  {menuItem.label}
                </Link>
              ))}
            </Flex>
          </Container>
        </Box>
      )}
    </Box>
  );
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const styles = {
  wrapper: {
    display: ["flex", null, null, null, "none"],
    alignItems: "center",
    flexShrink: 0,
  },
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "text",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "primary",
    },
  },
  menuOverlay: {
    position: "fixed",
    top: 0,
    right: 0,
    width: ["100%", "80%", "50%"],
    height: "100%",
    backgroundColor: "background",
    zIndex: 1000,
    animation: `${slideIn} 0.3s ease-in-out`,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    "&.closing": {
      animation: `${slideOut} 0.3s ease-in-out`,
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    pt: 4,
    pb: 5,
  },
  closeButton: {
    alignSelf: "flex-end",
    cursor: "pointer",
    color: "text",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "primary",
    },
    p: 3,
  },
  menuItems: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  menuLink: {
    fontSize: [3, 4],
    fontWeight: "body",
    color: "text",
    padding: "15px 0",
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "primary",
    },
    "&.active": {
      color: "primary",
    },
  },
};

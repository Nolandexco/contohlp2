import React, { useState } from "react";
import { Box } from "theme-ui";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import menuItems from "./header.data";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={styles.wrapper}>
      {/* Menu button */}
      <Box sx={styles.handler} onClick={() => setIsOpen(true)}>
        <IoMdMenu size="26px" />
      </Box>

      {/* Mobile menu overlay */}
      {isOpen && (
        <Box sx={styles.menuOverlay}>
          {/* Close button */}
          <Box sx={styles.closeButton} onClick={() => setIsOpen(false)}>
            <IoMdClose size="24px" />
          </Box>

          {/* Menu items */}
          <Box sx={styles.menuItems}>
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
          </Box>
        </Box>
      )}
    </Box>
  );
}

const styles = {
  wrapper: {
    display: ["flex", null, null, null, "none"],
    alignItems: "center",
  },
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  menuOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
    color: "white",
  },
  menuItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  menuLink: {
    color: "white",
    fontSize: "18px",
    fontWeight: "500",
    padding: "15px 0",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "primary",
    },
    "&.active": {
      color: "primary",
    },
  },
};

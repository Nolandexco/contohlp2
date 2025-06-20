import React, { useState, useEffect } from "react";
import { Box, IconButton } from "theme-ui";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import FocusLock from "react-focus-lock";
import { keyframes } from "@emotion/core";
import menuItems from "./header.data";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  // Stop background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box sx={styles.wrapper}>
      {/* Menu open button */}
      <IconButton
        sx={styles.handler}
        onClick={toggleDrawer}
        aria-label="Open Menu"
        aria-expanded={isOpen}
      >
        <IoMdMenu size="28px" />
      </IconButton>

      {/* Mobile menu overlay */}
      {isOpen && (
        <FocusLock>
          <Box
            as="aside"
            role="dialog"
            aria-modal="true"
            sx={styles.drawer}
            onClick={toggleDrawer} // Close on overlay click
          >
            <Box sx={styles.content} onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <IconButton
                sx={styles.closeButton}
                onClick={toggleDrawer}
                aria-label="Close Menu"
              >
                <IoMdClose size="24px" color="#ffffff" />
              </IconButton>

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
                    onClick={toggleDrawer}
                    sx={styles.menuLink}
                  >
                    {menuItem.label}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </FocusLock>
      )}
    </Box>
  );
}

// Keyframe animations for a smoother experience
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const styles = {
  wrapper: {
    display: ["flex", null, null, null, "none"],
    alignItems: "center",
  },
  handler: {
    // IconButton provides base styling, we just adjust it
    cursor: "pointer",
    color: "text",
  },
  drawer: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // A slightly softer overlay
    zIndex: 1000,
    animation: `${fadeIn} 0.3s ease-in-out`,
    display: 'flex',
    justifyContent: 'flex-end', // Align content to the right
  },
  content: {
    position: "relative",
    width: ["85%", "60%", "45%"], // Responsive width
    height: "100%",
    backgroundColor: "#1c1e21", // A dark, modern background
    boxShadow: "-5px 0 15px rgba(0,0,0,0.2)",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    animation: `${slideIn} 0.3s ease-in-out`,
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
    cursor: "pointer",
    // IconButton styles apply
  },
  menuItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align text to the left
    width: "100%",
    mt: '40px', // Margin top to push it below the close button
  },
  menuLink: {
    color: "white",
    fontSize: "20px",
    fontWeight: "500",
    padding: "15px 20px",
    width: '100%',
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.2s ease-in-out",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "primary", // Assumes 'primary' is defined in your theme
    },
    "&.active": {
      color: "primary",
      fontWeight: '600',
    },
  },
};

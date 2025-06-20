/** @jsx jsx */
import { jsx, Box, Card, Text, Heading, Button } from "theme-ui";
import React from "react";
import List from "./list";

export default function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText = "Start Free Trial",
    anotherOption,
    points,
    link, // Destructure the link property from data
  },
}) {
  return (
    <Card
      className={header ? "package__card active" : "package__card"}
      sx={styles.pricingBox}
    >
      {header && <Text sx={styles.header}>{header}</Text>}
      <Box>
        <Box className="package__header" sx={styles.pricingHeader}>
          <Heading className="package__name" variant="title">
            {name}
          </Heading>
          <Text as="p">{description}</Text>
        </Box>
        <List items={points} childStyle={styles.listItem} />
        <Text className="package__price" sx={styles.price}>
          {priceWithUnit}
          <span>/Monthly</span>
        </Text>
        <Box sx={styles.buttonGroup}>
          {/* Primary button with link redirection */}
          {link ? (
            <Button
              as="a" // Render as an <a> tag for native link behavior
              href={link} // Use the link from JSON
              variant="primary"
              aria-label={buttonText}
              sx={{ cursor: "pointer" }}
              target="_blank" // Open in new tab for WhatsApp
              rel="noopener noreferrer" // Security best practice
            >
              {buttonText}
            </Button>
          ) : (
            <Button variant="primary" aria-label={buttonText} disabled>
              {buttonText}
            </Button>
          )}
          {anotherOption && (
            <Button
              as="a" // Optionally render as <a> for redirection
              href={link || "#"} // Use same link or fallback to # if no link
              variant="textButton"
              className="free_trial"
              aria-label={anotherOption}
              sx={{ color: "black", cursor: link ? "pointer" : "default" }}
              target={link ? "_blank" : undefined} // Open in new tab if link exists
              rel={link ? "noopener noreferrer" : undefined}
            >
              {anotherOption}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
}

const styles = {
  pricingBox: {
    borderRadius: 20,
    position: "relative",
    transition: "all 0.3s",
    p: ["35px 25px", null, null, "40px"],
    width: ["100%", "75%", "100%"],
    mb: "40px",
    mt: "40px",
    mx: [0, "auto", 0],
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      top: 0,
      left: 0,
      height: "100%",
      border: "1px solid rgba(38, 78, 118, 0.1)",
      borderRadius: "inherit",
      transition: "all 0.3s",
      zIndex: -1,
    },
    "&:hover": {
      boxShadow: "0px 4px 25px rgba(38, 78, 118, 0.1) !important",
      "&:before": {
        opacity: 0,
      },
    },
  },
  header: {
    height: ["28px", null, null, "32px"],
    backgroundColor: "yellow",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: "-17px",
    letterSpacing: "-.14px",
    px: "12px",
  },
  pricingHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["30px", null, null, null, "40px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading",
    },
    ".package__name": {
      marginBottom: [1, null, 2],
    },
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, "30px"],
    lineHeight: 1,
    letterSpacing: "-0.55px",
    color: "text",
    marginBottom: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: [4, 6],
    "> span": {
      position: "relative",
      pl: "3px",
      display: "inline-block",
      fontSize: [1, 2],
      fontWeight: "normal",
    },
  },
  listItem: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: "flex-start",
    color: "text",
    "&.closed": {
      opacity: 0.55,
      button: {
        color: "#788FB5",
      },
    },
  },
  buttonGroup: {
    textAlign: "center",
    mt: ["30px", null, null, null, "35px"],
    ".free_trial": {
      color: "secondary",
      width: "100%",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: ["14px", 1],
      p: "20px 0 0",
    },
  },
};

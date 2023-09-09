import React from "react";
import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "./Logo"; // Import your logo component
import styles from "./Footer.module.css"; // Import the CSS module
import IvIcon from "../components/IvIcon";

export default function Footer() {
  const navLinksStyle = {
    display: "flex",
    flexDirection: "column", // Stacks items vertically
    gap: "10px",
  };

  const typographyStyle = {
    color: "white",
    textDecoration: "none",
    borderRadius: "30px", // Adjust as needed
    padding: "2px 10px", // Padding to give space for the rounded effect
    transition: "background-color 0.3s", // Smooth transition for hover effect
    "&:hover": {
      backgroundColor: "rgba(25, 31, 35, 0.10)", // Slight white background on hover, adjust as needed
    },
  };
  const contactStyles = {
    color: "white",
    textDecoration: "none",
    borderRadius: "20px", // Adjust as needed
    padding: "5px 10px", // Padding to give space for the rounded effect
  };

  return (
    <>
      <CssBaseline />

      <footer className={styles.footer}>
        <Container maxWidth="false">
          <Grid
            container
            spacing={3}
          >
            {/* Contact info on the left with Logo centered below */}
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={contactStyles}
                >
                  Contact Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={contactStyles}
                  color="inherit"
                  style={{ textAlign: "left" }}
                >
                  Phone: (123) 456-7890
                </Typography>
                <Typography
                  variant="body1"
                  sx={contactStyles}
                  color="inherit"
                  style={{ textAlign: "left" }}
                >
                  Email: info@example.com
                </Typography>
                <Typography
                  variant="body1"
                  sx={contactStyles}
                  color="inherit"
                  style={{ textAlign: "left" }}
                >
                  Address: 123 IV St, Hydration City, 12345
                </Typography>
              </div>
              <div style={{ marginTop: "20px" }}>
                <IvIcon />
              </div>
            </Grid>

            {/* Grid of Links in the middle */}
            <Grid
              item
              xs={12}
              sm={4}
            >
              <Grid
                container
                direction="column"
                // className={styles["links-container"]}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={typographyStyle}
                >
                  Useful Links
                </Typography>
                <div style={navLinksStyle}>
                  <Typography
                    variant="body1"
                    component={Link}
                    to="/Menu"
                    color="inherit"
                    sx={typographyStyle}
                    style={{ textAlign: "left" }}
                  >
                    Hydration Menu
                  </Typography>
                  <Typography
                    variant="body1"
                    component={Link}
                    to="/"
                    color="inherit"
                    sx={typographyStyle}
                    style={{ textAlign: "left" }}
                  >
                    IV Specialists
                  </Typography>
                  <Typography
                    variant="body1"
                    component={Link}
                    to="/locations"
                    color="inherit"
                    sx={typographyStyle}
                    style={{ textAlign: "left" }}
                  >
                    Locations
                  </Typography>
                  <Typography
                    variant="body1"
                    component={Link}
                    to="/about"
                    color="inherit"
                    sx={typographyStyle}
                    style={{ textAlign: "left" }}
                  >
                    About Us
                  </Typography>
                  <Typography
                    variant="body1"
                    component={Link}
                    to="/contact"
                    color="inherit"
                    sx={typographyStyle}
                    style={{ textAlign: "left" }}
                  >
                    Contact
                  </Typography>
                </div>
              </Grid>
            </Grid>
            {/* Additional Column on the right */}
            <Grid
              item
              xs={12}
              sm={4}
            >
              <Container
                maxWidth="md"
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  backgroundColor: "#9ED0E6",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="body2"
                  color="black"
                  paragraph
                >
                  <strong>Important Notice:</strong> The statements made
                  regarding our vitamin products and services have not been
                  evaluated by the Food and Drug Administration. These products
                  are not intended to diagnose, treat, cure, or prevent any
                  disease. All information presented here is not meant as a
                  substitute for or alternative to information from health care
                  practitioners. Please consult your health care professional
                  about potential interactions or other possible complications
                  before using any product or service. Your health and
                  well-being are paramount; always prioritize the advice and
                  recommendations of your personal physician or another
                  qualified health provider.
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
}

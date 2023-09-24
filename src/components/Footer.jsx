import React from "react";
import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "./Logo"; // Import your logo component
import styles from "./Footer.module.css"; // Import the CSS module
import IvIcon from "../components/IvIcon";
import { useNavigate, useLocation } from "react-router-dom";
import { useScroll } from "./ScrollContext";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  const navigate = useNavigate();

  const handleTypographyClick = (route) => {
    navigate(route, { state: { shouldScroll: true } });
  };

  const navLinksStyle = {
    display: "inline-block",
    flexDirection: "column", // Stacks items vertically
    gap: "10px",
  };

  const typographyStyle = {
    marginBottom: "15px",
    color: "white",
    textDecoration: "none",
    borderRadius: "30px", // Adjust as needed
    padding: "2px 10px", // Padding to give space for the rounded effect
    transition: "background-color 0.3s", // Smooth transition for hover effect
    "&:hover": {
      backgroundColor: "#a1a3c1", // Slight white background on hover, adjust as needed
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
                  style={{ paddingLeft: "45px" }}
                >
                  Contact Us
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <PhoneIcon style={{ marginRight: "10px" }} />
                  <Typography
                    variant="body1"
                    sx={contactStyles}
                    color="inherit"
                  >
                    (123) 456-7890
                  </Typography>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <MailOutlineIcon style={{ marginRight: "10px" }} />
                  <Typography
                    variant="body1"
                    sx={contactStyles}
                    color="inherit"
                  >
                    info@example.com
                  </Typography>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon style={{ marginRight: "10px" }} />
                  <Typography
                    variant="body1"
                    sx={contactStyles}
                    color="inherit"
                  >
                    Address: 123 IV St, Hydration City, 12345
                  </Typography>
                </div>
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
                <div style={{ paddingLeft: "35px" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={contactStyles}
                  >
                    Useful Links
                  </Typography>
                  <div style={{ ...navLinksStyle, textAlign: "left" }}>
                    <Typography
                      variant="body1"
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                      onClick={() => handleTypographyClick("/menu")}
                    >
                      Hydration Menu
                    </Typography>
                    <Typography
                      variant="body1"
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                      onClick={() => handleTypographyClick("/")}
                    >
                      IV Specialists
                    </Typography>
                    <Typography
                      variant="body1"
                      onClick={() =>
                        handleTypographyClick("/locations/AllLocations")
                      }
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                    >
                      Locations
                    </Typography>
                    <Typography
                      variant="body1"
                      onClick={() => handleTypographyClick("/about")}
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                    >
                      About Us
                    </Typography>
                    <Typography
                      variant="body1"
                      onClick={() => handleTypographyClick("/contact")}
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                    >
                      Contact
                    </Typography>
                  </div>
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

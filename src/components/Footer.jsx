import { Container, CssBaseline, Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Icons
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// Custom components & hooks
import Logo from "./Logo";
import IvIcon from "../components/IvIcon";
import { useScroll } from "./ScrollContext";

// Styles
import styles from "./Footer.module.css";
import Copyright from "./Copyright";

export default function Footer({ onButtonClick }) {
  const navigate = useNavigate();
  const handleAboutUs = (route) => {
    if (
      route === "/about" ||
      route === "/contact" ||
      route === "/Ownership" ||
      route === "/Supplemental"
    ) {
      onButtonClick(true); // Use the function passed via props here
    } else {
      onButtonClick(false);
    }
    navigate(route);
  };

  // const handleTypographyClick = (route) => {
  //   navigate(route, { state: { shouldScroll: true } });
  //   onButtonClick && onButtonClick();
  // };

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Consider moving these to a separate styles.js or include in your CSS modules
  const navLinksStyle = {
    display: "inline-block",
    flexDirection: "column",
    gap: "10px",
  };

  const typographyStyle = {
    marginBottom: "15px",
    color: "white",
    textDecoration: "none",
    borderRadius: "30px",
    padding: "2px 10px",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#a1a3c1",
      cursor: "pointer",
    },
  };

  const contactStyles = {
    color: "white",
    textDecoration: "none",
    borderRadius: "20px",
    padding: "5px 10px",
  };
  const contactUsStyles = {
    color: "white",
    textDecoration: "none",
    borderRadius: "20px",
    paddingLeft: 2,
  };

  const hoverStyles = {
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  };
  const contactInfo = [
    // {
    //   icon: <PhoneIcon />,
    //   text: "(800) 123-5678",
    //   link: "tel:(800) 123-5678",
    // },
    {
      icon: <MailOutlineIcon />,
      text: "Info@IV.Direct",
      link: "mailto:info@IV.Direct",
    },
    {
      icon: <LocationOnIcon />,
      text: "Corporate: 444 Madison Ave, 18th Fl, New York, NY, 10025",
      link: "https://www.google.com/maps/search/?api=1&query=444+Madison+Ave+18th+Fl,+New+York,+10025",
    },
  ];

  return (
    <>
      <CssBaseline />

      <footer className={styles.footer}>
        <Container>
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
                alignItems: "center",
              }}
            >
              <div>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ ...contactStyles }}
                >
                  Contact Us
                </Typography>
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <div>{info.icon}</div>
                    <Box
                      component="span"
                      sx={{
                        ...contactStyles,
                        ...hoverStyles,
                      }}
                    >
                      <Typography variant="body1">
                        <a
                          href={info.link}
                          style={contactUsStyles}
                        >
                          {info.text}
                        </a>
                      </Typography>
                    </Box>
                  </div>
                ))}
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
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
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
                      onClick={() => {
                        handleAboutUs("/");
                        scrollTop();
                      }}
                    >
                      Home
                    </Typography>
                    <Typography
                      variant="body1"
                      onClick={() => handleAboutUs("/about")}
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                    >
                      About Us
                    </Typography>
                    <Typography
                      variant="body1"
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                      onClick={() => handleAboutUs("/")}
                    >
                      Hydration Menu
                    </Typography>
                    <Typography
                      variant="body1"
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                      onClick={() => handleAboutUs("/Supplemental")}
                    >
                      Supplemental Shots
                    </Typography>{" "}
                    <Typography
                      variant="body1"
                      onClick={() => handleAboutUs("/locations/AllLocations")}
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                    >
                      Locations
                    </Typography>
                    <Typography
                      variant="body1"
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                      onClick={() => handleAboutUs("/Ownership")}
                    >
                      Ownership Opprotunities
                    </Typography>
                    <Typography
                      variant="body1"
                      onClick={() => handleAboutUs("/contact")}
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                    >
                      Contact
                    </Typography>
                    <Typography
                      variant="body1"
                      onClick={() => handleAboutUs("/privacy")}
                      color="inherit"
                      sx={typographyStyle}
                      style={{ textAlign: "left" }}
                    >
                      Privacy Policy
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
                  backgroundColor: "#ffffff",
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
              <Copyright style={{ color: "white" }} />
            </Grid>
          </Grid>
        </Container>
        <div className={styles.scrollTopContainer}>
          <ArrowUpwardIcon
            className={styles.scrollTopIcon}
            onClick={scrollTop}
          />
        </div>
      </footer>
    </>
  );
}

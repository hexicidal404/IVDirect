import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import IvIcon from "./IvIcon";
import ResponsiveNavigation from "./ResponsiveNavigation";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function NavBar({ hydrationMenuRef }) {
  const scrollToHydrationMenu = () => {
    if (hydrationMenuRef.current) {
      hydrationMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Default value

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Styles

  const typographyStyle = {
    textDecoration: "none",
    borderRadius: "20px", // Adjust as needed
    padding: "5px 10px", // Padding to give space for the rounded effect
    transition: "background-color 0.3s", // Smooth transition for hover effect
    "&:hover": {
      backgroundColor: "rgba(25, 31, 35, 0.10)", // Slight white background on hover, adjust as needed
    },
  };

  const logoStyle = {
    height: "5rem",
    width: "auto",
    borderRadius: "5px",
    marginRight: "20px",
    paddingTop: "10px",
  };

  const navLinksStyle = {
    display: isMobile ? "none" : "flex", // Hide on mobile
    gap: "20px",
    marginLeft: "auto", // Justify right
  };

  const menuButtonStyle = {
    display: isMobile ? "block" : "none", // Show only on mobile
  };

  return (
    <>
      <CssBaseline />

      <AppBar>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IvIcon style={logoStyle} />
          </div>
          <div style={navLinksStyle}>
            <Typography
              variant="body1"
              component={Link}
              to="/Menu"
              color="inherit"
              sx={typographyStyle}
              onClick={scrollToHydrationMenu}
            >
              Hydration Menu
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              to="/"
              color="inherit"
              sx={typographyStyle}
            >
              IV Specialists
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              to="/locations"
              color="inherit"
              sx={typographyStyle}
            >
              Locations
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              to="/about"
              color="inherit"
              sx={typographyStyle}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              to="/contact"
              color="inherit"
              sx={typographyStyle}
            >
              Contact
            </Typography>
          </div>
          <IconButton
            style={menuButtonStyle}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleNav}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <ResponsiveNavigation
        isOpen={isNavOpen}
        onClose={toggleNav}
      />
    </>
  );
}

export default NavBar;

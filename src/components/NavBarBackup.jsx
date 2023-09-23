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
import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function NavBar() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY < 100; // Adjust the value as needed
      if (top !== isTop) {
        setIsTop(top);
      }
    };

    handleScroll(); // Check initial position on mount
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  //

  const navigate = useNavigate();

  const handleTypographyClick = (route) => {
    navigate(route, { state: { shouldScroll: true } });
  };

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

  const appBarStyle = {
    position: "fixed", // This will ensure the AppBar is always fixed at the top
    top: 0, // Positioned at the top of the page
    left: 0, // Positioned starting from the left
    right: 0, // Stretches to the right edge of the window
    zIndex: 1100, // This ensures the AppBar stays above other elements; 1100 is the default zIndex value for AppBars in MUI
    transition: "background-color 1s",
    background:
      "linear-gradient(90deg, rgba(0,164,222,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  };
  const contentStyle = {
    paddingTop: 8, // Assuming AppBar's height is 64px, adjust as needed
  };
  const overlayStyle = {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    background: "white",
    transition: "opacity 1s",
    opacity: isTop ? 1 : 0,
  };
  const typographyColor = isTop ? "black" : "white";

  return (
    <>
      <CssBaseline />

      <AppBar style={appBarStyle}>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IvIcon style={logoStyle} />
            </div>
            <div style={navLinksStyle}>
              <Typography
                variant="body1"
                color="inherit"
                sx={{ ...typographyStyle, color: typographyColor }}
                style={{ textAlign: "left" }}
                onClick={() => handleTypographyClick("/menu")}
              >
                Hydration Menu
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                sx={{ ...typographyStyle, color: typographyColor }}
                style={{ textAlign: "left" }}
                onClick={() => handleTypographyClick("/")}
              >
                IV Specialists
              </Typography>
              <Typography
                variant="body1"
                onClick={() => handleTypographyClick("/locations")}
                color="inherit"
                sx={{ ...typographyStyle, color: typographyColor }}
                style={{ textAlign: "left" }}
              >
                Locations
              </Typography>
              <Typography
                variant="body1"
                onClick={() => handleTypographyClick("/about")}
                color="inherit"
                sx={{ ...typographyStyle, color: typographyColor }}
                style={{ textAlign: "left" }}
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                onClick={() => handleTypographyClick("/contact")}
                color="inherit"
                sx={{ ...typographyStyle, color: typographyColor }}
                style={{ textAlign: "left" }}
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
        </div>
      </AppBar>

      <ResponsiveNavigation
        isOpen={isNavOpen}
        onClose={toggleNav}
      />
    </>
  );
}

export default NavBar;

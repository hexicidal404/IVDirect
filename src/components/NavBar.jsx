import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";

import IvIcon from "./IvIcon";
import ResponsiveNavigation from "./ResponsiveNavigation";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useTheme } from "@mui/material/styles";

function NavBar({ DetailsRef, allLocationsRef, isOpen, onClose, data }) {
  const [anchorElLocations, setAnchorElLocations] = useState(null);
  const [anchorElHydration, setAnchorElHydration] = useState(null);

  const [isTop, setIsTop] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Default value

  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

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

  const navigateToHydrationMenu = () => {
    navigate("/");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleTypographyClick = (route) => {
    navigate(route, { state: { shouldScroll: true } });
  };

  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLocationClick = (path) => {
    if (path === "/locations/AllLocations") {
      navigate(path, { state: { shouldScroll: true } });
    } else {
      navigate(path);
    }
    handleClose();
  };

  const handleOpenMenu = (event, menuType) => {
    if (menuType === "locations") {
      setAnchorElLocations(event.currentTarget);
    } else if (menuType === "hydration") {
      setAnchorElHydration(event.currentTarget);
    }
  };

  // Styles

  const theme = useTheme();

  const typographyStyle = {
    textDecoration: "none",
    borderRadius: "20px", // Adjust as needed
    padding: "5px 10px", // Padding to give space for the rounded effect
    transition: "background-color 0.3s", // Smooth transition for hover effect
    "&:hover": {
      backgroundColor: "#a1a3c1", // Slight white background on hover, adjust as needed
      cursor: "pointer",
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
    background: theme.palette.primary[800],
    // background:
    //   "linear-gradient(90deg, rgba(0,164,222,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
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
            <div
              onClick={scrollToTop}
              style={{ display: "flex", alignItems: "center" }}
            >
              <IvIcon style={logoStyle} />
            </div>
            <div style={navLinksStyle}>
              <Typography
                variant="body1"
                color="inherit"
                sx={{ ...typographyStyle, color: typographyColor }}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={(event) => handleOpenMenu(event, "hydration")}
              >
                Hydration Menu
                <ArrowDropDownIcon
                  style={{ fontSize: "1rem", marginLeft: "5px" }}
                />
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
                color="inherit"
                sx={{ ...typographyStyle, color: typographyColor }}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }} // Flex display to align text and icon
                onClick={(event) => handleOpenMenu(event, "locations")}
              >
                Locations
                <ArrowDropDownIcon
                  style={{ fontSize: "1rem", marginLeft: "5px" }}
                />
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
              <MenuIcon sx={{ color: isTop ? "black" : "white" }} />
            </IconButton>
          </Toolbar>
        </div>
        <Menu
          anchorEl={anchorElHydration}
          open={Boolean(anchorElHydration)}
          onClose={() => setAnchorElHydration(null)}
          onMouseLeave={() => setAnchorElHydration(null)}
        >
          {data.map((item) => (
            <MenuItem
              key={item.key}
              onClick={() => {
                navigate(`/details/${item.key}`, {
                  state: { shouldScrollToHydration: true },
                });
              }}
            >
              {item.title}
            </MenuItem>
          ))}

          <MenuItem onClick={navigateToHydrationMenu}>See all IVs </MenuItem>
        </Menu>

        <Menu
          anchorEl={anchorElLocations}
          open={Boolean(anchorElLocations)}
          onClose={() => setAnchorElLocations(null)}
          onMouseLeave={() => setAnchorElLocations(null)}
        >
          <MenuItem onClick={() => handleLocationClick("/locations/newyork")}>
            New York
          </MenuItem>
          <MenuItem
            onClick={() => handleLocationClick("/locations/california")}
          >
            California
          </MenuItem>
          <MenuItem onClick={() => handleLocationClick("/locations/florida")}>
            Florida
          </MenuItem>
          <MenuItem
            onClick={() => handleLocationClick("/locations/AllLocations")}
          >
            Additional Locations
          </MenuItem>
        </Menu>
      </AppBar>

      <ResponsiveNavigation
        isOpen={isNavOpen}
        onClose={toggleNav}
        data={data}
      />
    </>
  );
}

export default NavBar;

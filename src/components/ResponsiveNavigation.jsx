// ResponsiveNavigation.js
import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
  Paper,
  Box,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";

function ResponsiveNavigation({ isOpen, onClose, data }) {
  const [locationsOpen, setLocationsOpen] = React.useState(false);
  const [hydrationOpen, setHydrationOpen] = React.useState(false);

  const navigate = useNavigate();

  const toggleLocations = () => {
    setLocationsOpen(!locationsOpen);
  };
  const toggleHydration = () => {
    setHydrationOpen(!hydrationOpen);
  };

  const handleLocationClick = (path) => {
    onClose();
    navigate(path, {
      state: { shouldScroll: path === "/locations/AllLocations" },
    });
  };
  const handleHydrationClick = (itemKey) => {
    onClose();
    navigate(`/details/${itemKey}`, {
      state: { shouldScrollToHydration: true },
    });
  };

  const hydrationItemStyle = {
    backgroundColor: "#e0e0e0", // a light gray background for distinction
    marginLeft: "10px", // slight indent for visual hierarchy
    marginRight: "10px", // consistent padding with left side
    borderRadius: "5px", // rounded corners
    marginTop: "5px", // space between items
  };

  const hydrationLinkStyle = {
    textDecoration: "none",
    color: "inherit",
    ...hydrationItemStyle, // spread the item styles here
  };

  const drawerWidth = 250; // Fixed width for the drawer
  const drawerStyle = {
    width: `${drawerWidth}px`, // Apply the fixed width
    maxWidth: `${drawerWidth}px`, // Ensure it doesn't exceed the fixed width
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      PaperProps={{ style: drawerStyle }}
    >
      <List style={drawerStyle}>
        <ListItemButton onClick={toggleHydration}>
          <ListItemText primary="Hydration Menu" />
          <ListItemIcon>
            {hydrationOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemIcon>
        </ListItemButton>
        <Collapse
          in={hydrationOpen}
          timeout="auto"
          unmountOnExit
        >
          <Paper
            elevation={10}
            style={{ margin: "10px", borderRadius: "8px" }}
          >
            <Box>
              {data.map((item) => (
                <Link
                  key={item.key}
                  to={`/details/${item.key}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemButton
                    onClick={() => handleHydrationClick(item.key)}
                  >
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </Link>
              ))}
              <Link
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton
                  onClick={onClose}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemText
                    primary="See all IVs"
                    style={{ textDecoration: "none" }}
                  />
                </ListItemButton>
              </Link>
            </Box>
          </Paper>
        </Collapse>

        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton onClick={onClose}>
            <ListItemText primary="IV Specialists" />
          </ListItemButton>
        </Link>
        <Link
          to="/About"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton onClick={onClose}>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton onClick={onClose}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </Link>
        <ListItemButton onClick={toggleLocations}>
          <ListItemText primary="Locations" />
          <ListItemIcon>
            {locationsOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemIcon>
        </ListItemButton>
        <Collapse
          in={locationsOpen}
          timeout="auto"
          unmountOnExit
        >
          <Paper
            elevation={10}
            style={{ margin: "10px", borderRadius: "8px" }}
          >
            <Box>
              <Link
                to="/locations/AllLocations"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton
                  onClick={() => handleLocationClick("/locations/AllLocations")}
                >
                  <ListItemText primary="All Locations" />
                </ListItemButton>
              </Link>
              {/* ... other location links like New York, California, etc ... */}
            </Box>
          </Paper>
        </Collapse>
        {/* ... other links ... */}
      </List>
    </Drawer>
  );
}

export default ResponsiveNavigation;

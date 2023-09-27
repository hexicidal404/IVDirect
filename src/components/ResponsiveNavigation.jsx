// ResponsiveNavigation.js
import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";

function ResponsiveNavigation({ isOpen, onClose }) {
  const [locationsOpen, setLocationsOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleLocations = () => {
    setLocationsOpen(!locationsOpen);
  };

  const handleLocationClick = (path) => {
    onClose();
    navigate(path, {
      state: { shouldScroll: path === "/locations/AllLocations" },
    });
  };
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
    >
      <List>
        <Link
          to="/Menu"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton onClick={onClose}>
            <ListItemText primary="Hydration Menu" />
          </ListItemButton>
        </Link>
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
          <List
            component="div"
            disablePadding
          >
            <Link
              to="/locations/AllLocations"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton onClick={() => handleLocationClick("/locations")}>
                <ListItemText primary="All Locations" />
              </ListItemButton>
            </Link>
            {/* ... other location links like New York, California, etc ... */}
          </List>
        </Collapse>
        {/* ... other links ... */}
      </List>
    </Drawer>
  );
}

export default ResponsiveNavigation;

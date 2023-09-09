// ResponsiveNavigation.js
import React from "react";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

function ResponsiveNavigation({ isOpen, onClose }) {
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
          to="/iv-specialists"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton onClick={onClose}>
            <ListItemText primary="IV Specialists" />
          </ListItemButton>
        </Link>
        <Link
          to="/about-us"
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
      </List>
    </Drawer>
  );
}

export default ResponsiveNavigation;

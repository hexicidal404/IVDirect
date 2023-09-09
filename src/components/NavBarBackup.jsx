import { useState } from "react";
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

import Logo from "./Logo";
import ResponsiveNavigation from "./ResponsiveNavigation";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = ({ isOpen, onClose }) => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo
              style={{
                height: "5rem",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            />
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                margin: "20px",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              to="/forms"
              style={{
                color: "white",
                textDecoration: "none",
                margin: "20px",
              }}
            >
              Forms
            </Link>
          </div>

          <IconButton
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

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

  const listItemStyle = {
    justifyContent: "flex-start",
    textAlign: "left",
    margin: "5px 0", // reduce margin
    padding: "10px 20px 10px 10px",
  };

  const drawerStyle = {
    width: "80vw", // reduce to 80% viewport width
    maxWidth: "80vw",
    top: "88px",
    paddingBottom: "0", // Remove the excessive padding at the bottom
    backgroundColor: "transparent",
    overflowY: "auto", // allow scrolling if needed
    display: "flex",
    flexDirection: "column",
  };

  const listContainerStyle = {
    flexGrow: 1,
    overflowY: "auto",
    backgroundColor: "#001f3f",
    position: "static",
    paddingRight: "25px",
    maxHeight: "calc(100vh - 88px)",
    paddingBottom: "10px", // small padding at the bottom for spacing
  };

  const boxStyle = {
    bgcolor: "white",
    borderRadius: "8px",
    margin: "5px 10px", // reduce side margin for better space usage
    padding: "10px",
  };

  const textStyle = {
    fontSize: "1.2rem", // Larger font size
    color: "white", // Text color set to white
  };

  return (
    <>
      <ArrowDropDownIcon onClick={onClose} />
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
        PaperProps={{ style: drawerStyle }}
        ModalProps={{
          BackdropProps: {
            style: {
              backgroundColor: "transparent",
            },
          },
        }}
      >
        <List style={listContainerStyle}>
          {/* this box controls the padding */}
          <Box style={boxStyle}>
            <ListItemButton
              onClick={() => setHydrationOpen(!hydrationOpen)}
              style={listItemStyle}
            >
              <ListItemText
                primary="Hydration Menu"
                style={textStyle}
              />
              <ListItemIcon>
                {hydrationOpen ? (
                  <ArrowDropDownIcon sx={{ color: "white" }} />
                ) : (
                  <ArrowRightIcon sx={{ color: "white" }} />
                )}
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
                        onClick={() => {
                          navigate(`/details/${item.key}`);
                          onClose(); // Close the drawer
                        }}
                      >
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </Link>
                  ))}
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItemButton onClick={onClose}>
                      <ListItemText primary="Hydration Bags" />
                    </ListItemButton>
                  </Link>
                </Box>
              </Paper>
            </Collapse>
            <Link
              to="/Supplemental"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton
                onClick={onClose}
                style={listItemStyle}
              >
                <ListItemText primary="Supplemental Shots" />
              </ListItemButton>
            </Link>{" "}
            <Link
              to="/Ownership"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton
                onClick={onClose}
                style={listItemStyle}
              >
                <ListItemText primary="Ownership Opportunities" />
              </ListItemButton>
            </Link>{" "}
            <Link
              to="/locations/AllLocations"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton
                onClick={onClose}
                style={listItemStyle}
              >
                <ListItemText primary="Locations" />
              </ListItemButton>
            </Link>
            <Link
              to="/About"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton
                onClick={onClose}
                style={listItemStyle}
              >
                <ListItemText primary="About Us" />
              </ListItemButton>
            </Link>
            <Link
              to="/Contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton
                onClick={onClose}
                style={listItemStyle}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>
            </Link>
            {/* <ListItemButton
              onClick={() => setLocationsOpen(!locationsOpen)}
              style={listItemStyle}
            >
              <ListItemText primary="Locations" />
              <ListItemIcon>
                {locationsOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              </ListItemIcon>
            </ListItemButton> */}
            {/* <Collapse
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
                      onClick={() => {
                        navigate("/locations/AllLocations");
                        onClose(); // Close the drawer
                      }}
                    >
                      <ListItemText primary="All Locations" />
                    </ListItemButton>
                  </Link>
                </Box>
              </Paper>
            </Collapse> */}
          </Box>
        </List>
      </Drawer>
    </>
  );
}

export default ResponsiveNavigation;

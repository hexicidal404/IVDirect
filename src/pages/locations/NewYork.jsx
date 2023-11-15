import React from "react";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
  Paper,
  Container,
  Avatar,
  useTheme,
  useMediaQuery,
  Grid,
  Button,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Logo from "../../components/Logo";
import IvIcon from "../../components/IvIcon";
import { useNavigate, useLocation } from "react-router-dom";

import UpcomingLocations from "./UpcomingLocations";

export default function NewYork() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();

  // Define New York-specific styles and data
  const avatarStyle = {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: theme.spacing(2),
  };

  const doctorCardStyle = {
    p: theme.spacing(3),
    my: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    textAlign: "left",
  };

  // Update upcoming locations as per New York context
  const upcomingLocations = [
    // ... (Updated Locations)
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: theme.spacing(6),
        px: matches ? theme.spacing(6) : theme.spacing(2),
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
      >
        Welcome to IV Direct New York
      </Typography>

      <Typography
        variant="subtitle1"
        color="textSecondary"
        paragraph
      >
        Experience premier IV treatments in the bustling heart of New York. Our
        therapies are tailored for the city's diverse, fast-paced lifestyle.
      </Typography>
      <Paper
        sx={{
          ...doctorCardStyle,
          display: "flex", // Make the Paper a flex container
          flexDirection: "column", // Stack children vertically
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          style={{ height: "50%" }}
        >
          {/* Set the height of the icon's grid to be 50% of its parent Paper component */}
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              alignItems: "center", // This will center the icon vertically in its 50% height container
              justifyContent: "center", // This will center the icon horizontally
              height: "100%", // The height here refers to the height of this Grid item, which is 50% of the Paper due to the container's style
            }}
          >
            <IvIcon sx={{ transform: "translateY(-50%)" }} />{" "}
            {/* Vertically center the icon */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
            >
              Dr. Shakira Fulkerson
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              gutterBottom
            >
              ACNP-BC, DNP - Hydration Specialist, Nurse Practitioner
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
            >
              Contact Our New York Team
            </Typography>
            <Box
              display="flex"
              gap={2}
              mb={2}
            >
              <MailOutlineIcon />
              <Typography variant="body1">
                <Link
                  href="mailto:Shakira@IV.Direct"
                  underline="hover"
                  color="inherit"
                >
                  Shakira@IV.Direct
                </Link>
              </Typography>
            </Box>
            <Box
              display="flex"
              gap={2}
              alignItems="center"
            >
              <Link
                href="tel:+6462704824"
                color="inherit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <PhoneIcon />
                <Typography
                  variant="body1"
                  style={{ marginLeft: theme.spacing(1.8) }}
                >
                  626-270-4824
                </Typography>
              </Link>
            </Box>

            <Button
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <UpcomingLocations
        upcomingLocations={upcomingLocations}
      ></UpcomingLocations>

      <Typography
        variant="h6"
        gutterBottom
      >
        Why New Yorkers Choose Us:
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="City Life Energizer"
            secondary="IV treatments designed to keep up with the energy of the city that never sleeps."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Arts and Culture Boost"
            secondary="Stay refreshed and inspired, whether visiting galleries in Chelsea or Broadway shows."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Wall Street Warrior"
            secondary="Specialized IV solutions for the high-stakes, fast-paced finance professionals."
          />
        </ListItem>
      </List>

      <Typography
        variant="subtitle1"
        gutterBottom
      >
        "New York's dynamic rhythm calls for unique wellness solutions. We're
        here to deliver them all year round."
      </Typography>
    </Container>
  );
}

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
import IvIcon from "../../components/IvIcon";

import { useNavigate, useLocation } from "react-router-dom";

import UpcomingLocations from "./UpcomingLocations";

export default function Miami() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const navigate = useNavigate();

  // Styles
  const containerStyle = {
    py: theme.spacing(6), // vertical padding
    px: matches ? theme.spacing(6) : theme.spacing(2), // responsive horizontal padding
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
  };

  const paperStyle = {
    p: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[10],
    textAlign: "center", // Center align the text for a cleaner look
    mb: theme.spacing(4), // margin bottom for separation from next content
  };

  const doctorCardStyle = {
    p: theme.spacing(3),
    my: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    textAlign: "left", // Align text to the left for the card content
  };

  const upcomingLocations = [
    {
      name: "West Palm Beach",
      opening: "February, 2024",
      description:
        "Indulge in the ultimate relaxation and rehydration experience in West Palm Beach, where sun and sea meet health and hydration. Our services are tailored to enhance your seaside leisure with revitalizing IV therapy.",
      link: "/locations/westpalmbeach",
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={containerStyle}
    >
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
      >
        Welcome to IV Direct Miami
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        component="h2"
      >
        Mobile Only
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        paragraph
      >
        Experience unparalleled wellness treatments tailored to the Miami
        lifestyle. Revitalize and rehydrate with our premium IV services,
        perfect for Miami's dynamic pace.
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
              Brandon Centeno
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              gutterBottom
            >
              EMT - Hydration Specialist
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
            >
              Contact Our Miami Team
            </Typography>
            <Box
              display="flex"
              gap={2}
              mb={2}
            >
              <MailOutlineIcon />
              <Typography variant="body1">
                <Link
                  href="mailto:Brandon@IV.Direct"
                  underline="hover"
                  color="inherit"
                >
                  Brandon@IV.Direct
                </Link>
              </Typography>
            </Box>
            <Box
              display="flex"
              gap={2}
              alignItems="center"
            >
              <Link
                href="tel:+14079602200"
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
                  305-776-3001
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
        Why Floridians Choose Us:
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="Tropical Treatments"
            secondary="From the avid beach-goer to those enjoying the nightlife, our drips are tailor-made for Florida's unique vibe."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Statewide Service"
            secondary="From Miami to Orlando, Jacksonville to Tampa, our mobile IV units are ready to serve you."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Masters of Coastal Wellness"
            secondary="We know what it means to live by the coast, and our treatments ensure you make the most of it."
          />
        </ListItem>
      </List>

      <Typography
        variant="h6"
        gutterBottom
      >
        Our Florida Favorites:
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="Beach Breeze Boost"
            secondary="Stay hydrated under the sun."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Sunset Soothe"
            secondary="Relax and rejuvenate after a day at the beach."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Everglades Energizer"
            secondary="For those adventurous swamp tours and outdoor excursions."
          />
        </ListItem>
      </List>

      <Typography
        variant="subtitle1"
        gutterBottom
      >
        "With Florida's Year-Round Sunshine, We Provide Year-Round Wellness. IV
        Specialists are here for you."
      </Typography>
    </Container>
  );
}

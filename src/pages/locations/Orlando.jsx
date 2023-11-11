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

import UpcomingLocations from "./UpcomingLocations";
import { useNavigate } from "react-router-dom";

export default function Orlando() {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  // Define Orlando-specific styles and data
  const avatarStyle = {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: theme.spacing(2),
  };

  const doctorCardStyle = {
    p: theme.spacing(3),
    my: theme.spacing(4), // margin top for spacing from previous content
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    textAlign: "left", // Align text to the left for the card content
  };

  const orlandoPhoneNumber = "(407) 123-4567"; // Example phone number for Orlando

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
        Welcome to IV Direct Orlando
      </Typography>

      <Typography
        variant="subtitle1"
        color="textSecondary"
        paragraph
      >
        Discover wellness and vitality in Orlando, the city of fun and
        excitement. Our IV hydration treatments cater to the adventurers in the
        theme park capital of the world, providing a perfect pick-me-up for
        those on the go.
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
            <IvIcon sx={{ transform: "translateY(-50%)" }} />
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
              Dr. Alberto Rivera
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              gutterBottom
            >
              MD - Hydration Specialist
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
            >
              Contact Our Orlando Team
            </Typography>
            <Box
              display="flex"
              gap={2}
              mb={2}
            >
              <MailOutlineIcon />
              <Typography variant="body1">
                <Link
                  href="mailto:dralberto@iv.direct"
                  underline="hover"
                  color="inherit"
                >
                  DrAlberto@IV.Direct
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
                  407-960-2200
                </Typography>
              </Link>
            </Box>
            <Box
              display="flex"
              gap={2}
              mt={2}
            >
              <LocationOnIcon />
              <Typography variant="body1">
                <Link
                  href="https://www.google.com/maps/place/6236+Kingspointe+Pkwy+%2306,+Orlando,+FL+32819/@28.4525126,-81.4378589,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77e87c939aa9b:0x28b0e14fa4e3617!8m2!3d28.4525126!4d-81.4378589?entry=ttu"
                  underline="hover"
                  color="inherit"
                >
                  6236 Kingspointe Pkwy Ste 6, Orlando, FL 32819
                </Link>
              </Typography>
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
        Why Orlando Chooses Us:
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="Adventure Recovery"
            secondary="Recharge with our post-park hydration therapies designed to soothe and revitalize."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Conference Care"
            secondary="Stay focused and alert during events with our specialized IV formulas."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Family Wellness"
            secondary="Ensure your family stays well-hydrated and full of energy during your Orlando stay."
          />
        </ListItem>
      </List>

      <Typography
        variant="subtitle1"
        gutterBottom
      >
        "Orlando's premier source for hydration and wellness, keeping the magic
        alive all year round."
      </Typography>
    </Container>
  );
}

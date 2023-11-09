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
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import IvIcon from "../../components/IvIcon";

export default function Miami() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

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
    my: theme.spacing(4), // margin top for spacing from previous content
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    textAlign: "left", // Align text to the left for the card content
  };

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
        Welcome to IV Direct Miami - Mobile Only
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
              Dr. Brandon Centeno
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              gutterBottom
            >
              ACNP-BC, DNP - EMT - Hydration Specialist
            </Typography>
            <Typography
              variant="body1"
              paragraph
            >
              Dr. Centeno is an expert in IV therapy, dedicated to helping both
              visitors and locals in Orlando. Whether enjoying the theme parks
              or participating in events, he ensures guests stay refreshed and
              full of vigor.
            </Typography>
            <Typography
              variant="body1"
              paragraph
            >
              With personalized care and an understanding of the demanding
              Florida climate, Dr. Centeno provides therapies that promise
              rejuvenation for those seeking to maintain their best health while
              taking on the city's myriad of activities.
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
            >
              <PhoneIcon />
              <Typography variant="body1">407-960-2200</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
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

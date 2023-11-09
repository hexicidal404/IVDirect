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
import Logo from "../../components/Logo";

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

  const avatarStyle = {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: theme.spacing(2),
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
        Welcome to IV Direct Miami
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
      <Paper sx={doctorCardStyle}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={4}
          >
            <Box
              display="flex"
              justifyContent="center"
            >
              <Avatar
                alt="Doctor's Name"
                src={Logo} // Replace with path to doctor's image
                sx={avatarStyle}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
            >
              Dr. Brandon Centeno, MD - Hydration Specialist
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

      <Divider style={{ margin: "20px 0" }} />

      <Typography
        variant="h6"
        gutterBottom
      >
        Contact Our Florida Team
      </Typography>
      <Divider sx={{ my: 4 }} />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mb={2}
      >
        <MailOutlineIcon />
        <Typography variant="body1">
          <Link
            href="mailto:miami@ivspecialists.com"
            underline="hover"
            color="inherit"
          >
            miami@ivspecialists.com
          </Link>
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <PhoneIcon />
        <Typography variant="body1">305-123-4567</Typography>
      </Box>
    </Container>
  );
}

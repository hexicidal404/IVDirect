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

export default function SanFrancisco() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  // Define San Francisco-specific styles and data
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

  const sanFranciscoPhoneNumber = "(415) 123-4567"; // Example phone number for San Francisco

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
        Welcome to IV Direct San Francisco
      </Typography>

      <Typography
        variant="subtitle1"
        color="textSecondary"
        paragraph
      >
        Elevate your wellness with our tailored IV treatments in the heart of
        San Francisco. Our hydration therapies are perfect for the tech-savvy,
        the outdoor enthusiasts, and everyone in between.
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
              Dr. Shakira Fulkerson, MD - Hydration Specialist
            </Typography>
            <Typography
              variant="body1"
              paragraph
            >
              As a seasoned expert in IV therapy, Dr. Fulkerson assists both
              visitors and residents of Orlando with staying well-hydrated and
              full of energy. Her practice is particularly valued by those
              seeking to enjoy Orlando's world-renowned theme parks and by
              professionals needing to stay sharp for conferences.
            </Typography>
            <Typography
              variant="body1"
              paragraph
            >
              Dr. Fulkerson is dedicated to providing swift and effective
              hydration solutions, enabling her patients to make the most of
              their time in the city, whether for work or play.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Typography
        variant="h6"
        gutterBottom
      >
        Why San Franciscans Choose Us:
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="Tech Industry Boost"
            secondary="Specially formulated IV therapies to support the rigorous demands of tech professionals."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Outdoor Adventure Recovery"
            secondary="Recharge after biking the Golden Gate Bridge or hiking Twin Peaks."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Foggy Day Formula"
            secondary="Our IV solutions can help you stay clear-headed during the infamous San Francisco fog."
          />
        </ListItem>
      </List>

      <Typography
        variant="subtitle1"
        gutterBottom
      >
        "San Francisco's unique charm requires unique wellness solutions. We're
        here to provide them year-round."
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h6"
        gutterBottom
      >
        Contact Our San Francisco Team
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mb={2}
      >
        <MailOutlineIcon color="secondary" />
        <Typography variant="body1">
          <Link
            href="mailto:sanfrancisco@ivspecialists.com"
            underline="hover"
            color="inherit"
          >
            sanfrancisco@ivspecialists.com
          </Link>
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <PhoneIcon color="secondary" />
        <Typography variant="body1">{sanFranciscoPhoneNumber}</Typography>
      </Box>
    </Container>
  );
}

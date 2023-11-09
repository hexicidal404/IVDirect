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

export default function Orlando() {
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
              Dr. Alberto Rivera, MD - Hydration Specialist
            </Typography>
            <Typography
              variant="body1"
              paragraph
            >
              Dr. Rivera is renowned for his expertise in IV therapy, assisting
              Orlando's locals and visitors. His hydration treatments are
              tailored to combat the exhaustive heat and packed schedules
              associated with Orlando's theme parks and event spaces.
            </Typography>
            <Typography
              variant="body1"
              paragraph
            >
              He provides fast and effective recovery solutions, perfect for
              those who've spent the day adventuring across Orlando or need a
              wellness boost after business meetings and conventions.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

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

      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h6"
        gutterBottom
      >
        Contact Our Orlando Team
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
            href="mailto:orlando@ivspecialists.com"
            underline="hover"
            color="inherit"
          >
            orlando@ivspecialists.com
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
        <Typography variant="body1">{orlandoPhoneNumber}</Typography>
      </Box>
    </Container>
  );
}

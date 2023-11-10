import React, { useEffect } from "react";
import { Typography, Grid, Button, Paper, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useScroll } from "../../components/ScrollContext";
import { Link as RouterLink } from "react-router-dom"; // Rename to avoid conflict with MUI Link
import { useTheme } from "@mui/material/styles";

export default function UpcomingLocations({ upcomingLocations }) {
  const { AllLocationsRef } = useScroll();
  const location = useLocation();
  const theme = useTheme();

  // Mock upcoming locations data

  useEffect(() => {
    // Effect for scrolling to the ref'd location if needed
  }, [location, AllLocationsRef]);

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 6, mb: 6 }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
      >
        Upcoming Locations
      </Typography>
      <Grid
        container
        spacing={3}
      >
        {upcomingLocations.map((upcomingLocation, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <Paper
              elevation={3}
              sx={{
                p: theme.spacing(3),
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Distribute space between items
                height: "100%", // Fill container height
                borderRadius: "12px",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
              >
                {upcomingLocation.name}
              </Typography>{" "}
              <Typography
                variant="body2"
                paragraph
                sx={{ fontWeight: 600, color: "#283891" }} // Made it bold
              >
                Grand Opening: {upcomingLocation.opening}
              </Typography>
              <Typography
                variant="body1"
                paragraph
              >
                {upcomingLocation.description}
              </Typography>
              {/* <RouterLink
                to={upcomingLocation.link}
                style={{ textDecoration: "none" }}
              > */}
              <Button
                variant="contained"
                disabled
              >
                Coming Soon!
              </Button>
              {/* </RouterLink> */}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

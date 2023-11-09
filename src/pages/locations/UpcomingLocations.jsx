import React, { useEffect } from "react";
import { Typography, Grid, Button, Paper, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useScroll } from "../../components/ScrollContext";
import { Link as RouterLink } from "react-router-dom"; // Rename to avoid conflict with MUI Link
import { useTheme } from "@mui/material/styles";

export default function UpcomingLocations() {
  const { AllLocationsRef } = useScroll();
  const location = useLocation();
  const theme = useTheme();

  // Mock upcoming locations data
  const upcomingLocations = [
    {
      name: "New York City",
      opening: "March, 2024",
      description:
        "Recharge in the city that never sleeps. Our New York City location will offer customized IV hydration to support the high-energy lifestyle of the urban dwellers and the relentless hustle of the metropolis.",
      link: "/locations/newyorkcity",
    },
    {
      name: "Cleveland",
      opening: "May, 2024",
      description:
        "Revitalize in the heart of the Midwest. Cleveland's upcoming IV Direct site aims to cater to the wellness needs of the Rock and Roll capital, ensuring you're concert-ready and resilient year-round.",
      link: "/locations/cleveland",
    },
    {
      name: "Jersey City",
      opening: "March, 2024",
      description:
        "Embrace wellness across the Hudson with Jersey City's dedicated IV Direct center. Perfect for professionals and families seeking balance in a fast-paced environment.",
      link: "/locations/jerseycity",
    },
    {
      name: "West Palm Beach",
      opening: "February, 2024",
      description:
        "Indulge in the ultimate relaxation and rehydration experience in West Palm Beach, where sun and sea meet health and hydration. Our services are tailored to enhance your seaside leisure with revitalizing IV therapy.",
      link: "/locations/westpalmbeach",
    },
    {
      name: "Los Angeles",
      opening: "May, 2024",
      description:
        "Stay on top of your game in the City of Angels. Our Los Angeles location will provide hydration therapies designed for the stars, supporting the dynamic needs of LA's active and entertainment-focused community.",
      link: "/locations/losangeles",
    },
    {
      name: "West Hollywood",
      opening: "May, 2024",
      description:
        "Elevate your wellness routine in West Hollywood with our bespoke IV Direct treatments, crafted to suit the lifestyle of this iconic and trendsetting neighborhood.",
      link: "/locations/westhollywood",
    },
  ];

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

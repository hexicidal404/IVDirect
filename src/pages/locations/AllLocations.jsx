import { useEffect } from "react";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
  Grid,
  Button,
  Paper,
  Container,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { useLocation } from "react-router-dom";
import { useScroll } from "../../components/ScrollContext";
import { Link as RouterLink } from "react-router-dom"; // Rename to avoid conflict with MUI Link
import { useTheme } from "@mui/material/styles";
import ImageComponent from "../../components/Logo";
import UpcomingLocations from "./UpcomingLocations";

function AllLocations() {
  const { AllLocationsRef } = useScroll();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.shouldScroll && AllLocationsRef.current) {
      // Get the position of the contact form
      const topPosition =
        AllLocationsRef.current.getBoundingClientRect().top + window.scrollY;

      // Calculate offset to center it on the page (half of viewport height minus half of element height)
      const offset =
        window.innerHeight / 2 - AllLocationsRef.current.clientHeight / 2;

      // Scroll to the calculated position
      window.scrollTo({ top: topPosition - offset, behavior: "smooth" });
    }
  }, [location]);

  const locations = [
    {
      name: "Miami, Florida",
      subtext: "24 hour service",
      description:
        "Soak up the sun and rejuvenate in Miami's tropical paradise. Our hydration therapies are perfect for the active beachgoer or the nightlife enthusiast looking to refresh and rehydrate. Our treatments help keep you hydrated and energized in the heat of Florida.",
      link: "/locations/Miami",
    },
    {
      name: "New York City, New York",
      description:
        "Discover optimal well-being from the sun-drenched coasts to the vibrant tech valleys. With California's diverse lifestyle, our IV hydration therapies are designed to match your Californian spirit.",
      link: "/locations/NewYork",
    },
    {
      name: "Orlando, Florida",
      description:
        "Elevate your wellness amid Florida's sun, sea, and sand. As you soak up the sunshine, our bespoke IV hydration therapies ensure you feel revitalized and refreshed.",
      link: "/locations/Orlando",
    },
    {
      name: "San Francisco, California",
      description:
        "Discover optimal well-being from the sun-drenched coasts to the vibrant tech valleys. With California's diverse lifestyle, our IV hydration therapies are designed to match your Californian spirit.",
      link: "/locations/SanFran",
    },
  ];

  const services = [
    {
      title: "NAD+ IV",
      description: "Cellular rejuvenation therapies",
    },
    {
      title: "Fitness and Recovery",
      description: "Optimizes workout performance and accelerates recovery.",
    },
    {
      title: "Covid, Cold, and Flu",
      description: "Bolster the immune system against infections",
    },
    // ... Add more services as needed
  ];

  const upcomingLocations = [
    {
      name: "New York City",
      opening: "February, 2024",
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
  ];

  const theme = useTheme();

  return (
    <div ref={AllLocationsRef}>
      <Container
        maxWidth="lg"
        sx={{ padding: { xs: 1, sm: theme.spacing(3) }, mt: 6, mb: 6 }}
      >
        <Paper
          style={{
            padding: "16px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          elevation={10}
        >
          <ImageComponent style={{ maxWidth: "100%" }} />
          <Typography
            variant="h4"
            gutterBottom
          >
            IV Direct: Global Reach, Local Touch
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            mt={4}
          >
            Our Locations
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ padding: "22px" }}
          >
            {locations.map((location, index) => (
              <Grid
                item
                xs={12}
                md={6} // Adjusts the size for medium screens
                lg={3} // Ensures 4 items per row on large screens
                key={index}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    minHeight: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "0.3s",
                    borderRadius: "12px",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: theme.shadows[5],
                    },
                  }}
                >
                  <Typography variant="h6">{location.name}</Typography>
                  <Typography
                    variant="body1"
                    sx={{ pt: 1 }}
                  >
                    {location.subtext}
                  </Typography>
                  {/* <Typography paragraph>{location.description}</Typography> */}
                  <RouterLink
                    to={location.link}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      Contact Information
                    </Button>
                  </RouterLink>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <UpcomingLocations
            upcomingLocations={upcomingLocations}
          ></UpcomingLocations>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ pb: 2 }}
          >
            Highlights of Our Services
          </Typography>
          <Grid
            container
            spacing={3}
          >
            {services.map((service, index) => (
              <Grid
                item
                xs={12}
                md={4}
                key={index}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    minHeight: 150,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "0.3s",
                    borderRadius: "12px",
                    "&:hover": {
                      transform: "scale(1.03)", // subtle grow effect on hover
                      boxShadow: theme.shadows[5],
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body1">{service.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
export default AllLocations;

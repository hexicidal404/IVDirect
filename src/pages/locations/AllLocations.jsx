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
      description:
        "Soak up the sun and rejuvenate in Miami's tropical paradise. Our hydration therapies are perfect for the active beachgoer or the nightlife enthusiast looking to refresh and rehydrate. Our treatments help keep you hydrated and energized in the heat of Florida.",
      link: "/locations/Miami",
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
            spacing={3}
          >
            {locations.map((location, index) => (
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
                    minHeight: 275,
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
                  <Typography variant="h6">{location.name}</Typography>
                  <Typography paragraph>{location.description}</Typography>
                  <RouterLink
                    to={location.link}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                    >
                      Learn More
                    </Button>
                  </RouterLink>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 5 }} />

          <UpcomingLocations></UpcomingLocations>
          <Divider sx={{ my: 5 }} />

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
          <Divider sx={{ my: 5 }} />
          <Typography
            variant="h5"
            gutterBottom
          >
            Get in Touch
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mb={2}
          >
            <MailOutlineIcon color="primary" />
            <Typography variant="body1">
              <Link
                href="mailto:info@IV.Direct"
                color="primary"
              >
                info@IV.Direct
              </Link>
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={2}
          >
            <PhoneIcon color="primary" />
            <Typography variant="body1">(800) 123-5678</Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
export default AllLocations;

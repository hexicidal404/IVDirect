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

function AllLocations() {
  const { AllLocationsRef } = useScroll();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.shouldScroll && AllLocationsRef.current) {
      AllLocationsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const locations = [
    {
      name: "New York",
      description:
        "Experience the epitome of wellness in the city that never sleeps. With New York's bustling lifestyle, ensure you're always on top of your game with our tailor-made IV hydration therapies.",
      link: "/locations/NewYork",
    },
    {
      name: "California",
      description:
        "Discover optimal well-being from the sun-drenched coasts to the vibrant tech valleys. With California's diverse lifestyle, our IV hydration therapies are designed to match your Californian spirit.",
      link: "/locations/California",
    },
    {
      name: "Florida",
      description:
        "Elevate your wellness amid Florida's sun, sea, and sand. As you soak up the sunshine, our bespoke IV hydration therapies ensure you feel revitalized and refreshed.",
      link: "/locations/Florida",
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
        sx={{ padding: { xs: 1, sm: theme.spacing(3) } }}
      >
        <Paper style={{ padding: "16px", borderRadius: "12px" }}>
          <Typography
            variant="h4"
            gutterBottom
          >
            IV Direct: Global Reach, Local Touch
          </Typography>
          <Typography
            variant="h5"
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
              </Grid>
            ))}
          </Grid>

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
                href="mailto:info@ivspecialists.com"
                color="primary"
              >
                info@iv.direct
              </Link>
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
          >
            <PhoneIcon color="primary" />
            <Typography variant="body1">(XXX) XXX-XXXX</Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
export default AllLocations;

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScroll } from "../../components/ScrollContext";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
  Grid,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

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
      description: "Experience wellness in the city that never sleeps.",
      link: "/locations/newyork", // this can be a link to the detailed New York page
    },
    // ... Add more locations as needed
  ];

  const services = [
    {
      title: "The City Energizer",
      description: "Keep up with the pace of city life.",
    },
    // ... Add more services as needed
  ];

  return (
    <div
      ref={AllLocationsRef}
      style={{ padding: "70px" }}
    >
      <Box p={3}>
        <Typography
          variant="h4"
          gutterBottom
        >
          IV Specialists: Global Reach, Local Touch
        </Typography>

        {/* Locations Overview */}
        <Typography
          variant="h5"
          gutterBottom
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
              <Link href={location.link}>Learn More</Link>
            </Grid>
          ))}
        </Grid>

        <Divider style={{ margin: "40px 0" }} />

        {/* Services Highlights */}
        <Typography
          variant="h5"
          gutterBottom
        >
          Highlights of Our Services
        </Typography>
        <List>
          {services.map((service, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={service.title}
                secondary={service.description}
              />
            </ListItem>
          ))}
        </List>

        <Divider style={{ margin: "40px 0" }} />

        {/* Contact Section */}
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
          mb={1}
        >
          <MailOutlineIcon />
          <Typography variant="body1">
            <Link
              sx={{ color: "black" }}
              href="mailto:info@ivspecialists.com"
            >
              info@ivspecialists.com
            </Link>
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <PhoneIcon />
          <Typography variant="body1">(XXX) XXX-XXXX</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default AllLocations;

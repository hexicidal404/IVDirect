import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScroll } from "../components/ScrollContext";

import {
  Typography,
  Divider,
  Box,
  Button,
  Paper,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Home() {
  const { homeMenuRef } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.shouldScroll && homeMenuRef.current) {
      const yOffset = -100;
      const y = homeMenuRef.current.getBoundingClientRect().top + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [location, homeMenuRef]);

  const handleButtonClick = () => {
    navigate("/menu");
  };

  const theme = useTheme();

  return (
    <Container
      component="div"
      sx={{ paddingTop: 0 }}
    >
      <Box p={3}>
        <Typography
          variant="h4"
          gutterBottom
        >
          IV Direct
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
        >
          Why Choose IV Specialists?
        </Typography>
        <Typography paragraph>
          Expert Formulations: Our seasoned pharmacists design each IV drip,
          ensuring it’s brimming with essential fluids, antioxidants, vitamins,
          and nutrients.
        </Typography>
        <Typography paragraph>
          Tailored for You: Choose from our curated list of treatments targeting
          migraines, dehydration, hangovers, and chronic pain or customize your
          own IV concoction.
        </Typography>
        <Typography paragraph>
          Direct to Your Doorstep: Why step out when wellness can come to you?
          Our exclusive mobile IV hydration units ensure you get rejuvenated at
          home, the office, or even a hotel.
        </Typography>
        <Box mb={3}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: theme.palette.primary[800],
              ":hover": {
                backgroundColor: theme.palette.primary[900],
              },
            }}
            size="large"
            onClick={handleButtonClick}
          >
            Learn More
          </Button>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Typography
          variant="h6"
          gutterBottom
        >
          Testimonials
        </Typography>
        {[
          {
            text: "Ever since I started using IV Specialists, I've felt more energetic, rejuvenated, and at my best. The convenience of having it delivered to my home is just the icing on the cake!",
            name: "John D., 32",
          },
          {
            text: "The Migraine Magic is truly magical. I've never felt such quick relief from my migraines before. Kudos to the IV Specialists team!",
            name: "Sophie R., 28",
          },
        ].map((testimonial, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{ p: 3, mb: 2 }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
            >
              "{testimonial.text}"
            </Typography>
            <Typography
              variant="subtitle2"
              align="right"
            >
              {testimonial.name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

export default Home;

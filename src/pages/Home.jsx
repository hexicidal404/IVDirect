import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import { useScroll } from "../components/ScrollContext";

import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";

// function Home({ homeMenuRef }) {
//   const location = useLocation();

//   useEffect(() => {
//     if (homeMenuRef.current) {
//       homeMenuRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []);

function Home() {
  const { homeMenuRef } = useScroll();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.shouldScroll && homeMenuRef.current) {
      homeMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div
      ref={homeMenuRef}
      style={{ paddingTop: "100px" }}
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

        <Button
          variant="contained"
          color="primary"
        >
          Learn More
        </Button>
        <Divider style={{ margin: "20px 0" }} />
        <Typography
          variant="h6"
          gutterBottom
        >
          Testimonials
        </Typography>
        <Box mb={2}>
          <Typography
            variant="subtitle1"
            gutterBottom
          >
            "Ever since I started using IV Specialists, I've felt more
            energetic, rejuvenated, and at my best. The convenience of having it
            delivered to my home is just the icing on the cake!"
          </Typography>
          <Typography
            variant="subtitle2"
            align="right"
          >
            John D., 32
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography
            variant="subtitle1"
            gutterBottom
          >
            "The Migraine Magic is truly magical. I've never felt such quick
            relief from my migraines before. Kudos to the IV Specialists team!"
          </Typography>
          <Typography
            variant="subtitle2"
            align="right"
          >
            Sophie R., 28
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Home;

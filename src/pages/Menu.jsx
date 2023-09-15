import React, { useRef, useEffect } from "react";
import CardGrid from "../components/CardGrid";
import { Container } from "@mui/material";
import { useScroll } from "../components/ScrollContext";
import { useLocation } from "react-router-dom";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";

function Menu({ dataArray }) {
  const { hydrationMenuRef } = useScroll();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.shouldScroll && hydrationMenuRef.current) {
      hydrationMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div
        ref={hydrationMenuRef}
        style={{ padding: "70px" }}
      >
        {/* <Typography
          variant="h6"
          gutterBottom
        >
          Our Signature Treatments
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Migraine Magic"
              secondary="Targeted relief for those debilitating headaches."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Hydration Hero"
              secondary="A cure for dehydration, ensuring you’re always fresh."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Hangover Healer"
              secondary="Revive from your late nights and feel alive again."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Pain Relief Potion"
              secondary="Tailored concoction for chronic pain relief."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Customize Your Drip"
              secondary="Got specific needs? Design your own IV mix."
            />
          </ListItem>
        </List> */}
        <Container sx={{ p: 2 }}>
          <CardGrid cards={dataArray} />
        </Container>
      </div>
    </>
  );
}

export default Menu;

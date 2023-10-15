import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScroll } from "./ScrollContext";

function DetailsPage({ dataArray }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const itemId = parseInt(id, 10);
  const item = dataArray.find((item) => item.key === itemId);

  const location = useLocation();
  const { DetailsRef } = useScroll();

  useEffect(() => {
    console.log(
      "Checking for scroll:",
      location.state?.shouldScrollToHydration,
      DetailsRef.current
    );
    if (location.state?.shouldScrollToHydration && DetailsRef.current) {
      console.log("Scrolling into view...");
      DetailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, DetailsRef]);

  if (!item) {
    return (
      <Container maxWidth="sm">
        <Typography
          variant="h5"
          align="center"
          color="error"
          gutterBottom
        >
          Item not found!
        </Typography>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="sm"
      ref={DetailsRef}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 2 }}
      >
        <Typography
          variant="h4"
          gutterBottom
        >
          {item.title}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          gutterBottom
        >
          {item.price}
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          {item.expandedContent}
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          mt={2}
        >
          Benefits:
        </Typography>
        <List>
          {item.benefits.map((benefit, index) => (
            <ListItem key={index}>{benefit}</ListItem>
          ))}
        </List>

        <Typography
          variant="h6"
          gutterBottom
          mt={2}
        >
          {item.ingredients && item.ingredients.length > 0
            ? "Ingredients:"
            : null}
        </Typography>
        <List sx={{ pl: 1 }}>
          {item.ingredients.map((ingredient, index) => (
            <ListItem
              key={index}
              sx={{
                fontSize: "0.8rem",
                py: 0.5,
              }}
            >
              {ingredient}
            </ListItem>
          ))}
        </List>

        <Box
          mt={4}
          display="flex"
          flexDirection="row"
          gap={2}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/menu")}
          >
            See Other Menu Items
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              navigate("/contact", { state: { packageId: item.key } })
            }
          >
            Contact Us
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default DetailsPage;

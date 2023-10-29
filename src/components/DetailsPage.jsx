import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  List,
  ListItem,
  Grid,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScroll } from "./ScrollContext";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

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
      maxWidth="lg" // Increase container width for desktop
      ref={DetailsRef}
      sx={{ p: 5 }}
    >
      <Grid
        container
        spacing={4}
        sx={{ display: "flex" }}
      >
        <Grid
          item
          md={6}
          lg={5} // adjust for large screens
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {item.imgLink && (
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                flex: 1,
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "white",
              }}
            >
              <img
                loading="lazy"
                src={item.imgLink}
                alt={item.title}
                style={{
                  maxWidth: "100%",
                  height: "88%", // Optional: Consider removing this if you don't want to stretch the image.
                  objectFit: "contain",
                }}
              />
            </Box>
          )}
        </Grid>
        <Grid
          item
          md={6}
          lg={7} // adjust for large screens
          sx={{ display: "flex", flexDirection: "column", height: "80%" }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: "12px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
            >
              {item.title}
            </Typography>
            {/* <Typography
              variant="h6"
              color="primary"
              gutterBottom
            >
              {item.price}
            </Typography> */}
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
                onClick={() => navigate("/")}
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default DetailsPage;

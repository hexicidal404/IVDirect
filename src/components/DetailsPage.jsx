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
  Hidden,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScroll } from "./ScrollContext";
import { useTheme } from "@mui/material/styles";
import ImageComponent from "./Logo";
import { red } from "@mui/material/colors";

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
      sx={{ py: 5 }}
    >
      <Paper
        elevation={12}
        sx={{ p: theme.spacing(3), borderRadius: "12px" }}
      >
        <Grid
          container
          spacing={theme.breakpoints.down("sm") ? 0 : 4}
          sx={{ display: "flex" }}
        >
          <Grid
            item
            md={6}
            lg={5} // adjust for large screens
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "-64px",
            }}
          >
            <Hidden mdUp>
              <Box
                display="flex"
                justifyContent="center" // Horizontal centering
                alignItems="center" // Vertical centering
              >
                <ImageComponent
                  style={{
                    maxWidth: "80%",
                  }}
                />
              </Box>
            </Hidden>

            {item.imgLink && (
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  flex: 1,
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "60px",
                }}
              >
                <img
                  loading="lazy"
                  src={item.imgLink}
                  alt={item.title}
                  style={{
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            )}
          </Grid>
          <Grid
            item
            md={6}
            lg={7}
            sx={{ display: "flex", flexDirection: "column", height: "80%" }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: "12px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Hidden smDown>
                <Box
                  display="flex"
                  justifyContent="center" // Horizontal centering
                  alignItems="center" // Vertical centering
                >
                  <ImageComponent
                    style={{
                      maxWidth: "80%",
                    }}
                  />
                </Box>
              </Hidden>
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
                  sx={{
                    backgroundColor: "#283891",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#172155 ", // Use the darker blue shade on hover
                      // If 'dark' is not available, manually specify a darker blue like '#001970'
                    },
                  }}
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
        </Grid>{" "}
      </Paper>
    </Container>
  );
}

export default DetailsPage;

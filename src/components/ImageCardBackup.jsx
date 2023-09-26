import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Paper,
  Button,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
// import Hands from "../images/hand.avif"; // Adjust the import path accordingly
import Kiwi from "../kiwi.jpg"; // Adjust the import path accordingly
import Logo from "./Logo";
import IvIcon from "./IvIcon";
import Box from "@mui/material/Box";
import water from "../water.jpg";
import ImageComponent from "./Logo";

function ImageCard() {
  const cloudName = "dcgh3ljwk"; // put into a key
  const publicId = "water_pwid1l";

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // 'sm' is for screen widths up to 768px

  const baseURL = "https://res.cloudinary.com/dcgh3ljwk/image/upload/";

  // Define transformations based on screen size
  let transformations = "";
  if (window.innerWidth <= 480) {
    transformations = "w_480/";
  } else if (window.innerWidth <= 768) {
    transformations = "w_768/";
  } else {
    transformations = "w_1440/"; // default to large size
  }

  // Construct the final URL
  const imageUrl = `${baseURL}${transformations}water_pwid1l.jpg`;

  return (
    <Container
      maxWidth={false}
      style={{
        maxWidth: "none",
        display: "flex",
        flexDirection: isSmallScreen ? "column-reverse" : "row",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: "1",
          overflow: "hidden",
          display: "flex", // Make this div a flex container
          alignItems: "center", // Vertically align items in the center
          justifyContent: "center", // Horizontally align items in the center
        }}
      >
        {/* <img
          src={Kiwi}
          alt="Your Image"
          style={{ width: "100%", height: "auto", borderRadius: "30px" }}
        /> */}
        <IvIcon
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
          }}
        />
      </div>
      <CardContent style={{ flex: "1" }}>
        <Typography variant="h3">IV Specialists</Typography>
        <Typography variant="h4">Mobile IV Medics</Typography>
        <Typography
          variant="body1"
          sx={{ whiteSpace: "pre-line" }}
        >
          Our pharmacists meticulously formulate each IV drip treatment,
          ensuring it's loaded with essential fluids, antioxidants, vitamins,
          medicines, and nutrients. These treatments are designed to address a
          range of common symptoms people face when they're not at their best.
        </Typography>

        <Typography
          variant="title"
          color="inherit"
          noWrap
        >
          &nbsp;
        </Typography>
        <Typography
          variant="body1"
          sx={{ whiteSpace: "pre-line" }}
        >
          What's more, we bring our IV hydration therapy straight to your
          doorstep! Our suite includes several IV drips tailored for various
          conditions like migraines, dehydration, hangovers, and chronic pain.
          Alternatively, you have the option to customize your own IV drip.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "16px" }}
        >
          Find Out More
        </Button>
      </CardContent>
    </Container>
  );
}

export default ImageCard;

import {
  CardContent,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Container,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useScroll } from "./ScrollContext";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";

function ImageCard() {
  const [isImageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 100); // a small delay to trigger the transition

    return () => clearTimeout(timer); // cleanup the timeout
  }, []);
  const navigate = useNavigate();

  const handleTypographyClick = (route) => {
    navigate(route, { state: { shouldScroll: true } });
  };

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
  // const imageUrl = `${baseURL}${transformations}water_pwid1l.jpg`;
  const imageUrl = `${baseURL}${transformations}water_pwid1l.jpg`;

  return (
    <Container
      maxWidth={false}
      style={{
        position: "relative",
        height: isSmallScreen ? "auto" : "100vh",
        paddingBottom: isSmallScreen ? "20px" : "200px",
        paddingLeft: isSmallScreen ? "10px" : undefined, // Reduced padding for small screens
        paddingRight: isSmallScreen ? "10px" : undefined, // Reduced padding for small screens
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: isSmallScreen ? "400px" : 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      ></Box>

      <Box
        display="flex"
        flexDirection={isSmallScreen ? "column" : "row"}
        height="100%"
        px={isSmallScreen ? 0 : undefined} // Removed horizontal padding for small screens
        py={0}
      >
        <Box
          flex={0.7}
          mb={isSmallScreen ? "50px" : "0"}
        >
          <img
            src="https://iv.direct/wp-content/uploads/sites/12/2023/08/IVDirect_Logo_PNG.png"
            alt="Your Image"
            onLoad={() => setImageLoaded(true)} // set image as loaded once it's loaded
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "30px",
              transform: isImageLoaded ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 1.2s ease-out",
            }}
          />
        </Box>

        <CardContent
          sx={{
            flex: "1",
            mb: isSmallScreen ? "10px" : 30, // Reduced bottom margin for small screens
            p: isSmallScreen ? 2 : 4, // Reduced padding for small screens
          }}
        >
          <Paper
            elevation={12}
            sx={{ p: isSmallScreen ? 2 : 4 }}
          >
            <Typography
              variant="h3"
              gutterBottom
            >
              IV Specialists
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              gutterBottom
            >
              Mobile IV Medics
            </Typography>
            <Typography
              variant="body1"
              sx={{ whiteSpace: "pre-line", my: 2 }}
            >
              Our pharmacists meticulously formulate each IV drip treatment,
              ensuring it's loaded with essential fluids, antioxidants,
              vitamins, medicines, and nutrients. These treatments are designed
              to address a range of common symptoms people face when they're not
              at their best.
            </Typography>
            <Typography
              variant="body1"
              sx={{ whiteSpace: "pre-line", my: 2 }}
            >
              What's more, we bring our IV hydration therapy straight to your
              doorstep! Our suite includes several IV drips tailored for various
              conditions like migraines, dehydration, hangovers, and chronic
              pain. Alternatively, you have the option to customize your own IV
              drip.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                width: "100%",
                backgroundColor: "#283891",
                color: "white",
              }}
              onClick={() => handleTypographyClick("/Menu")}
            >
              Find Out More
            </Button>
          </Paper>
        </CardContent>
      </Box>
    </Container>
  );
}
export default ImageCard;

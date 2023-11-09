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

import ServiceBoxGrid from "./ServiceBoxGrid";

import Box from "@mui/material/Box";

function ImageCard({ onButtonClick }) {
  const [isImageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 25); // a small delay to trigger the transition

    return () => clearTimeout(timer); // cleanup the timeout
  }, []);
  const navigate = useNavigate();

  const handleTypographyClick = (route) => {
    navigate(route, { state: { shouldScroll: true } });
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // 'sm' is for screen widths up to 768px

  const baseURL = "https://res.cloudinary.com/dcgh3ljwk/image/upload/q_auto/";

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
  const imageUrl = `${baseURL}${transformations}water_pwid1l.webp`;

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
        <Box flex={0.7}>
          <img
            loading="preload"
            src="https://res.cloudinary.com/dcgh3ljwk/image/upload/v1694161553/IVDirect_oed1qg.webp"
            alt="IV Direct Logo"
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
            sx={{ p: isSmallScreen ? 2 : 4, borderRadius: "12px" }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 600, color: "#283891" }} // Made it bold
            >
              IV Specialists
            </Typography>
            <Typography
              variant="h4"
              color="textSecondary"
              gutterBottom
              sx={{ fontWeight: 500 }} // Semi-bold for better contrast
            >
              Hydration Specialists
            </Typography>
            <Typography
              variant="body1"
              sx={{ whiteSpace: "pre-line", my: 2, fontWeight: 400 }}
            >
              At IV Direct, we are fervently dedicated to cultivating the
              advantages of intravenous nutrient delivery over oral ingestion.
              When vitamins and other essential nutrients undergo the digestive
              process, their potency diminishes before entering the bloodstream.
              Opting for intravenous administration, you're likely to experience
              more immediate and sustained effects.
            </Typography>
            <Typography
              variant="body1"
              sx={{ whiteSpace: "pre-line", my: 2, fontWeight: 400 }}
            >
              Our skilled and patient-focused Hydration Specialists will
              collaborate with you to understand and address your specific
              needs. They will provide personalized IV therapy directly to you
              in the convenience and confidentiality of your chosen location.
            </Typography>
            {/* <Button
              variant="contained"
              sx={{
                mt: 3,
                width: "100%",
                color: "white",

                backgroundColor: theme.palette.primary[800],
                ":hover": {
                  backgroundColor: theme.palette.primary[900],
                },
              }}
              onClick={() => handleTypographyClick("/")}
            >
              Find Out More
            </Button> */}

            <ServiceBoxGrid onButtonClick={onButtonClick} />
          </Paper>
        </CardContent>
      </Box>
    </Container>
  );
}
export default ImageCard;

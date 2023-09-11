// // ImageCard.js

// import React from "react";
// import { Card, CardContent, Typography, Paper } from "@mui/material";
// import Hands from "../images/hand.avif";
// function ImageCard() {
//   const containerStyles = {
//     position: "relative", // Make the container relative for absolute positioning
//     width: "50vw", // Set the width to 75% of the viewport width
//     height: "50vh", // Set the height to 75% of the viewport height
//     borderRadius: "30px",
//   };

//   const imageStyles = {
//     width: "100%", // Ensure the image covers the entire container
//     height: "100%", // Ensure the image covers the entire container
//     objectFit: "", // Ensure the image covers the entire container
//     position: "", // Position the image absolutely
//     zIndex: -1, // Set a lower z-index for the image
//     borderRadius: "30px",
//   };

//   const textCardStyles = {
//     position: "absolute", // Position the text card absolutely
//     top: "15%", // Offset from the top
//     left: "50%", // Offset from the left
//     zIndex: 1, // Set a higher z-index for the text card
//   };

//   return (
//     <Card style={containerStyles}>
//       <img
//         src={Hands}
//         alt="Your Image"
//         style={imageStyles}
//       />
//       <CardContent style={textCardStyles}>
//         {/* Text Card */}
//         <Paper
//           elevation={3}
//           style={{ padding: "20px" }}
//           sx={{ borderRadius: "15px" }}
//         >
//           <Typography
//             variant="h5"
//             component="div"
//           >
//             Card Title
//           </Typography>
//           <Typography variant="body2">
//             Choose the IV Drip for Your Symptoms Each of our IV drip treatments
//             is specially crafted by our pharmacist and chock full of fluids,
//             antioxidants, vitamins, medicines, and nutrients to help tackle a
//             number of common symptoms people experience when they aren’t feeling
//             100%. Best of all, we come to you for at-home IV fluids! The result
//             of our IV hydration therapy packages — you end up feeling great. Our
//             exclusive Mobile IV Medics (MIVM) Cocktail is our bestseller. This
//             all-inclusive IV package gives you some of everything we offer and
//             takes care of all your hydration needs. We have a variety of IV
//             drips to help alleviate an array of symptoms and conditions such as
//             migraines, dehydration, hangover, and chronic pain, or you can
//             create your own custom IV drip.{" "}
//           </Typography>
//         </Paper>
//       </CardContent>
//     </Card>
//   );
// }

// export default ImageCard;

// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Divider,
//   Paper,
//   Button,
//   useMediaQuery,
//   useTheme,
//   Container,
// } from "@mui/material";
// // import Hands from "../images/hand.avif"; // Adjust the import path accordingly
// import Kiwi from "../kiwi.jpg"; // Adjust the import path accordingly
// import Logo from "./Logo";
// import IvIcon from "./IvIcon";
// import Box from "@mui/material/Box";
// import water from "../water.jpg";
// import ImageComponent from "./Logo";

// function ImageCard() {
//   const cloudName = "dcgh3ljwk"; // put into a key
//   const publicId = "water_pwid1l";

//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // 'sm' is for screen widths up to 768px

//   const baseURL = "https://res.cloudinary.com/dcgh3ljwk/image/upload/";

//   // Define transformations based on screen size
//   let transformations = "";
//   if (window.innerWidth <= 480) {
//     transformations = "w_480/";
//   } else if (window.innerWidth <= 768) {
//     transformations = "w_768/";
//   } else {
//     transformations = "w_1440/"; // default to large size
//   }

//   // Construct the final URL
//   // const imageUrl = `${baseURL}${transformations}water_pwid1l.jpg`;
//   const imageUrl = `${baseURL}${transformations}water_pwid1l.jpg`;

//   return (
//     <Container
//       maxWidth={false}
//       style={{
//         maxWidth: "none",
//         display: "flex",
//         flexDirection: isSmallScreen ? "column-reverse" : "row",
//         backgroundImage: `url(${imageUrl})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         height: "100vh",
//         width: "100%",
//       }}
//     >
//       <div style={{ flex: 0.7 }}>
//         <img
//           src="https://iv.direct/wp-content/uploads/sites/12/2023/08/IVDirect_Logo_PNG.png"
//           alt="Your Image"
//           style={{ width: "100%", height: "auto", borderRadius: "30px" }}
//         />

//         {/* <IvIcon
//           style={{
//             alignItems: "center",
//             justifyContent: "center",
//             width: "auto",
//           }}
//         /> */}
//       </div>
//       <CardContent style={{ flex: "1" }}>
//         <Typography variant="h3">IV Specialists</Typography>
//         <Typography variant="h4">Mobile IV Medics</Typography>
//         <Typography
//           variant="body1"
//           sx={{ whiteSpace: "pre-line" }}
//         >
//           Our pharmacists meticulously formulate each IV drip treatment,
//           ensuring it's loaded with essential fluids, antioxidants, vitamins,
//           medicines, and nutrients. These treatments are designed to address a
//           range of common symptoms people face when they're not at their best.
//         </Typography>

//         <Typography
//           variant="title"
//           color="inherit"
//           noWrap
//         >
//           &nbsp;
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{ whiteSpace: "pre-line" }}
//         >
//           What's more, we bring our IV hydration therapy straight to your
//           doorstep! Our suite includes several IV drips tailored for various
//           conditions like migraines, dehydration, hangovers, and chronic pain.
//           Alternatively, you have the option to customize your own IV drip.
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           style={{ marginTop: "16px" }}
//         >
//           Find Out More
//         </Button>
//       </CardContent>
//     </Container>
//   );
// }

// export default ImageCard;
// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   useMediaQuery,
//   useTheme,
//   Container,
// } from "@mui/material";
// import Box from "@mui/material/Box";

// function ImageCard() {
//   const cloudName = "dcgh3ljwk"; // put into a key
//   const publicId = "water_pwid1l";

//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // 'sm' is for screen widths up to 768px

//   const baseURL = "https://res.cloudinary.com/dcgh3ljwk/image/upload/";

//   // Define transformations based on screen size
//   let transformations = "";
//   if (window.innerWidth <= 480) {
//     transformations = "w_480/";
//   } else if (window.innerWidth <= 768) {
//     transformations = "w_768/";
//   } else {
//     transformations = "w_1440/"; // default to large size
//   }

//   // Construct the final URL
//   // const imageUrl = `${baseURL}${transformations}water_pwid1l.jpg`;
//   const imageUrl = `${baseURL}${transformations}water_pwid1l.jpg`;

//   return (
//     <Container
//       maxWidth={false}
//       style={{
//         position: "relative",
//         height: isSmallScreen ? "auto" : "100vh",
//         paddingBottom: "200px",
//       }}
//     >
//       <Box
//         style={{
//           position: "absolute",
//           top: isSmallScreen ? "400px" : 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url(${imageUrl})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           zIndex: -1,
//         }}
//       ></Box>

//       <Box
//         display="flex"
//         flexDirection={isSmallScreen ? "column" : "row"}
//         height="100%"
//         px={0} // horizontal padding
//         py={0} // vertical padding
//       >
//         <Box
//           flex={0.7}
//           mb={isSmallScreen ? "50px" : "0"}
//         >
//           <img
//             src="https://iv.direct/wp-content/uploads/sites/12/2023/08/IVDirect_Logo_PNG.png"
//             alt="Your Image"
//             style={{
//               width: "100%",
//               height: "auto",
//               borderRadius: "30px",
//             }}
//           />
//         </Box>

//         <CardContent sx={{ flex: "1", mb: 30 }}>
//           <Typography variant="h3">IV Specialists</Typography>
//           <Typography variant="h4">Mobile IV Medics</Typography>

//           <Typography
//             variant="body1"
//             sx={{ whiteSpace: "pre-line" }}
//           >
//             Our pharmacists meticulously formulate each IV drip treatment,
//             ensuring it's loaded with essential fluids, antioxidants, vitamins,
//             medicines, and nutrients. These treatments are designed to address a
//             range of common symptoms people face when they're not at their best.
//           </Typography>
//           <Typography
//             variant="title"
//             color="inherit"
//             noWrap
//           >
//             &nbsp;
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ whiteSpace: "pre-line" }}
//           >
//             What's more, we bring our IV hydration therapy straight to your
//             doorstep! Our suite includes several IV drips tailored for various
//             conditions like migraines, dehydration, hangovers, and chronic pain.
//             Alternatively, you have the option to customize your own IV drip.
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             style={{ marginTop: "16px" }}
//           >
//             Find Out More
//           </Button>
//         </CardContent>
//       </Box>
//     </Container>
//   );
// }
// export default ImageCard;
import {
  CardContent,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useScroll } from "./ScrollContext";

import Box from "@mui/material/Box";

function ImageCard() {
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
        paddingBottom: "200px",
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
        px={0} // horizontal padding
        py={0} // vertical padding
      >
        <Box
          flex={0.7}
          mb={isSmallScreen ? "50px" : "0"}
        >
          <img
            src="https://iv.direct/wp-content/uploads/sites/12/2023/08/IVDirect_Logo_PNG.png"
            alt="Your Image"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "30px",
            }}
          />
        </Box>

        <CardContent sx={{ flex: "1", mb: 30, p: 4 }}>
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
            ensuring it's loaded with essential fluids, antioxidants, vitamins,
            medicines, and nutrients. These treatments are designed to address a
            range of common symptoms people face when they're not at their best.
          </Typography>

          <Typography
            variant="body1"
            sx={{ whiteSpace: "pre-line", my: 2 }}
          >
            What's more, we bring our IV hydration therapy straight to your
            doorstep! Our suite includes several IV drips tailored for various
            conditions like migraines, dehydration, hangovers, and chronic pain.
            Alternatively, you have the option to customize your own IV drip.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, width: "100%" }}
            onClick={() => handleTypographyClick("/Menu")}
          >
            Find Out More
          </Button>
        </CardContent>
      </Box>
    </Container>
  );
}
export default ImageCard;

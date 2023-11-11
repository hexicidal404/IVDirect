import React from "react";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Container,
  Divider,
} from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { useState } from "react";
import { useTheme } from "@mui/material/";
import VitaminBox from "./VitaminBox";
import ImageComponent from "../components/Logo.jsx";

const data = [
  {
    text: "Vitamin B Complex",
    color: "#E57373",
    description:
      "Supports energy, red blood cell formation, brain health, and mood regulation.",
  },
  {
    text: "Vitamin B12",
    color: "#81C784",
    description:
      "Crucial for healthy nerve cells, red blood cell formation, and anemia prevention.",
  },
  {
    text: "Zinc",
    color: "#64B5F6",
    description:
      "Supports immune function, wound healing, and growth during key life stages.",
  },
  {
    text: "Taurine",
    color: "#FFD54F",
    description:
      "Aids in calcium regulation, brain and eye health, and electrolyte balance.",
  },
  {
    text: "Glutathione",
    color: "#BA68C8",
    description:
      "An antioxidant that helps with detoxification and may enhance skin complexion.",
  },
  {
    text: "Magnesium",
    color: "#4FC3F7",
    description:
      "Essential for muscle, nerve function, and blood pressure regulation.",
  },
  // {
  //   text: "MIC",
  //   color: "#FF8A65",
  //   description:
  //     "MIC (Methionine Inositol Choline) is a lipotropic blend that assists in the breakdown of fats, supports liver health, and aids in metabolism. It's often used for weight management.",
  // },
  // {
  //   text: "NAD+",
  //   color: "#A1887F",
  //   description:
  //     "NAD+ (Nicotinamide Adenine Dinucleotide) is essential for energy production and maintaining proper cell functions. It also plays a key role in aging and DNA repair.",
  // },
  // {
  //   text: "L-Carnitine",
  //   color: "#4DB6AC",
  //   description:
  //     "L-Carnitine is an amino acid that transports fatty acids into the mitochondria to be used as energy. It may improve exercise performance and support weight management.",
  // },
];

const Supplemental = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const theme = useTheme();

  const paperStyle = {
    padding: theme.spacing(3),
    transition: "transform 0.3s, box-shadow 0.3s",
    backgroundColor: "#FFFFFF",
    elevation: 2,
  };

  const hoverStyle = {
    transform: "scale(1.07)",
    elevation: 6,
  };

  return (
    <Container
      sx={{
        minHeight: "100vh", // to ensure it covers the full viewport height
        minWidth: "100%", // to ensure it covers the full viewport height
        background: `url("https://res.cloudinary.com/dcgh3ljwk/image/upload/q_auto/v1698524744/daniel-sinoca-7BLc53z03rM-unsplash_1_xfro20.webp")`,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Paper
          elevation={15}
          sx={{
            mt: 6,
            mb: 6,
            p: theme.spacing(4),
            borderRadius: theme.shape.borderRadius,
          }}
        >
          {" "}
          <ImageComponent
            style={{
              display: "block",
              margin: "0px auto ",
              maxWidth: "65%",
            }}
          />
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            color="textSecondary"
            sx={{ marginBottom: "20px" }}
          >
            Elevate your health with our premium selections.
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Grid
            container
            spacing={4}
          >
            {data.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
              >
                <Paper
                  elevation={5}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    ...paperStyle,
                    ...(hoveredIndex === index ? hoverStyle : {}),
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dcgh3ljwk/image/upload/q_auto/v1698303248/1_hhprhu.webp"
                    style={{ width: "25%", marginBottom: "15px" }}
                  />
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {item.text}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
};

export default Supplemental;

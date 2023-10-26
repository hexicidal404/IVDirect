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

const data = [
  {
    text: "Vitamin B Complex",
    color: "#E57373",
    description:
      "Vitamin B Complex helps in energy production, DNA repair, and the formation of red blood cells. It also supports brain health and reduces symptoms of stress and depression.",
  },
  {
    text: "Vitamin B12",
    color: "#81C784",
    description:
      "Vitamin B12 is essential for nerve function, the formation of red blood cells, and DNA synthesis. It also plays a vital role in the health of nerve cells and preventing megaloblastic anemia.",
  },
  {
    text: "Zinc",
    color: "#64B5F6",
    description:
      "Zinc is crucial for DNA synthesis, immune system function, and wound healing. It also supports growth and development during pregnancy, childhood, and adolescence.",
  },
  {
    text: "Taurine",
    color: "#FFD54F",
    description:
      "Taurine is an amino acid that plays a key role in several essential body functions, including regulating calcium levels, supporting brain and eye health, and maintaining hydration and electrolyte balance.",
  },
  {
    text: "Glutathione",
    color: "#BA68C8",
    description:
      "Glutathione is an antioxidant that prevents damage to cellular components caused by free radicals. It also helps in detoxification, supports the immune system, and can lighten skin complexion.",
  },
  {
    text: "Magnesium",
    color: "#4FC3F7",
    description:
      "Magnesium is vital for many physiological functions, including energy production, muscle contractions, nerve function, and the regulation of blood pressure. It also supports bone health and aids in protein synthesis.",
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

const imgLink =
  // "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697959002/syringe_c8fdfk.png";
  // "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1698133525/oranges_d7e3xd.jpg";
  // "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1698303248/1_hhprhu.png";
  "https://res.cloudinary.com/dcgh3ljwk/image/upload/c_scale,w_681/v1698303678/jamie-street-qpN5MLx1uwk-unsplash_kydsfq.jpg";
const Supplemental = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const theme = useTheme();

  const boxStyle = {
    padding: theme.spacing(2),
    borderRadius: "12px",
    boxShadow: theme.shadows[1],
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const hoverStyle = {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[5],
  };

  return (
    <Container>
      <Box
        mt={4}
        mb={4}
        p={theme.spacing(2)}
        bgcolor="background.paper"
        boxShadow={3}
        borderRadius={theme.shape.borderRadius}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 600, color: "#283891", textAlign: "center" }}
        >
          Supplemental Shots
        </Typography>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          color="textSecondary"
        >
          Elevate your health with our premium selections.
        </Typography>
        <Typography
          variant="body1"
          align="justify"
          gutterBottom
        >
          At IV Direct, we offer a wide selection of specially crafted IV
          treatment packages tailored to rejuvenate your body and mind. Whether
          you're battling dehydration, recovering from overexertion, or trying
          to shake off a hangover, our treatments are the perfect antidote.
          Enjoy the convenience of pre-made treatments delivered to your
          doorstep or let your creativity shine by customizing with our range of
          add-ons.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={8}
          >
            <Grid
              container
              spacing={3}
            >
              {data.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  key={index}
                >
                  <Box
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      ...boxStyle,
                      ...(hoveredIndex === index ? hoverStyle : {}),
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/dcgh3ljwk/image/upload/v1698303248/1_hhprhu.png"
                      style={{ width: "20%" }}
                    />
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      gutterBottom
                    >
                      {item.text}
                    </Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box sx={{ width: "100%", borderRadius: 2 }}>
              <img
                src={imgLink}
                alt="Supplemental image"
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Supplemental;

import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
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
  {
    text: "MIC",
    color: "#FF8A65",
    description:
      "MIC (Methionine Inositol Choline) is a lipotropic blend that assists in the breakdown of fats, supports liver health, and aids in metabolism. It's often used for weight management.",
  },
  {
    text: "NAD+",
    color: "#A1887F",
    description:
      "NAD+ (Nicotinamide Adenine Dinucleotide) is essential for energy production and maintaining proper cell functions. It also plays a key role in aging and DNA repair.",
  },
  {
    text: "L-Carnitine",
    color: "#4DB6AC",
    description:
      "L-Carnitine is an amino acid that transports fatty acids into the mitochondria to be used as energy. It may improve exercise performance and support weight management.",
  },
];

const imgLink =
  "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697959002/syringe_c8fdfk.png";

const Supplemental = () => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  const boxStyle = {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px", // space between boxes
    cursor: "pointer",
    transition: "0.3s", // <-- Moved transition property here
  };

  const hoverStyle = {
    transform: "scale(1)", // subtle grow effect on hover
    boxShadow: theme.shadows[5], // a bit more shadow to give an elevated effect
  };

  const combinedStyle = {
    ...boxStyle,
    ...(isHovered ? hoverStyle : {}),
  };

  return (
    <Box
      mt={4}
      mb={4}
      p={5}
      bgcolor="background.paper"
      boxShadow={3}
      borderRadius={3}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        color="primary"
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
        variant="h6"
        align="justify"
        gutterBottom
      >
        At IV Direct, we offer a wide selection of specially crafted IV
        treatment packages tailored to rejuvenate your body and mind. Whether
        you're battling dehydration, recovering from overexertion, or trying to
        shake off a hangover, our treatments are the perfect antidote. Enjoy the
        convenience of pre-made treatments delivered to your doorstep or let
        your creativity shine by customizing with our range of add-ons.
      </Typography>
      <Grid
        container
        spacing={3}
      >
        {data.map((item, index) => (
          <VitaminBox
            key={index}
            item={item}
            imgLink={imgLink}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Supplemental;

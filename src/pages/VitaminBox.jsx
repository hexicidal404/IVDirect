import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const VitaminBox = ({ item, imgLink }) => {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();

  const boxStyle = {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "0.3s",
    ...(hovered ? { transform: "scale(1)", boxShadow: theme.shadows[5] } : {}),
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Paper
        elevation={5}
        style={boxStyle}
        sx={{ borderRadius: "12px", display: "flex" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <img
            src={imgLink}
            alt=""
            translate=""
          />
          <Typography
            variant="h6"
            mt={2}
          >
            {item.text}
          </Typography>
        </Box>
        <Box
          flex="1"
          pl={2}
        >
          <Typography variant="body1">{item.description}</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default VitaminBox;

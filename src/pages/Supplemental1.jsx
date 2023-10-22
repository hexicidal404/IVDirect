import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import LottieAnimation from "../components/LottieAnimation";
import animationData from "../circle.json";
import { Container, Typography } from "@mui/material";

const heights = [150, 70, 90, 80, 90, 100, 150, 130, 110, 80];
const heights2 = heights.map((x) => x * 2);
const itemStyle = (theme) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
});

const data = [
  { text: "Vitamin B Complex" },
  { text: "Vitamin B12" },
  { text: "Zinc" },
  { text: "Taurine" },
  { text: "Glutathione" },
  { text: "Magnesium" },
  { text: "MIC" },
  { text: "NAD+" },
  { text: "L-Carnitine" },
  { text: "Vitamin C" },
];
const LottieItem = ({ index, height, title }) => {
  // Added title prop
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      style={{
        ...itemStyle(theme),
        height: `${height}px`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LottieAnimation
        animationData={animationData}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          color: theme.palette.text.primary,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 600, color: "#283891" }} // Made it bold
        >
          {title}
        </Typography>
      </div>
    </Paper>
  );
};

export default function Supplmental() {
  return (
    <Container sx={{ height: "900px", pt: 6 }}>
      <Box sx={{ width: "auto", minHeight: 377 }}>
        <Masonry
          columns={3}
          spacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {heights2.map((height, index) => (
            <LottieItem
              key={index}
              index={index}
              height={height}
              title={
                data[index] && data[index].text
                  ? data[index].text
                  : `Title ${index + 1}`
              } // Use data array to get the title text
            />
          ))}
        </Masonry>
      </Box>
    </Container>
  );
}

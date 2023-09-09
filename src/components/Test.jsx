import * as React from "react";
import { Box } from "@mui/material";
import water from "../water.jpg";

export default function Test() {
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        width: "100%",
        height: "50%",
        backgroundImage: `url(${water})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

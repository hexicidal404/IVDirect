import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";

function CardGrid({ cards }) {
  return (
    <Grid
      container
      spacing={2}
    >
      {cards.map((card, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={4}
        >
          <CustomCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardGrid;

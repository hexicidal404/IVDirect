import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";

function CardGrid({ cards, onButtonClick }) {
  return (
    <Grid
      container
      spacing={2}
    >
      {cards.map((item) => (
        <Grid
          item
          key={item.key}
          xs={12}
          sm={4}
        >
          <CustomCard
            {...item}
            onButtonClick={() => onButtonClick(item.key)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardGrid;

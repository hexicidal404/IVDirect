import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const backgroundImage =
  "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1698223569/daniel-sinoca-7BLc53z03rM-unsplash_zq221v.jpg";

function OwnershipOpportunities() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover 110%",
        backgroundPosition: "center 100%",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "2rem",
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
        >
          Ownership Opportunities for IV Hydration
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          As the IV Hydration industry continues to grow, we're excited to offer
          unique ownership opportunities for interested investors and
          entrepreneurs. Join us in our mission to provide top-tier hydration
          services and wellness solutions to a wider audience.
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          Our comprehensive ownership packages ensure that franchisees have the
          support, training, and resources they need to succeed. With a proven
          business model, dedicated support teams, and a growing market demand,
          there's never been a better time to explore ownership opportunities
          with us.
        </Typography>
        <Typography variant="body1">
          Reach out today to learn more about how you can be a part of this
          thriving industry and make a tangible impact on health and wellness in
          your community.
        </Typography>
      </Paper>
    </Box>
  );
}

export default OwnershipOpportunities;

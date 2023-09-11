import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function CustomCard({
  title,
  price,
  content,
  image,
  buttonText,
  onButtonClick,
}) {
  const cloudinaryImageUrl =
    "https://res.cloudinary.com/dcgh3ljwk/image/upload/e_blur:725/c_scale,l_IVDirect_oed1qg,w_274,y_125/v1694215164/bag_npihlz.webp";

  return (
    <>
      <Card
        sx={{
          ":hover": {
            boxShadow: "0px 2px 4px rgba(25, 31, 35, 0.74)",
          },
          border: "1px solid #e1e9ef",
          margin: "0 auto",
          maxWidth: "432px",
          minWidth: "240px",
          background: "#ffffff",
          transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
          borderRadius: "12px",
        }}
      >
        <CardMedia
          sx={{}}
          height="800"
          image={cloudinaryImageUrl}
          title="IV Bag"
          component="img"
        />
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography>{price}</Typography>

          <Typography>{content}</Typography>
        </CardContent>
        {buttonText && onButtonClick && (
          <CardActions>
            <Button
              variant="contained"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </CardActions>
        )}
      </Card>
    </>
  );
}

export default CustomCard;

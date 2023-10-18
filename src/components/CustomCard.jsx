/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function CustomCard({
  title,
  price,
  content,
  buttonText,
  onButtonClick,
  imgLink,
  benefits,
}) {
  const cloudinaryImageUrl =
    "https://res.cloudinary.com/dcgh3ljwk/image/upload/e_blur:725/c_scale,l_IVDirect_oed1qg,w_274,y_125/v1694215164/bag_npihlz.webp";

  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(`/details/${route}`);
  };
  const theme = useTheme();

  return (
    <Card
      sx={{
        ":hover": {
          boxShadow: "0px 4px 6px rgba(25, 31, 35, 0.5)",
        },
        border: "1px solid #e1e9ef",
        margin: "0 auto",
        maxWidth: "432px",
        minWidth: "240px",
        background: "#ffffff",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        borderRadius: "12px",

        height: "800px",
      }}
    >
      <CardMedia
        sx={{
          height: 540,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${imgLink})`,
        }}
        title="IV Bag"
      />
      <CardContent
        sx={{
          padding: "24px",
          height: "calc(400px - 240px)",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          {title}
        </Typography>

        <Typography
          color="textSecondary"
          sx={{ marginBottom: "16px", fontWeight: "500" }}
        >
          {benefits[1]}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {content}
        </Typography>
      </CardContent>

      {buttonText && onButtonClick && (
        <CardActions sx={{ padding: "24px" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: theme.palette.primary[800],
              ":hover": {
                backgroundColor: theme.palette.primary[900],
              },
            }}
            fullWidth
            onClick={onButtonClick} // Directly use the prop here
          >
            {buttonText}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
export default CustomCard;

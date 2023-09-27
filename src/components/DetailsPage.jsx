import { useParams } from "react-router-dom";
import { Container, Typography, Paper, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DetailsPage({ dataArray }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const itemId = parseInt(id, 10);
  const item = dataArray.find((item) => item.key === itemId);

  if (!item) {
    return (
      <Container maxWidth="sm">
        <Typography
          variant="h5"
          align="center"
          color="error"
          gutterBottom
        >
          Item not found!
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 2 }}
      >
        <Typography
          variant="h4"
          gutterBottom
        >
          {item.title}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          gutterBottom
        >
          {item.price}
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          {item.expandedContent}
        </Typography>
        <Box mt={4}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ mr: 2 }}
            onClick={() => navigate("/menu")}
          >
            See Other Menu Items
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              navigate("/contact", { state: { packageId: item.key } })
            }
          >
            Contact Us
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default DetailsPage;

import React, { useState } from "react";

import {
  Paper,
  Typography,
  Box,
  Button,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ImageComponent from "../components/Logo";

const backgroundImage =
  "https://res.cloudinary.com/dcgh3ljwk/image/upload/q_auto/v1698524582/tim-marshall-dYO_5KOMEkA-unsplash_xwjvos.webp";

function OwnershipOpportunities() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here, you'd send the formData to your backend or desired endpoint
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      padding={2}
    >
      <Container
        maxWidth="md"
        sx={{ maxHeight: "60%", mt: 6, mb: 6 }}
      >
        <Paper
          elevation={3}
          style={{
            padding: theme.spacing(2),

            borderRadius: "12px",
          }}
        >
          <ImageComponent style={{ maxWidth: "100%" }} />
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
            As the IV Hydration industry continues to grow, we're excited to
            offer the following benefits:
          </Typography>
          <Box
            pl={theme.spacing(3)}
            mb={theme.spacing(3)}
          >
            <Typography variant="body1">
              ✓ Unique ownership opportunities for investors and entrepreneurs.
            </Typography>
            <Typography variant="body1">
              ✓ Comprehensive ownership packages with support and resources.
            </Typography>
            <Typography variant="body1">
              ✓ Proven business model and dedicated support teams.
            </Typography>
            <Typography variant="body1">
              ✓ Growing market demand with high potential for profitability.
            </Typography>
          </Box>
          <Typography
            variant="body1"
            paragraph
          >
            Reach out today to learn more about how you can be a part of this
            thriving industry.
          </Typography>
          <Box mt={3}>
            {isSubmitted ? (
              <Alert severity="success">
                Thank you for your interest! We'll get back to you shortly.
              </Alert>
            ) : (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Box
                  mt={2}
                  display="flex"
                  justifyContent="center"
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default OwnershipOpportunities;

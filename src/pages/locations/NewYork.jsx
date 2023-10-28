import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  Link,
  Paper,
  Container,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useTheme } from "@mui/material/styles";

export default function NewYork() {
  const theme = useTheme();

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{ padding: { xs: 1, sm: theme.spacing(3) }, mt: 6, mb: 6 }}
      >
        <Paper
          elevation={10}
          style={{ padding: "16px", borderRadius: "12px" }}
        >
          <Typography
            variant="h4"
            gutterBottom
          >
            Welcome to IV Direct in The Big Apple!
          </Typography>

          <Typography paragraph>
            Experience the epitome of wellness in the city that never sleeps.
            With New York's bustling lifestyle, ensure you're always on top of
            your game with our tailor-made IV hydration therapies.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
          >
            Why New Yorkers Choose Us:
          </Typography>

          <List>
            <ListItem>
              <ListItemText
                primary="City-Specific Treatments"
                secondary="From the hustling professional to the late-night party enthusiast, we've got IV drips tailor-made for NYC's unique demands."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="NYC Direct Delivery"
                secondary="Whether you're in Manhattan, Brooklyn, or Queens, our mobile IV hydration units ensure timely service."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Experienced in Urban Wellness"
                secondary="Our team understands the unique needs of city-dwellers, and we're here to help you thrive amidst the skyscrapers."
              />
            </ListItem>
          </List>

          <Typography
            variant="h6"
            gutterBottom
          >
            Our NYC Favorites:
          </Typography>

          <List>
            <ListItem>
              <ListItemText
                primary="The City Energizer"
                secondary="Keep up with NYC's pace."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Broadway Revive"
                secondary="For our performers and theater-goers."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Wall Street Warrior"
                secondary="Stay sharp, stay focused."
              />
            </ListItem>
          </List>

          <Typography
            variant="subtitle1"
            gutterBottom
          >
            "New York's Fast-Paced Life Demands Fast-Paced Wellness. That's
            Where IV Specialists Come In."
          </Typography>

          <Divider style={{ margin: "20px 0" }} />

          <Typography
            variant="h6"
            gutterBottom
          >
            Contact Our NYC Team
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mb={1}
          >
            <MailOutlineIcon />
            <Typography variant="body1">
              <Link
                sx={{ color: "black" }}
                href="mailto:nyc@ivspecialists.com"
              >
                nyc@iv.direct
              </Link>
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
          >
            <PhoneIcon />
            <Typography variant="body1">(212) 123-4567</Typography>
          </Box>

          <Box
            mt={4}
            textAlign="center"
          >
            <Button
              variant="outlined"
              startIcon={<ArrowUpwardIcon />}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

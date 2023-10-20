import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
  Paper,
  Container,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTheme } from "@mui/material/styles";

export default function Florida() {
  const theme = useTheme();

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{ padding: { xs: 1, sm: theme.spacing(3) } }}
      >
        <Paper style={{ padding: "16px", borderRadius: "12px" }}>
          <Typography
            variant="h4"
            gutterBottom
          >
            Welcome to IV Direct in the Sunshine State!
          </Typography>

          <Typography paragraph>
            Elevate your wellness amid Florida's sun, sea, and sand. As you soak
            up the sunshine, our bespoke IV hydration therapies ensure you feel
            revitalized and refreshed.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
          >
            Why Floridians Choose Us:
          </Typography>

          <List>
            <ListItem>
              <ListItemText
                primary="Tropical Treatments"
                secondary="From the avid beach-goer to those enjoying the nightlife, our drips are tailor-made for Florida's unique vibe."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Statewide Service"
                secondary="From Miami to Orlando, Jacksonville to Tampa, our mobile IV units are ready to serve you."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Masters of Coastal Wellness"
                secondary="We know what it means to live by the coast, and our treatments ensure you make the most of it."
              />
            </ListItem>
          </List>

          <Typography
            variant="h6"
            gutterBottom
          >
            Our Florida Favorites:
          </Typography>

          <List>
            <ListItem>
              <ListItemText
                primary="Beach Breeze Boost"
                secondary="Stay hydrated under the sun."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Sunset Soothe"
                secondary="Relax and rejuvenate after a day at the beach."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Everglades Energizer"
                secondary="For those adventurous swamp tours and outdoor excursions."
              />
            </ListItem>
          </List>

          <Typography
            variant="subtitle1"
            gutterBottom
          >
            "With Florida's Year-Round Sunshine, We Provide Year-Round Wellness.
            IV Specialists are here for you."
          </Typography>

          <Divider style={{ margin: "20px 0" }} />

          <Typography
            variant="h6"
            gutterBottom
          >
            Contact Our Florida Team
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
                href="mailto:florida@ivspecialists.com"
              >
                florida@iv.direct
              </Link>
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
          >
            <PhoneIcon />
            <Typography variant="body1">(305) 123-4567</Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

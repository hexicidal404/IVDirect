import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

export default function California() {
  return (
    <div style={{ paddingTop: "70px" }}>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
        >
          Welcome to IV Direct in the Golden State!
        </Typography>

        <Typography paragraph>
          Discover optimal well-being from the sun-drenched coasts to the
          vibrant tech valleys. With California's diverse lifestyle, our IV
          hydration therapies are designed to match your Californian spirit.
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
        >
          Why Californians Choose Us:
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Tailored West Coast Drips"
              secondary="Whether you're surfing at the beach or coding in Silicon Valley, our IV drips cater to the Golden State's eclectic needs."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Statewide Presence"
              secondary="From Los Angeles to San Francisco, San Diego to Sacramento, our mobile units have you covered."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Holistic Wellness"
              secondary="Understanding the state's focus on holistic health and well-being, our treatments are designed to nurture both body and mind."
            />
          </ListItem>
        </List>

        <Typography
          variant="h6"
          gutterBottom
        >
          Our California Favorites:
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Beach Vibes Boost"
              secondary="Hydrate after a day under the Californian sun."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Techie Refresh"
              secondary="Revitalize after long coding sessions."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Hollywood Glow"
              secondary="Stay camera-ready with a radiant glow."
            />
          </ListItem>
        </List>

        <Typography
          variant="subtitle1"
          gutterBottom
        >
          "From the Silicon Valleys to the Sandy Beaches, IV Specialists are
          Here to Elevate Your Californian Lifestyle."
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography
          variant="h6"
          gutterBottom
        >
          Contact Our California Team
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
              href="mailto:california@ivspecialists.com"
            >
              california@iv.direct
            </Link>
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <PhoneIcon />
          <Typography variant="body1">(310) 123-4567</Typography>
        </Box>
      </Box>
    </div>
  );
}

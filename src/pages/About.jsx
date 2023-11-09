import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScroll } from "../components/ScrollContext";
import { useTheme } from "@mui/material/styles";

import {
  Typography,
  Container,
  Divider,
  Box,
  Button,
  Paper,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star"; // Assuming you want to use this icon for testimonials

function About() {
  const { aboutUsRef } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useTheme();

  useEffect(() => {
    if (location.state?.shouldScroll && aboutUsRef.current) {
      const yOffset = -100; // negative value for a 100px offset upwards
      const y = aboutUsRef.current.getBoundingClientRect().top + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [location, aboutUsRef]);

  const handleButtonClick = () => {
    navigate("/");
  };
  const backgroundImage =
    "https://res.cloudinary.com/dcgh3ljwk/image/upload/q_auto/v1698524579/lionello-delpiccolo-qEswHvOmi1c-unsplash_tjm7bd.webp";

  return (
    <div
      ref={aboutUsRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ padding: { xs: 2, sm: theme.spacing(3) }, mt: 6, mb: 6 }}
      >
        <Paper
          elevation={3}
          sx={{
            overflow: "hidden",
            borderRadius: "12px",
            padding: theme.spacing(2),
          }}
        >
          <Typography
            variant="h4"
            color="textPrimary"
            gutterBottom
          >
            About Us
          </Typography>
          <Divider
            sx={{
              margin: theme.spacing(2, 0),
              backgroundColor: theme.palette.primary.dark,
            }}
          />
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
          >
            At IV Hydration, we're not just another medical service; we're
            revolutionaries in the realm of natural health and wellness. Rooted
            in the belief that optimal health starts at the cellular level, we
            set out to change the way individuals receive crucial nutrients and
            vitamins. Our pioneering approach brings the much-needed
            rejuvenation directly to your doorstep with our exclusive mobile IV
            hydration units. No longer do you need to step out to a clinic;
            instead, let the wellness come to you, whether you're at home, at
            the office, or even at a hotel.
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
          >
            Our vitamin-infused concoctions are meticulously crafted, blending
            science and nature's bounty to restore, revitalize, and rejuvenate.
            From immunity boosters to beauty elixirs and energy enhancers, our
            diverse menu caters to varied needs, ensuring that your body
            receives the precise nutrients it craves. We understand that in
            today's fast-paced world, it's easy to overlook self-care, which is
            why we strive to make it as effortless and efficient as possible,
            ensuring you always perform at your peak, naturally.
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
          >
            Our journey began from a simple vision: to fuse modern medical
            science with ancient natural remedies. The brainchild of a dedicated
            team of nutritionists, health enthusiasts, and medical
            professionals, IV Direct's story is one of innovation, dedication,
            and an unwavering commitment to holistic health. We pride ourselves
            on our unique business model, always prioritizing the comfort and
            health of our clients. Join us on this wellness journey and discover
            a new dimension of health and vitality.
          </Typography>
          <Box mt={5}>
            <Typography
              variant="h4"
              gutterBottom
            >
              IV Direct
            </Typography>
            <Divider
              sx={{
                margin: theme.spacing(2, 0),
                backgroundColor: theme.palette.primary.dark,
              }}
            />
            <Typography
              variant="h6"
              gutterBottom
            >
              Why Choose IV Specialists?
            </Typography>
            <Typography paragraph>
              Expert Formulations: Our seasoned pharmacists design each IV drip,
              ensuring it’s brimming with essential fluids, antioxidants,
              vitamins, and nutrients.
            </Typography>
            <Typography paragraph>
              Tailored for You: Choose from our curated list of treatments
              targeting migraines, dehydration, hangovers, and chronic pain or
              customize your own IV concoction.
            </Typography>
            <Typography paragraph>
              Direct to Your Doorstep: Why step out when wellness can come to
              you? Our exclusive mobile IV hydration units ensure you get
              rejuvenated at home, the office, or even a hotel.
            </Typography>
          </Box>
          <Box
            mt={5}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              variant="h4"
              gutterBottom
            >
              Meet Our Specialists
            </Typography>
            <Divider sx={{ width: "60%", bgcolor: "primary.main" }} />
            {/* Grid Container */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr", // 1 column grid for extra-small screens
                  sm: "1fr", // 1 column grid for small screens (you can adjust if needed for small but not extra-small devices)
                  md: "repeat(3, 1fr)", // 3 column grid for medium screens and up
                },
                gap: theme.spacing(2),
                width: "100%",
                marginTop: theme.spacing(4),
              }}
            >
              {[
                // Replace with actual doctor data and import images accordingly
                {
                  name: "Dr. Shakira Fulkerson",
                  imageUrl: "doctorImageURL1",
                  detailPageLink: "/doctor/jane-smith",
                },
                {
                  name: "Dr. Brandon Centeno",
                  imageUrl: "doctorImageURL2",
                  detailPageLink: "/doctor/john-doe",
                },
                {
                  name: "Dr. Alberto Rivera",
                  imageUrl: "doctorImageURL3",
                  detailPageLink: "/doctor/alex-johnson",
                },
              ].map((doctor, index) => (
                <Card
                  key={index}
                  sx={{ minWidth: 350, mx: "auto" }}
                >
                  {/* Center the card */}
                  <CardContent sx={{ textAlign: "center" }}>
                    <Avatar
                      src={doctor.imageUrl}
                      sx={{
                        width: theme.spacing(14),
                        height: theme.spacing(14),
                        margin: "auto",
                        border: "3px solid",
                        borderColor: theme.palette.primary.main,
                        marginBottom: theme.spacing(2),
                      }}
                    />
                    <Typography
                      variant="h5"
                      component="div"
                    >
                      {doctor.name}
                    </Typography>
                    {/* Add a button leading to the doctor's detail page */}
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ mt: 2 }}
                      // Implement navigation logic accordingly
                      // onClick={() => navigate(doctor.detailPageLink)}
                    >
                      More Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          <Box
            mt={5}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Divider
              sx={{
                margin: theme.spacing(2, 0),
                width: "80%",
                backgroundColor: theme.palette.primary.dark,
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: theme.palette.primary.dark,
                ":hover": { backgroundColor: theme.palette.primary.main },
                py: 1,
                px: 4,
                fontSize: "1.1rem",
                width: "80%",
                transition: "all 0.3s",
              }}
              size="large"
              onClick={handleButtonClick}
            >
              Learn More
            </Button>
            <Divider
              sx={{
                margin: theme.spacing(2, 0),
                width: "50%",
                backgroundColor: theme.palette.primary.dark,
              }}
            />

            <Typography
              variant="h6"
              gutterBottom
            >
              Testimonials
            </Typography>
            {[
              {
                text: "Ever since I started using IV Specialists, I've felt more energetic, rejuvenated, and at my best. The convenience of having it delivered to my home is just the icing on the cake!",
                name: "John D., 32",
              },
              {
                text: "The Migraine Magic is truly magical. I've never felt such quick relief from my migraines before. Kudos to the IV Specialists team!",
                name: "Sophie R., 28",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                elevation={3}
                sx={{
                  mb: 3,
                  borderRadius: "12px",
                  padding: theme.spacing(2),
                  transition: "0.3s",
                  maxWidth: "80%",
                  "&:hover": {
                    transform: "scale(1.03)", // subtle grow effect on hover
                    boxShadow: theme.shadows[5],
                  },
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <Avatar
                    sx={{
                      width: theme.spacing(6),
                      height: theme.spacing(6),
                      bgcolor: theme.palette.primary.light,
                      marginRight: theme.spacing(2),
                    }}
                  >
                    <StarIcon color="primary" />
                  </Avatar>
                  <Box flexGrow={1}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{ mb: theme.spacing(1) }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      align="right"
                      sx={{ fontWeight: "bold" }}
                    >
                      {testimonial.name}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default About;

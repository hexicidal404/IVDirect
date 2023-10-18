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
} from "@mui/material";

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

  return (
    <>
      <div ref={aboutUsRef}>
        <Card
          elevation={3}
          sx={{ overflow: "hidden", borderRadius: "12px" }}
        >
          <CardContent>
            <Container
              maxWidth="md"
              sx={{ padding: "4rem 2rem" }}
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
                  margin: "2rem 0",
                  backgroundColor: theme.palette.primary[800],
                  height: ".3rem",
                }}
              />

              <Typography
                variant="body1"
                color="textSecondary"
                paragraph
              >
                At IV Hydration, we're not just another medical service; we're
                revolutionaries in the realm of natural health and wellness.
                Rooted in the belief that optimal health starts at the cellular
                level, we set out to change the way individuals receive crucial
                nutrients and vitamins. Our pioneering approach brings the
                much-needed rejuvenation directly to your doorstep with our
                exclusive mobile IV hydration units. No longer do you need to
                step out to a clinic; instead, let the wellness come to you,
                whether you're at home, at the office, or even at a hotel.
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                paragraph
              >
                Our vitamin-infused concoctions are meticulously crafted,
                blending science and nature's bounty to restore, revitalize, and
                rejuvenate. From immunity boosters to beauty elixirs and energy
                enhancers, our diverse menu caters to varied needs, ensuring
                that your body receives the precise nutrients it craves. We
                understand that in today's fast-paced world, it's easy to
                overlook self-care, which is why we strive to make it as
                effortless and efficient as possible, ensuring you always
                perform at your peak, naturally.
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                paragraph
              >
                Our journey began from a simple vision: to fuse modern medical
                science with ancient natural remedies. The brainchild of a
                dedicated team of nutritionists, health enthusiasts, and medical
                professionals, IV Direct's story is one of innovation,
                dedication, and an unwavering commitment to holistic health. We
                pride ourselves on our unique business model, always
                prioritizing the comfort and health of our clients. Join us on
                this wellness journey and discover a new dimension of health and
                vitality.
              </Typography>
              <Box
                mt={5}
                mb={3}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                >
                  IV Direct
                </Typography>
                <Divider
                  sx={{
                    margin: "2rem 0",
                    backgroundColor: theme.palette.primary[800],
                    height: ".3rem",
                  }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                >
                  Why Choose IV Specialists?
                </Typography>
                <Typography paragraph>
                  Expert Formulations: Our seasoned pharmacists design each IV
                  drip, ensuring it’s brimming with essential fluids,
                  antioxidants, vitamins, and nutrients.
                </Typography>
                <Typography paragraph>
                  Tailored for You: Choose from our curated list of treatments
                  targeting migraines, dehydration, hangovers, and chronic pain
                  or customize your own IV concoction.
                </Typography>
                <Typography paragraph>
                  Direct to Your Doorstep: Why step out when wellness can come
                  to you? Our exclusive mobile IV hydration units ensure you get
                  rejuvenated at home, the office, or even a hotel.
                </Typography>
              </Box>

              <Box
                mt={5}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Divider
                  sx={{
                    margin: "2rem 0",
                    backgroundColor: theme.palette.primary[800],
                    height: ".3rem",
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: theme.palette.primary[800],
                    ":hover": {
                      backgroundColor: theme.palette.primary[900],
                    },
                    py: 1,
                    px: 4,
                    fontSize: "1.1rem",
                    width: "80%",
                  }}
                  size="large"
                  onClick={handleButtonClick}
                >
                  Learn More
                </Button>
                <Divider
                  sx={{
                    margin: "2rem 0",
                    backgroundColor: theme.palette.primary[800],
                    height: ".3rem",
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
                  <Paper
                    key={index}
                    elevation={3}
                    sx={{ p: 3, mb: 2, borderRadius: "8px" }}
                  >
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      align="right"
                    >
                      {testimonial.name}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Container>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default About;

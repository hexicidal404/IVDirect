import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScroll } from "../components/ScrollContext";

import { Typography, Container, Divider } from "@mui/material";

function About() {
  const { aboutUsRef } = useScroll();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.shouldScroll && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div
      ref={aboutUsRef}
      style={{ padding: "70px" }}
    >
      <Container
        maxWidth="md"
        style={{ padding: "2rem", textAlign: "center" }}
      >
        <Typography
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          About Us
        </Typography>
        <Divider
          style={{
            margin: "1rem 0",
            backgroundColor: "#006f8e",
            height: ".3rem",
          }}
        />

        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
        >
          At IV Hydration, we're not just another medical service; we're
          revolutionaries in the realm of natural health and wellness. Rooted in
          the belief that optimal health starts at the cellular level, we set
          out to change the way individuals receive crucial nutrients and
          vitamins. Our pioneering approach brings the much-needed rejuvenation
          directly to your doorstep with our exclusive mobile IV hydration
          units. No longer do you need to step out to a clinic; instead, let the
          wellness come to you, whether you're at home, at the office, or even
          at a hotel.
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
        >
          Our vitamin-infused concoctions are meticulously crafted, blending
          science and nature's bounty to restore, revitalize, and rejuvenate.
          From immunity boosters to beauty elixirs and energy enhancers, our
          diverse menu caters to varied needs, ensuring that your body receives
          the precise nutrients it craves. We understand that in today's
          fast-paced world, it's easy to overlook self-care, which is why we
          strive to make it as effortless and efficient as possible, ensuring
          you always perform at your peak, naturally.
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
        >
          Our journey began from a simple vision: to fuse modern medical science
          with ancient natural remedies. The brainchild of a dedicated team of
          nutritionists, health enthusiasts, and medical professionals, IV
          Direct's story is one of innovation, dedication, and an unwavering
          commitment to holistic health. We pride ourselves on our unique
          business model, always prioritizing the comfort and health of our
          clients. Join us on this wellness journey and discover a new dimension
          of health and vitality.
        </Typography>
      </Container>
    </div>
  );
}

export default About;

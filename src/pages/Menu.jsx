import { useEffect } from "react";
import CardGrid from "../components/CardGrid";
import { Container } from "@mui/material";
import { useScroll } from "../components/ScrollContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Menu({ dataArray }) {
  const { hydrationMenuRef } = useScroll();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.shouldScroll && hydrationMenuRef.current) {
      const yOffset = -120; // negative value for a 100px offset upwards
      const y = hydrationMenuRef.current.getBoundingClientRect().top + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [location, hydrationMenuRef]);

  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(`/details/${route}`);
  };

  return (
    <>
      <div ref={hydrationMenuRef}>
        <Container sx={{ p: 2 }}>
          <CardGrid
            cards={dataArray}
            onButtonClick={handleButtonClick}
          />
        </Container>
      </div>
    </>
  );
}

export default Menu;

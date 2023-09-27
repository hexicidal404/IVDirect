import { useEffect } from "react";
import CardGrid from "../components/CardGrid";
import { Container } from "@mui/material";
import { useScroll } from "../components/ScrollContext";
import { useLocation, useNavigate } from "react-router-dom";

function Menu({ dataArray }) {
  const { hydrationMenuRef } = useScroll();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.shouldScroll && hydrationMenuRef.current) {
      hydrationMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(`/details/${route}`);
  };

  return (
    <>
      <div
        ref={hydrationMenuRef}
        style={{ paddingTop: "100px" }}
      >
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

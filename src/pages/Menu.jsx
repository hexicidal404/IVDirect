import React, { useRef, useEffect } from "react";
import CardGrid from "../components/CardGrid";
import { Container } from "@mui/material";

function Menu({ hydrationMenuRef, dataArray }) {
  useEffect(() => {
    if (hydrationMenuRef.current) {
      hydrationMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div ref={hydrationMenuRef}>
        <Container sx={{ p: 2 }}>
          <CardGrid cards={dataArray} />
        </Container>
      </div>
    </>
  );
}

export default Menu;

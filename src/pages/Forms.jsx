import React from "react";
import { useLocation } from "react-router-dom";
import { useScroll } from "../components/ScrollContext";
import { useEffect } from "react";

function Forms() {
  const { homeMenuRef } = useScroll();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.shouldScroll && homeMenuRef.current) {
      homeMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return <div>This is the Forms page.</div>;
}

export default Forms;

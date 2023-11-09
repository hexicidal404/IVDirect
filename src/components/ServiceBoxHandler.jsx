import React from "react";
import ServiceBox from "./ServiceBox";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import { Link, useNavigate } from "react-router-dom";

function ServiceBoxHandler({ onButtonClick }) {
  const navigate = useNavigate();

  const handleBoxClick = (path) => {
    navigate(path, { state: { shouldScroll: true } });
    onButtonClick(true); // Assuming this function expects 'true' to hide the ImageCard
  };
  return (
    <div>
      <ServiceBox
        Icon={HealthAndSafetyIcon}
        title="IV Direct Therapy Locations"
        onClick={() => handleBoxClick("/locations/AllLocations")}
      />
      <ServiceBox
        Icon={MenuBookIcon}
        title="Mobile IV Treatment Menu"
        onClick={() => {
          handleBoxClick("/");
        }}
      />
      <ServiceBox
        Icon={EventAvailableIcon}
        title="Book Mobile IV Therapy Now"
        onClick={() => {
          handleBoxClick("/contact");
        }}
      />
    </div>
  );
}

export default ServiceBoxHandler;

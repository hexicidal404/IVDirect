import React from "react";
import ServiceBox from "./ServiceBox";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import { Link, useNavigate } from "react-router-dom";

function ServiceBoxHandler({ onButtonClick }) {
  const navigate = useNavigate();

  return (
    <div>
      <ServiceBox
        Icon={HealthAndSafetyIcon}
        title="IV Direct Therapy Locations"
        onClick={() =>
          navigate("/locations/AllLocations", { state: { shouldScroll: true } })
        }
      />
      <ServiceBox
        Icon={MenuBookIcon}
        title="Mobile IV Treatment Menu"
        onClick={() => navigate("/", { state: { shouldScroll: true } })}
      />
      <ServiceBox
        Icon={EventAvailableIcon}
        title="Book Mobile IV Therapy Now"
        onClick={() => navigate("/contact", { state: { shouldScroll: true } })}
      />
    </div>
  );
}

export default ServiceBoxHandler;

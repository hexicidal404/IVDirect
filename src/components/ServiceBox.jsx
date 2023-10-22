import React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

function ServiceBox({ Icon, title, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  const boxStyle = {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px", // space between boxes
    cursor: "pointer",
    transition: "0.3s", // <-- Moved transition property here
  };

  const iconStyle = {
    marginRight: "20px",
    fontSize: "40px", // adjust this to set the icon size
  };

  const arrowStyle = {
    marginLeft: "auto",
    fontSize: "20px", // adjust this to set the arrow size
  };

  const hoverStyle = {
    transform: "scale(1.03)", // subtle grow effect on hover
    boxShadow: theme.shadows[5], // a bit more shadow to give an elevated effect
  };

  const combinedStyle = {
    ...boxStyle,
    ...(isHovered ? hoverStyle : {}),
  };

  return (
    <div
      style={combinedStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon style={iconStyle} />
      <span>{title}</span>
      <span style={arrowStyle}>&rarr;</span>
    </div>
  );
}

export default ServiceBox;

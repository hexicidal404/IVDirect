import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const hydrationMenuRef = useRef(null);
  const homeMenuRef = useRef(null);
  const contactMenuRef = useRef(null);
  const aboutUsRef = useRef(null);
  const locationsRef = useRef(null);
  const AllLocationsRef = useRef(null);

  const value = {
    hydrationMenuRef,
    homeMenuRef,
    contactMenuRef,
    aboutUsRef,
    locationsRef,
    AllLocationsRef,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

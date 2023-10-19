import React, { createContext, useContext, useState } from "react";

const ImageCardContext = createContext();

export function useImageCard() {
  return useContext(ImageCardContext);
}

export function ImageCardProvider({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  const hideImageCard = () => {
    setIsVisible(false);
  };

  return (
    <ImageCardContext.Provider value={{ isVisible, hideImageCard }}>
      {children}
    </ImageCardContext.Provider>
  );
}

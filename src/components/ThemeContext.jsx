import React, { createContext, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

// Create a theme context
const ThemeContext = createContext();

// Create a custom theme
const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: "#f2f2f2", // Change this to your desired color
    },
    spacing: 2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280, // This was 1280 by default, you can change as per your needs.
      xl: 1920,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "100%", // Your desired maxWidth for the container.
        },
      },
    },
  },
});

export function ThemeProviderWrapper({ children }) {
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

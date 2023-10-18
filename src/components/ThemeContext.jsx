import React, { createContext, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

// Create a theme context
const ThemeContext = createContext();

// Create a custom theme
const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
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
    MuiButton: {
      styleOverrides: (theme) => ({
        // Notice the function here
        // For buttons with "contained" variant and "primary" color
        containedPrimary: {
          backgroundColor: theme.palette.primary[400],
          "&:hover": {
            backgroundColor: theme.palette.primary[600], // Assuming you have a 600 shade defined
            // Alternatively, you could use darken/lighten utility to adjust the color.
            // backgroundColor: darken(theme.palette.primary[500], 0.15)
          },
          // ... any other overrides you want
        },
      }),
    },
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

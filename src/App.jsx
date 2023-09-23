import { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Container, CssBaseline } from "@mui/material";

import Menu from "./pages/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import NavBar from "./components/NavBar";

import { ThemeProviderWrapper } from "./components/ThemeContext";

import "./App.css";

import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ImageCard from "./components/ImageCard";

import { ScrollProvider } from "./components/ScrollContext";

import NewYork from "./pages/locations/NewYork";
import California from "./pages/locations/California";
import Florida from "./pages/locations/Florida";
import AllLocations from "./pages/locations/AllLocations";

export default function App({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const hydrationMenuRef = useRef(null);
  const AllLocationsRef = useRef(null);
  const homeMenuRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const data = [
    // {
    //   title: "IV Deluxe",
    //   price: "$250",
    //   content: "This is the content of Card 1.",
    //   buttonText: "Click Me",
    //   onButtonClick: handleButtonClick,
    // },
    {
      key: 1,
      title: "IV Deluxe",
      price: "$250",
      content: "This is the content of Card 1.",
      buttonText: "Click Me",
      onButtonClick: () => handleButtonClick(1),
    },
    {
      key: 2,

      title: "Myer's Cocktail",
      price: "$250",
      content: "This is the content of Card 2.",
      buttonText: "Click Me",
      onButtonClick: () => handleButtonClick(2),
    },
    {
      key: 3,
      title: "Food Poisoning",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
      onButtonClick: () => handleButtonClick(1),
    },
    {
      key: 4,
      title: "Covid, Cold, and Flu",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
      onButtonClick: () => handleButtonClick(),
    },
    {
      key: 5,
      title: "IV Hangover",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
      onButtonClick: () => handleButtonClick(),
    },
    {
      key: 6,
      title: "IV Beauty",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
      onButtonClick: () => handleButtonClick(),
    },
    {
      key: 7,
      title: "IV Weight Loss",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
      onButtonClick: () => handleButtonClick(),
    },
    {
      key: 8,
      title: "IV Fitness and Recovery",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
      onButtonClick: () => handleButtonClick(),
    },
    {
      key: 9,
      title: "IV Prenatal",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
      onButtonClick: () => handleButtonClick(),
    },
    {
      key: 10,
      title: "NAD+",
      price: "$500",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
      onButtonClick: () => handleButtonClick(),
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}

      <ScrollProvider>
        <Router>
          <ThemeProviderWrapper>
            <CssBaseline />

            <div className="App">
              <NavBar
                hydrationMenuRef={hydrationMenuRef}
                isOpen={isNavOpen}
                onClose={toggleNav}
              />
              <div className="main-content">
                <Container
                  className="divlogo"
                  sx={{
                    p: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Container>

                <ImageCard hydrationMenuRef={hydrationMenuRef} />

                <Container sx={{ p: 4 }}>
                  <Routes>
                    <Route
                      path="/menu"
                      element={<Menu dataArray={data} />}
                    />
                    <Route
                      path="/"
                      element={<Home />}
                    />

                    <Route
                      path="/about"
                      element={<About />}
                    />
                    <Route
                      path="/contact"
                      element={<Contact dataArray={data} />}
                    />
                    <Route
                      path="/locations"
                      element={<Locations />}
                    >
                      <Route
                        path="newyork"
                        element={<NewYork />}
                      />
                      <Route
                        path="california"
                        element={<California />}
                      />
                      <Route
                        path="florida"
                        element={<Florida />}
                      />
                      <Route
                        path="alllocations"
                        element={<AllLocations />}
                      />

                      {/* ... any other location routes you'd like to add ... */}
                    </Route>
                    <Route
                      path="/contact/:id"
                      element={<Contact dataArray={data} />}
                    />
                  </Routes>
                </Container>
              </div>
              <Footer />
            </div>
          </ThemeProviderWrapper>
        </Router>
      </ScrollProvider>
    </LocalizationProvider>
  );
}

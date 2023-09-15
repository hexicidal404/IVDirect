import { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import { ThemeProviderWrapper } from "./components/ThemeContext";
import "./App.css";
import Forms from "./pages/Forms";
import Footer from "./components/Footer";
import { ScrollProvider } from "./components/ScrollContext";

import ImageCard from "./components/ImageCard";

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const hydrationMenuRef = useRef(null);
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
      title: "IV Deluxe",
      price: "$250",
      content: "This is the content of Card 1.",
      buttonText: "Click Me",
    },
    {
      title: "Myer's Cocktail",
      price: "$250",
      content: "This is the content of Card 2.",
      buttonText: "Click Me",
    },
    {
      title: "Food Poisoning",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
    },
    {
      title: "Covid, Cold, and Flu",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
    },
    {
      title: "IV Hangover",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
    },
    {
      title: "IV Beauty",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
    },
    {
      title: "IV Weight Loss",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
    },
    {
      title: "IV Fitness and Recovery",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
    },
    {
      title: "IV Prenatal",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
    },
    {
      title: "IV Prenatal",
      price: "$250",
      content: "This is the content of Card 3.",
      buttonText: "Click Me",
    },
  ];

  return (
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
                    path="/forms"
                    element={<Forms />}
                  />
                  <Route
                    path="/about"
                    element={<About />}
                  />
                  <Route
                    path="/locations"
                    element={<Locations />}
                  />
                  <Route
                    path="/contact"
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
  );
}

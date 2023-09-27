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
import DetailsPage from "./components/DetailsPage";

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
      content: "A comprehensive boost for overall health and vitality.",
      route: "iv-deluxe",
      buttonText: "Click Me",
      expandedContent:
        "The IV Deluxe treatment offers a meticulously crafted infusion of essential vitamins and minerals. Designed to revitalize and rejuvenate, it's perfect for those leading busy lifestyles. Whether you're seeking a quick refresh or combating fatigue, IV Deluxe provides a comprehensive boost to your overall health, enhancing both physical vitality and mental clarity.",
    },
    {
      key: 2,
      title: "Myer's Cocktail",
      price: "$250",
      content: "Boosts immunity and aids chronic conditions.",
      route: "myers-cocktail",
      buttonText: "Click Me",
      expandedContent:
        "Myer's Cocktail has long been celebrated in the world of therapeutic IV treatments. Boasting a rich concoction of vital vitamins like B-complex and minerals such as magnesium and calcium, it's the go-to solution for many. From enhancing immune system function to reducing symptoms of chronic conditions like asthma or fibromyalgia, its wide array of health benefits makes it a favorite choice for many.",
    },
    {
      key: 3,
      title: "Food Poisoning",
      price: "$250",
      content: "Combat dehydration and detoxify after food poisoning.",
      route: "food-poisoning",
      buttonText: "Click Me",
      expandedContent:
        "When faced with the discomfort and dehydration brought about by food poisoning, our specialized IV treatment can be a lifesaver. Tailored to swiftly combat the adverse effects of foodborne illnesses, this infusion restores hydration, rebalances electrolytes, and assists in detoxifying the system. By providing the body with the essential nutrients it craves during such times, recovery is accelerated, ensuring you get back to feeling your best sooner.",
    },
    {
      key: 4,
      title: "Covid, Cold, and Flu",
      price: "$250",
      content: "Bolster the immune system against infections.",
      route: "ccf",
      buttonText: "Click Me",
      expandedContent:
        "Our specialized IV treatment for Covid, Cold, and Flu aims to bolster the immune system, providing it with essential nutrients to fight off infections. This formula is fortified with a blend of vitamins and minerals known to enhance immune response, reduce inflammation, and promote overall well-being. Whether you're battling the flu or seeking to expedite recovery from a cold, this infusion offers a holistic approach to get you back on your feet quickly.",
    },
    {
      key: 5,
      title: "IV Hangover",
      price: "$250",
      content: "Recovery treatment for post-alcohol fatigue and dehydration.",
      route: "iv-hangover",
      buttonText: "Click Me",
      expandedContent:
        "IV Hangover is the ultimate recovery treatment after a long night out. Excessive consumption of alcohol leads to dehydration, nutrient imbalance, and a build-up of toxins. This treatment delivers instant hydration, replenishes essential vitamins lost, and speeds up the detoxification process. As a result, it alleviates headaches, fatigue, and nausea, helping you bounce back in no time.",
    },
    {
      key: 6,
      title: "IV Beauty",
      price: "$250",
      content: "Rejuvenate skin from within for a youthful glow.",
      route: "iv-deluxe",
      buttonText: "Click Me",
      expandedContent:
        "IV Beauty is a specialized treatment focusing on rejuvenating the skin from within. Infused with powerful antioxidants, amino acids, and vitamins, this therapy works wonders in enhancing skin's elasticity, radiance, and hydration. It not only diminishes visible signs of aging but also combats free radicals, giving you a youthful, glowing complexion.",
    },
    {
      key: 7,
      title: "IV Weight Loss",
      price: "$250",
      content: "Supports weight management goals and boosts metabolism.",
      route: "iv-weight-loss",
      buttonText: "Click Me",
      expandedContent:
        "Our IV Weight Loss treatment is tailored to support your weight management goals. Alongside a balanced diet and regular exercise, this infusion boosts metabolism, aids in the detoxification process, and provides essential nutrients that promote fat burning. The ingredients have been handpicked to ensure you get the maximum benefits, helping you inch closer to your desired physique.",
    },
    {
      key: 8,
      title: "IV Fitness and Recovery",
      price: "$250",
      content: "Optimizes workout performance and accelerates recovery.",
      route: "iv-fitness-recovery",
      buttonText: "Click Me",
      expandedContent:
        "IV Fitness and Recovery is a favorite among athletes and fitness enthusiasts. The infusion provides a potent mix of amino acids, electrolytes, and vitamins, designed to optimize workout performance and speed up post-exercise recovery. By improving muscle function, reducing inflammation, and replenishing lost nutrients, this treatment ensures you're always in peak condition.",
    },
    {
      key: 9,
      title: "IV Prenatal",
      price: "$250",
      content: "Nutritional support tailored for expectant mothers.",
      route: "iv-prenatal",
      buttonText: "Click Me",
      expandedContent:
        "IV Prenatal has been carefully crafted to support expectant mothers during their pregnancy journey. Providing a balanced mix of vitamins and minerals, this infusion caters to the unique nutritional needs of pregnant women. It promotes optimal fetal development, reduces fatigue and nausea, and ensures the mother remains in optimal health. Safety and well-being are paramount, and this treatment offers both in abundance.",
    },
    {
      key: 10,
      title: "NAD+",
      price: "$500",
      content:
        "NAD+ IV treatment stands at the forefront of cellular rejuvenation therapies.",
      route: "nad",
      buttonText: "Click Me",
      expandedContent:
        "NAD+ IV treatment stands at the forefront of cellular rejuvenation therapies. As we age, our NAD+ levels naturally decline, leading to reduced cellular metabolism and energy. This treatment is designed to counteract these effects. By elevating the body's NAD+ levels, it aids in slowing aging processes, enhancing mental clarity, repairing DNA, and promoting overall cellular health. It's a revolutionary approach to holistic wellness, appealing to those keen on maximizing their healthspan.",
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
                    <Route
                      path="/details/:id"
                      element={<DetailsPage dataArray={data} />}
                    />
                  </Routes>

                  {/* other routes if any */}
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

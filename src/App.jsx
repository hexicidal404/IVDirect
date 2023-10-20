import { useState, useRef, useEffect } from "react";
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
  const [hasSeenImageCard, markImageCardAsSeen] = useHasSeenImageCard();

  const [backgroundImage, setBackgroundImage] = useState("");

  const [isNavOpen, setIsNavOpen] = useState(false);
  const hydrationMenuRef = useRef(null);
  const AllLocationsRef = useRef(null);
  const homeMenuRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  function useHasSeenImageCard() {
    const [hasSeen, setHasSeen] = useState(() => {
      return localStorage.getItem("hasSeenImageCard") === "true";
    });

    const markAsSeen = () => {
      localStorage.setItem("hasSeenImageCard", "true");
      setHasSeen(true);
    };

    return [hasSeen, markAsSeen];
  }

  useEffect(() => {
    function handleBeforeUnload() {
      localStorage.clear();
    }

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (hasSeenImageCard) {
      setBackgroundImage(
        "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697703863/jeremy-bishop-1braZySlEKA-unsplash_humwju.jpg"

        // "https://images.unsplash.com/photo-1511933801659-156d99ebea3e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // "https://res.cloudinary.com/dcgh3ljwk/image/upload/water_pwid1l.jpg"
      );
    }
  }, [hasSeenImageCard]);

  const data = [
    // {
    //   title: "IV Deluxe",
    //   price: "$250",
    //   content: "This is the content of Card 1.",
    //   buttonText: "Learn More",
    //   onButtonClick: handleButtonClick,
    // },
    {
      key: 1,
      title: "IV Deluxe",
      price: "$250",
      content: "A comprehensive boost for overall health and vitality.",
      imgLink:
        "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697335409/IV_DELUXE_nmgsfi.jpg",
      benefits: [
        "Improve mental sharpness",
        "Enhance energy levels",
        "Eliminate stress",
        "Boost immunity",
        "Enhance cognitive strength",
        "Improve muscle function and strength",
        "Target anti-aging",
        "Detox",
      ],
      ingredients: [
        "Vitamin B Complex",
        "Vitamin B12",
        "Vitamin C",
        "Glutathione",
        "L-Carnitine",
        "Additional Vitamins",
        "Anti-inflammatory",
      ],
      route: "iv-deluxe",
      buttonText: "Learn More",
      expandedContent:
        "Our IV Deluxe IV drip Therapy assists in targeting general health, detoxification, anti-aging, and stress with a full spectrum comprehensive vitamin replenishment. If you are looking to improve your immunity, cognitive, and physical health, and capabilities, look no further than this all-inclusive bag.",
    },
    {
      key: 2,
      title: "Myer's Cocktail",
      price: "$250",
      content: "Boosts immunity and aids chronic conditions.",
      imgLink:
        "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697335408/MYERS_COCKTAIL_uisxga.jpg",
      benefits: [
        "Combat fatigue",
        "Reduce stress and depression",
        "Alleviate cold symptoms",
        "Boost immunity",
        "Enhance recovery from upper respiratory tract infections",
        "Relieve acute muscle spasms",
        "Counter seasonal allergy rhinitis",
        "Support cardiovascular health",
      ],
      ingredients: [
        "Vitamin B Complex",
        "Vitamin B12",
        "Vitamin C",
        "Glutathione",
        "Trace Elements",
      ],
      route: "myers-cocktail",
      buttonText: "Learn More",
      expandedContent:
        "Our Myers Cocktail IV drip therapy stands out as a distinctive powerhouse among our array of IV drip packages. With its specialized combination of vital nutrients, it caters to diverse needs, ranging from addressing transient issues like a common cold or post-exercise recovery to alleviating the symptoms of chronic conditions such as migraines.",
    },
    {
      key: 3,
      title: "Food Poisoning",
      price: "$250",
      content: "Combat dehydration and detoxify after food poisoning.",
      imgLink:
        "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697335408/FOOD_POISONING_uwotkv.jpg",

      benefits: [
        "Eliminate toxins",
        "Rebalance vitamin levels in your body",
        "Alleviate symptoms: nausea, diarrhea, abdominal pain, headaches, and dizziness",
      ],
      ingredients: [
        "IV Fluids",
        "Vitamin B-Complex",
        "Pepcid",
        "Toradol",
        "Zofran",
      ],
      route: "food-poisoning",
      buttonText: "Learn More",
      expandedContent:
        "When faced with the discomfort and dehydration brought about by food poisoning, our specialized IV treatment can be a lifesaver. Tailored to swiftly combat the adverse effects of foodborne illnesses, this infusion restores hydration, rebalances electrolytes, and assists in detoxifying the system. By providing the body with the essential nutrients it craves during such times, recovery is accelerated, ensuring you get back to feeling your best sooner.",
    },
    {
      key: 4,
      title: "Covid, Cold, and Flu",
      price: "$250",
      content: "Bolster the immune system against infections.",
      imgLink:
        "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697335408/COLD_FLU_COVID_tpkchw.jpg",
      benefits: [
        "Symptom Relief: pain, inflammation, headaches, body aches, nausea, vomiting, fatigue",
        "Rehydration",
        "Enhance Energy",
      ],
      ingredients: [
        "IV fluids",
        "Vitamin B Complex",
        "Vitamin B12",
        "Vitamin C",
        "Glutathione",
        "Zinc",
        "Anti-inflammatory medication",
        "Zinc",
      ],
      route: "ccf",
      buttonText: "Learn More",
      expandedContent:
        "Our specialized IV treatment for Covid, Cold, and Flu aims to bolster the immune system, providing it with essential nutrients to fight off infections. This formula is fortified with a blend of vitamins and minerals known to enhance immune response, reduce inflammation, and promote overall well-being. Whether you're battling the flu or seeking to expedite recovery from a cold, this infusion offers a holistic approach to get you back on your feet quickly.",
    },
    {
      key: 5,
      title: "IV Hangover",
      price: "$250",
      content: "Recovery treatment for post-alcohol fatigue and dehydration.",
      imgLink:
        "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697335408/HANGOVER_IV_viwrlv.jpg",

      benefits: [
        "Alleviate headaches, nausea, and vomiting",
        "Rehydration",
        "Eliminate fatigue and weakness",
        "Combat irritability and anxiety",
      ],
      ingredients: [
        "IV fluid",
        "Vitamin B Complex",
        "Vitamin B12",
        "Glutathione",
        "Anti-nausea and Vomiting Medication",
        "Anti-inflammatory",
        "Headache and Pain Medication",
        "Folic Acid",
        "Magnesium",
      ],
      route: "iv-hangover",
      buttonText: "Learn More",
      expandedContent:
        "IV Hangover is the ultimate recovery treatment after a long night out. Excessive consumption of alcohol leads to dehydration, nutrient imbalance, and a build-up of toxins. This treatment delivers instant hydration, replenishes essential vitamins lost, and speeds up the detoxification process. As a result, it alleviates headaches, fatigue, and nausea, helping you bounce back in no time.",
    },
    {
      key: 6,
      title: "IV Beauty",
      price: "$250",
      content: "Rejuvenate skin from within for a youthful glow.",
      imgLink:
        "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697335409/IV_BEAUTY_qlmnse.jpg",

      benefits: [
        "Enhance collagen",
        "Illuminate skin",
        "Promote healthy skin, hair & nails",
        "Boost energy",
        "Improve metabolism",
      ],
      ingredients: [
        "IV Fluid",
        "Vitamin B12",
        "Vitamin C",
        "Glutathione",
        "Zinc",
      ],
      route: "iv-deluxe",
      buttonText: "Learn More",
      expandedContent:
        "IV Beauty is a specialized treatment focusing on rejuvenating the skin from within. Infused with powerful antioxidants, amino acids, and vitamins, this therapy works wonders in enhancing skin's elasticity, radiance, and hydration. It not only diminishes visible signs of aging but also combats free radicals, giving you a youthful, glowing complexion.",
    },
    {
      key: 7,
      title: "IV Weight Loss",
      price: "$250",
      content: "Supports weight management goals and boosts metabolism.",
      imgLink:
        "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697335407/IV_WEIGHT_LOSS_quhewr.jpg",

      benefits: [
        "Shed excess weight",
        "Boost energy",
        "Enhance vitamin levels and absorption",
        "Accelerate post-workout recovery",
        "Elevate adrenal gland function: A well-functioning adrenal gland enhances metabolism",
        "Enhance sleep quality: Adequate sleep is as vital as exercise in weight loss",
      ],
      ingredients: [
        "Vitamin B Complex",
        "Vitamin B12",
        "Vitamin C",
        "Glutathione",
        "L-carnitine",
        "MIC Shot",
      ],
      route: "iv-weight-loss",
      buttonText: "Learn More",
      expandedContent:
        "Our IV Weight Loss treatment is tailored to support your weight management goals. Alongside a balanced diet and regular exercise, this infusion boosts metabolism, aids in the detoxification process, and provides essential nutrients that promote fat burning. The ingredients have been handpicked to ensure you get the maximum benefits, helping you inch closer to your desired physique.",
    },
    {
      key: 8,
      title: "IV Fitness and Recovery",
      price: "$250",
      content: "Optimizes workout performance and accelerates recovery.",
      imgLink:
        "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697335407/IV_FITNESS_RECOVERY_euceug.jpg",

      benefits: [
        "Increase energy",
        "Relieve stress",
        "Combat fatigue",
        "Boost energy",
        "Elevate mood",
        "Enhance mental clarity",
        "100% nutrient absorption",
        "Ideal for both professional and amateur athletes, as well as business travelers",
      ],
      ingredients: [
        "IV Fluid",
        "Vitamin B Complex",
        "High-Dose Magnesium",
        "MIC",
        "Vitamin C",
        "Vitamin C",
        "Taurine",
        "Zinc",
        "B12",
      ],
      route: "iv-fitness-recovery",
      buttonText: "Learn More",
      expandedContent:
        "IV Fitness and Recovery is a favorite among athletes and fitness enthusiasts. The infusion provides a potent mix of amino acids, electrolytes, and vitamins, designed to optimize workout performance and speed up post-exercise recovery. By improving muscle function, reducing inflammation, and replenishing lost nutrients, this treatment ensures you're always in peak condition.",
    },
    // {
    //   key: 9,
    //   title: "IV Prenatal",
    //   price: "$250",
    //   content: "Nutritional support tailored for expectant mothers.",
    //   benefits: [
    //     "Improve mental sharpness",
    //     "Enhance energy levels",
    //     "Eliminate stress",
    //     "Boost immunity",
    //     "Enhance cognitive strength",
    //     "Improve muscle function and strength",
    //     "Target anti-aging",
    //     "Detox",
    //   ],
    //   ingredients: [
    //     "Vitamin B Complex",
    //     "Vitamin B12",
    //     "Vitamin C",
    //     "Glutathione",
    //     "L-carnitine",
    //     "Additional Vitamins",
    //     "Anti-inflammatory",
    //   ],
    //   route: "iv-prenatal",
    //   buttonText: "Learn More",
    //   expandedContent:
    //     "IV Prenatal has been carefully crafted to support expectant mothers during their pregnancy journey. Providing a balanced mix of vitamins and minerals, this infusion caters to the unique nutritional needs of pregnant women. It promotes optimal fetal development, reduces fatigue and nausea, and ensures the mother remains in optimal health. Safety and well-being are paramount, and this treatment offers both in abundance.",
    // },
    {
      key: 10,
      title: "NAD+",
      price: "$500",
      content:
        "NAD+ IV treatment stands at the forefront of cellular rejuvenation therapies.",
      imgLink:
        "https://res.cloudinary.com/dcgh3ljwk/image/upload/v1697335408/NAD_PLUS_xm5uqr.jpg",

      benefits: [
        "Prevent age-related and neurodegenerative disorders",
        "Enhance mental clarity",
        "Reduce withdrawal symptoms and promote recovery from drug and alcohol abuse/addiction",
        "Improve metabolic function",
        "Boost kidney function",
        "Improve muscle function",
        "Enhance energy levels",
        "Retain cognitive and sensory function",
        "Combat constant stress levels",
        "Improve sleep",
        "Reduce Inflammation",
        "Clear brain fog",
        "Improve athletic performance",
      ],
      ingredients: [],
      route: "nad",
      buttonText: "Learn More",
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
            <div
              onClick={markImageCardAsSeen}
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="App">
                <NavBar
                  data={data}
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

                  {!hasSeenImageCard && (
                    <ImageCard hydrationMenuRef={hydrationMenuRef} />
                  )}

                  <Routes>
                    <Route
                      path="/"
                      element={<Menu dataArray={data} />}
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
                </div>
                <Footer />
              </div>
            </div>
          </ThemeProviderWrapper>
        </Router>
      </ScrollProvider>
    </LocalizationProvider>
  );
}

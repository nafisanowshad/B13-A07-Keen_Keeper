import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./navbar/Navbar";
import HeroSection from "./heroSection/HeroSection";
import FriendsSection from "./friendsSection.jsx/FriendsSection";
import Footer from "./footer/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Navbar/>
   <HeroSection/>
   <FriendsSection person></FriendsSection>
   <Footer/>
  </StrictMode>,
);

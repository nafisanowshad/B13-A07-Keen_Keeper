import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import FriendsSection from "./components/friendsSection.jsx/FriendsSection";
import Footer from "./components/footer/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Navbar/>
   <HeroSection/>
   <FriendsSection person></FriendsSection>
   <Footer/>
  </StrictMode>,
);

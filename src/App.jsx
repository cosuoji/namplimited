import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSplit from "./components/sections/HeroSplit";
import StatsGrid from "./components/sections/StatsGrid";
import ProduceGallery from "./components/sections/ProduceGallery";
import AboutUs from "./components/sections/AboutUs";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen selection:bg-ag-lime selection:text-ag-dark">
      <Navbar />
      <main>
        <HeroSplit />
        <StatsGrid />
        <AboutUs />
        <ProduceGallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

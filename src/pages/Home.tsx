import React from "react";

import Footer from "../components/Footer";
import { CurrencyConverter } from "../layout/currencyConverter/CurrencyConverter";
import HeroSection from "../layout/HeroSection";
const Home = () => {
  return (
    <div className="w-full h-full mx-auto   ">
      <HeroSection />
      <CurrencyConverter />
      <Footer />
    </div>
  );
};

export default Home;

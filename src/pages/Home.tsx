import React from "react";

import { CurrencyConverter } from "../layout/currencyConverter/CurrencyConverter";
import HeroSection from "../layout/HeroSection";
const Home = () => {
  return (
    <div className="w-full h-full mx-auto   ">
      <HeroSection />
      <CurrencyConverter />     
    </div>
  );
};

export default Home;

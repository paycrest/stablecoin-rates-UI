import React from "react";
import heroLogo from "../assets/paycrest.svg";

const HeroPage: React.FC = () => {
  return (
    <div className="flex my-2 justify-center text-center flex-col items-center">
      <div>
        <img src={heroLogo} alt="hero" className="w-[60px]" />
      </div>

      <div className="text-[#e7dddd] text-3xl mt-[50px] leading-12">
        <h1>
          Your only <span className=" text-white font-crimson">Stablecoin</span>
        </h1>
        <p>
          rate converter to{" "}
          <span className=" text-white font-crimson">any fiat</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default HeroPage;

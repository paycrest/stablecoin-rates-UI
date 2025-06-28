import React from "react";
import Image from "next/image";
import clsx from "clsx"

interface HeroSectionProps {
  className?: string
}
const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <div className={clsx(className, "flex my-2 justify-center text-center flex-col items-center")}>
      <div>
        <Image src='/paycrest.svg' alt="hero" className="w-[6rem]" width={120} height={120} />
      </div>

      <div className="text-hero-text text-3xl mt-[5rem] leading-12">
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

export default HeroSection;

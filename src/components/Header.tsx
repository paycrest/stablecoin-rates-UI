import React from "react";
import logo from "../assets/logo/logo.svg";


const Header: React.FC = () => {
    return (
        <header className="w-full h-[60px] flex flex-row items-center justify-between gap-7 bg-[#444444] py-5 px-7 md:px-20">


            <img
                src={logo}
                alt="logo"
                className="w-[120px] h-[13.26px] object-contain cursor-pointer"
            />

            <a
                href="#"
                className="text-[#FFFFFF80] font-medium text-base hover:text-[#FFFFFF] active:text-[#FFFFFF] transition duration-200 ease-in-out"
            >
                For Developers
            </a>
        </header>
    );
};

export default Header;

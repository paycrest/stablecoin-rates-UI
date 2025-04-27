import React from "react";
import logo from "../assets/logo/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="w-full h-[6rem] flex flex-row items-center justify-between gap-7 py-5 px-7 md:px-20">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-[12rem] h-[1.32rem] object-contain cursor-pointer"
        />
      </Link>

      <Link
        to="developers"
        className={` ${
          pathname.includes("developers") ? "text-white" : "text-white-dull"
        } text-[1.6rem] font-medium text-base hover:text-white active:text-white transition duration-200 ease-in-out`}
      >
        For Developers
      </Link>
    </header>
  );
};

export default Header;

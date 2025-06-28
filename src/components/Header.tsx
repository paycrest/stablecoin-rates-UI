"use client";

import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-[6rem] flex flex-row items-center justify-between gap-7 py-5 px-7 md:px-20">
      <Link href="/">
        <Image
          src="/logo/logo.svg"
          alt="logo"
          width={120}
          height={120}
          className="w-[12rem] h-[1.32rem] object-contain cursor-pointer"
        />
      </Link>

      <Link
        href="/developers"
        className={` ${
          pathname?.includes("developers") ? "text-white" : "text-white-dull"
        } text-[1.4rem] font-medium text-base hover:text-white active:text-white transition duration-200 ease-in-out`}
      >
        For Developers
      </Link>
    </header>
  );
};

export default Header;

import { FileCode, House } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export function HeaderDeveloper() {
  return (
    <section>
      <div className="md:max-w-[45.5rem] md:w-1/2 w-[90%] mx-auto pt-7 pb-9">
        <div className="flex text-white/50 gap-4 text-[1.2rem] items-center pb-9">
          <Link href="/">
            <div className="flex items-center gap-2">
              <img className="w-[1rem]" src="https://res.cloudinary.com/dfkuxnesz/image/upload/v1752207507/home-02_jowscj.svg" />
              Home
            </div>
          </Link>

          <span className="text-[1.2rem]">/</span>
          <div className="flex items-center gap-2">
            <img className="w-[1rem]" src="https://res.cloudinary.com/dfkuxnesz/image/upload/v1752207507/elements_dadnep.svg" />
            Docs
          </div>
        </div>

        <h3 className="text-white text-[1.67rem] font-medium">For Developers</h3>
        <p className="text-white/50 text-[1.16667rem]">
          Base URL: https://api.rates.noblocks.xyz/
        </p>
        <h3 className="text-white text-[1.5rem] font-medium pt-4">
          REST API Schema and Endpoint
        </h3>
      </div>
    </section>
  );
}

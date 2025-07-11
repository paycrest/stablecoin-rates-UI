import { FileCode, House } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export function HeaderDeveloper() {
  return (
    <section>
      <div className="md:max-w-[54.6rem] md:w-1/2 w-[90%] mx-auto pt-7 pb-9">
        <div className="flex text-white/50 gap-4 text-[1.2rem] items-center pb-9">
          <Link href="/">
            <div className="flex items-center gap-2">
              <House className="w-[1.4rem]" />
              Home
            </div>
          </Link>

          <span className="text-[1.2rem]">/</span>
          <div className="flex items-center gap-2">
            <FileCode className="w-[1.4rem]" />
            Docs
          </div>
        </div>

        <h3 className="text-white text-[2rem] font-medium">For Developers</h3>
        <p className="text-white/50 text-[1.16667rem]">
          Get rate data https://api.rates.noblocks.xyz/
        </p>
        <h3 className="text-white text-[1.5rem] font-medium pt-4">
          REST API Schema and Enpoint
        </h3>
      </div>
    </section>
  );
}

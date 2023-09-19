import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { PiInstagramLogoLight, PiGithubLogo } from "react-icons/pi";

export default function FooterSecond() {
  return (
    <div className="text-center mt-32 space-y-8 ">
      <div className="space-y-4">
        <p className="text-lg text-[#22D3EE] font-semibold">
          Find me on social media
        </p>
        <div className="text-[#90C1CE] flex justify-center gap-x-4">
          <Link
            href={"https://www.linkedin.com/in/firdi-audi/"}
            target="no_blank"
          >
            <CiLinkedin
              className="hover:text-[#22D3EE] cursor-pointer transition-all"
              size={32}
            />
          </Link>
          <Link href={"https://github.com/bruteforce10"} target="no_blank">
            <PiGithubLogo
              className="hover:text-[#22D3EE] cursor-pointer transition-all"
              size={32}
            />
          </Link>
          <Link
            href={"https://www.instagram.com/firdi_audi/"}
            target="no_blank"
          >
            <PiInstagramLogoLight
              className="hover:text-[#22D3EE] cursor-pointer transition-all"
              size={32}
            />
          </Link>
        </div>
      </div>

      <div className="text-[#90C1CE]/70 text-md">
        <p>© 2023 - Firdi Audi Putra. All rights reserved.</p>
        <p>Made with ❤️ in Indonesia.</p>
      </div>
    </div>
  );
}

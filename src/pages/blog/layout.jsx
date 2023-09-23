import NavbarBlog from "@/components/NavbarBlog";
import FooterSecond from "@/components/footer-second";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-[#071F2C] min-h-screen pb-[50px]">
      <NavbarBlog />
      <main className="mt-[3.2rem] max-w-[1120px] mx-auto px-6">
        {children}
      </main>
      <FooterSecond />
    </div>
  );
}

import NavbarBlog from "@/components/NavbarBlog";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-[#071F2C] min-h-screen pb-[50px]">
      <NavbarBlog />
      <main className="mt-[4rem] max-w-[1120px] mx-auto px-8">{children}</main>
    </div>
  );
}

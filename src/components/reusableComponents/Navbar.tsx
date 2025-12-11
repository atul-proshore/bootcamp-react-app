"use client";

import { useState } from "react";
import Image from "next/image";
import ButtonComp, { ButtonTypes } from "./ButtonComp";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <header className="w-full bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="De Heus Logo" width={48} height={48} />
          <span className="text-lg font-semibold text-[#006FB7]">de heus</span>
        </div>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <ButtonComp
            name="Login"
            btnColor="blue"
            className="px-6 py-2.5 text-base font-semibold text-white rounded-full"
            type={ButtonTypes.button}
          />
        </div>
      </nav>
    </header>
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Navbar Component Demo
        </h1>
        <p className="mt-4 text-gray-600">
          This page demonstrates the navbar component. The navbar is displayed
          at the top of the page.
        </p>
      </div>
      </>
  );
}

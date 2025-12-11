"use client";

import Link from "next/link";
import { useState } from "react";
import type { FC } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ButtonComp from "./ButtonComp";

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="mx-auto px-4 h-24 flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <div className="w-20 md:w-32 h-auto">
              <Image
                src="/de-heus-logo.webp"
                alt="Logo"
                width={129}
                height={117}
                priority
                className="w-full h-auto"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex text-xl font-bold items-center gap-8">
            <Link
              href="/"
              className="text-[#1C1B1B] hover:text-[#97BE0D] transition relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#97BE0D] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/about"
              className="text-[#1C1B1B] hover:text-[#97BE0D] transition relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#97BE0D] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <ButtonComp
              name="Login"
              btnColor="blue"
              className="px-8 py-3 text-xl rounded-md"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white text-xl font-bold border-t overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 mt-4 px-4">
            <Link
              href="/"
              className="text-[#1C1B1B] hover:text-green-700 transition"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[#1C1B1B] hover:text-green-700 transition"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>

            <ButtonComp
              name="Login"
              className="bg-[#006FB7] hover:bg-[#005C98] text-white px-5 py-2 rounded-md"
            />
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-2xl font-bold text-gray-800">
          Navbar Component Demo
        </h1>
        <p className="mt-4 text-gray-600">
          This page demonstrates the navbar component with smooth mobile
          animation.
        </p>
      </div>
    </>
  );
};

export default Navbar;

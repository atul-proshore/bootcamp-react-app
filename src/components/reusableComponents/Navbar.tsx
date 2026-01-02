'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { FC } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import ButtonComp from './ButtonComp';

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
        <div className="mx-auto flex h-24 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/">
            <div className="w-20 md:w-32">
              <Image
                src="/de-heus-logo.webp"
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 text-base font-bold md:flex">
            <Link
              href="/"
              className="group relative text-[#1C1B1B] transition hover:text-[#97BE0D]"
            >
              <span className="deheus-text-primary">Home</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#97BE0D] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/about"
              className="group relative text-[#1C1B1B] transition hover:text-[#97BE0D]"
            >
              About Us
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#97BE0D] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href={'/login'}>
              <ButtonComp
                name="Login"
                className="rounded-md bg-[#006FB7] px-5 py-2 text-white hover:bg-[#005C98]"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-gray-700 focus:outline-none md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden border-t bg-white font-bold transition-all duration-300 md:hidden ${
            open ? 'max-h-96 py-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-4 flex flex-col gap-4 px-4">
            <Link
              href="/"
              className="text-[#1C1B1B] transition hover:text-green-700"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[#1C1B1B] transition hover:text-green-700"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <Link href={'/login'}>
              <ButtonComp
                name="Login"
                className="rounded-md bg-[#006FB7] px-5 py-2 text-white hover:bg-[#005C98]"
              />
            </Link>
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

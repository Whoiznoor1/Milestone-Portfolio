"use client";
import { useState } from "react";

import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-black sticky top-0">
      <div className="h-14 flex justify-between items-center w-[95%] m-auto">
        <div className="text-white font-serif text-3xl font-bold">
          <h1 className="sarina-regular text-red-400 font-extrabold">
            {" "}
            Noor Un Nisa
          </h1>
        </div>

        <ul className="hidden sm:flex gap-10 text-white font-bold">
          <li className="itim-regular">
            <Link href="/" className="hover:text-red-400">
              Home
            </Link>
          </li>
          <li className="itim-regular">
            <Link href="#about" className=" hover:text-red-400">
              About
            </Link>
          </li>

          <li className="itim-regular">
            <Link href="#projects" className="hover:text-red-400">
              Projects
            </Link>
          </li>
          <li className="itim-regular">
            <Link href="#contact" className="hover:text-red-400">
              Contact
            </Link>
          </li>
        </ul>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-black text-white font-bold py-4">
          <ul className="flex flex-col items-center gap-4">
            <li className="itim-regular">
              <Link href="#home" className="hover:text-red-400">
                Home
              </Link>
            </li>
            <li className="itim-regular">
              <Link href="#about" className="hover:text-red-400">
                About
              </Link>
            </li>
            <li className="itim-regular">
              <Link href="#projects" className="hover:text-red-400">
                Projects
              </Link>
            </li>
            <li className="itim-regular">
              <Link href="#contact" className="hover:text-red-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

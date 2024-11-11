import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center justify-between">
        <Link
          href="/"
          className="flex items-center title-font font-medium text-white"
        >
          <span className="text-9xl -mt-24 text-red-500">.</span>
          <span className="ml-3 text-xl">My Portfolio</span>
        </Link>

        <p className="text-sm text-white text-center sm:text-left mt-4 sm:mt-0">
          © 2024 Portfolio —
          <Link
            href="mailto:murkmyman@gmail.com"
            className="text-blue-300 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            murkmyman5@gmail.com
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

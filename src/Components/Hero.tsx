"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center"
    >
      <div className="flex flex-col justify-center px-8 py-10 md:py-20 md:px-20 md:w-1/2">
        <h1 className="font-mono font-extrabold text-2xl sm:text-3xl md:text-4xl">
          Hi There! I am
        </h1>
        <h1 className="font-mono font-extrabold text-4xl sm:text-5xl md:text-6xl mt-2">
          Frontend
          <Typewriter
            options={{
              strings: ["Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div
          className="text-lg sm:text-2xl md:text-4xl mt-4 md:mt-6 leading-relaxed"
          data-aos="fade-down-right"
        >
          <p className="font-light">
            Transforming possibilities <br className="hidden md:block" />
            into realities through <br className="hidden md:block" />
            intelligent design!
          </p>
        </div>

        <div className="mt-8 md:mt-12">
          <a href="/CV.pdf" target="_blank">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download My CV
              </span>
            </button>
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center md:w-1/2 mt-10 md:mt-0 p-4">
        <Image
          src={"/bg.jpg"}
          alt="background image"
          width={500}
          height={500}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      style={{ backgroundColor: "rgb(10, 10, 10)" }}
      className="text-white p-6 md:p-8 lg:p-10 min-h-screen flex flex-col items-center"
    >
      <div className="flex justify-center mt-16 md:mt-20 lg:mt-24">
        <h1 className="coiny-regular -4xl md:text-5xl lg:text-6xl text-red-400">
          About Me
        </h1>
      </div>

      <div className="flex justify-center text-lg md:text-xl lg:text-2xl font-mono mt-4">
        <h1>Professional Profile - All About Me</h1>
      </div>

      <div className="flex justify-center text-6xl md:text-8xl lg:text-9xl text-red-400 mt-2">
        <h1>.....</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start mt-12 md:mt-16 space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex justify-center md:justify-start">
          <Image
            src={"/bg.jpg"}
            alt="my image"
            width={300}
            height={300}
            className="w-48 h-48 sm:w-60 sm:h-60  rounded-full md:hidden lg:hidden xl:hidden 2xl:bloc"
          />
        </div>

        <div className="text-center md:text-left md:-mt-10 lg:-mt-16">
          <h1 className="text-red-400 text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold underline underline-offset-8 decoration-red-400 md:px-12 ">
            I am Noor Un Nisa
          </h1>
          <p className="itim-regular  mt-4 text-sm md:text-base lg:text-lg leading-relaxed md:px-12">
            I am a front-end developer with proficiency in HTML, CSS, Tailwind
            CSS, TypeScript, and Next.js. Currently, I am a student at the{" "}
            <i>Governor Sindh Initiative for Cloud Applied Generative AI </i> 
            where I am expanding my knowledge in cutting-edge AI technologies.
            With a keen interest in artificial intelligence, I am passionate
            about building visually engaging and intuitive user interfaces. My
            goal is to leverage my technical skills and creativity to develop
            seamless web experiences and stay at the forefront of modern web
            development and AI innovations.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:justify-start text-red-400 mt-12 text-sm sm:text-base md:text-lg lg:text-xl space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex items-center">
          <span className="font-bold">Date of Birth: </span> 25<sup>th</sup> {" "}  
          April 2006
        </div>
        <div className="flex items-center">
          <span className="font-bold">  Nationality: </span>    Pakistani
        </div>
      </div>
    </div>
  );
};

export default About;







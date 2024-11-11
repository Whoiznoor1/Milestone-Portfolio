import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl coiny-regular text-white mb-4">
        Projects
      </h1>

      <div className="text-center text-md sm:text-lg md:text-xl text-red-400 font-mono mb-4">
        Showcasing My Work
      </div>

      <div className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-8">
        <h1>.....</h1>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src={'/P1.png'}
              alt="Project 1"
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
            <p className="mt-4 text-white itim-regular text-sm sm:text-base lg:text-lg">
              Presenting my Static Resume Builder: a sleek, interactive tool crafted with HTML, CSS, and TypeScript to effortlessly showcase personal and professional details in a well-organized, visually appealing layout. Tailored for simplicity and style!
            </p>
            <Link
              href="https://hackathon-milestone-1-and-2-by-noor-un-nisa.vercel.app/"
              className="itim-regular text-blue-300 mt-4 inline-block text-sm sm:text-base"
            >
              View Project 1
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src={'/P2.png'}
              width={500}
              height={300}
              alt="Project 2"
              className="w-full h-auto object-cover rounded-lg"
            />
            <p className="mt-4 text-white itim-regular text-sm sm:text-base lg:text-lg">
              I developed a lightweight, interactive Static Resume Builder using HTML, CSS, and TypeScript. This tool enables users to effortlessly create a professional resume by inputting their personal and professional details, which are then dynamically displayed in a clean, visually appealing format.
            </p>
            <Link
              href="https://hackathon-milestone-3-4-and-5-by-noor-un-nisa.vercel.app/"
              className="itim-regular text-blue-300 mt-4 inline-block text-sm sm:text-base"
            >
              View Project 2
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

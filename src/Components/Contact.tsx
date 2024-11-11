import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen text-white flex flex-col items-center py-12 px-4 sm:px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: "rgb(10, 10, 10)" }}
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-24 sm:mt-32 coiny-regular text-red-400">
          Contact Me
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-mono mt-4">
          You can reach out to me through
        </p>
        <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-red-400 mt-4">
          <h1>.....</h1>
        </div>
      </div>

      <div className="flex flex-col space-y-8 max-w-md md:max-w-lg lg:max-w-xl w-full mt-10">
        <ul className="space-y-8 text-center">
          <li className="itim-regular flex flex-col items-center">
            <a
              href="mailto:murkmyman5@gmail.com"
              className="text-blue-300 flex items-center space-x-2 text-lg sm:text-xl md:text-2xl"
            >
              <span>Email</span>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2">
              Reach out to me directly through email for any inquiries or
              connections!
            </p>
          </li>

          <li className="itim-regular flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/noor-un-nisa-b4301a315/"
              className="text-blue-600 flex items-center space-x-2 text-lg sm:text-xl md:text-2xl"
            >
              <span>LinkedIn</span>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2">
              You can easily connect with me on LinkedIn for professional
              discussions and networking!
            </p>
          </li>

          <li className="itim-regular flex flex-col items-center">
            <a
              href="https://github.com/Whoiznoor1"
              className="text-slate-600 flex items-center space-x-2 text-lg sm:text-xl md:text-2xl"
            >
              <span>GitHub</span>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2">
              Feel free to connect with me on GitHub for collaborations or to
              explore my projects!
            </p>
          </li>

          <li className="itim-regular flex flex-col items-center">
            <a
              href="https://www.npmjs.com/~murk_myman"
              className="text-red-600 flex items-center space-x-2 text-lg sm:text-xl md:text-2xl"
            >
              <span>Npm</span>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2">
              Catch me on npm for my packages, collaborations, or project
              discussions!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

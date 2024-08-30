import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative mx-auto flex h-[50dvh] w-full max-w-7xl flex-col pt-20 md:h-[75dvh] md:pt-0 lg:h-[100dvh] lg:flex-row">
      <div className="z-20 flex h-full w-full flex-col items-center justify-center space-y-8 lg:w-1/2">
        <div className="text-5xl font-medium sm:text-6xl md:text-7xl lg:text-8xl">
          <div className="flex items-baseline gap-[2px]">
            Sh
            <div className="h-6 w-16 rounded-full border-4 border-orange-600 sm:h-8 sm:w-20 md:h-10 md:w-28"></div>
            es
          </div>
          <div>Collect!</div>
        </div>
        <div className="flex w-4/5 flex-col items-center space-y-4 sm:w-2/3 sm:flex-row sm:space-x-4 sm:space-y-0">
          <p className="text-center text-gray-800 sm:text-left lg:text-gray-500">
            {/* Discover our stylish and comfortable shoes, perfect for every
              occasion and need. */}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
            deleniti aut non perspiciatis excepturi.
          </p>

          <a className="z-[1]">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-fit text-nowrap rounded-full bg-orange-600 px-6 py-3 font-semibold text-white"
            >
              Shop Now
            </motion.button>
          </a>
        </div>
        {/* <div className="w-4/5 sm:w-2/3">
          <div className="h-8 w-28 rounded-full border border-gray-500 sm:h-12 sm:w-40"></div>
        </div> */}
      </div>
      <div className="absolute flex h-full w-full items-center justify-center overflow-clip lg:relative lg:w-1/2">
        <div className="relative flex items-center justify-center">
          <div className="absolute z-[9] h-[250px] w-[250px] rounded-full bg-[#fdeee9] sm:h-[350px] sm:w-[350px] md:h-[425px] md:w-[425px]"></div>
          <img
            className="relative -left-5 z-10 w-[375px] -rotate-30 sm:w-[500px] lg:-left-10 lg:w-[675px]"
            src="./assets/heroImg.png"
            alt="heroImg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relativ mx-auto flex h-screen w-full max-w-7xl">
      <div className="flex h-full w-1/2 flex-col items-center justify-center space-y-8">
        <div className="text-8xl font-medium">
          <div className="flex items-baseline gap-[2px]">
            Sh
            <div className="h-10 w-28 rounded-full border-8 border-orange-600"></div>
            es
          </div>
          <div>Collect !</div>
        </div>
        <div className="flex w-2/3 space-x-4">
          <p className="font-base text-gray-500">
            {/* Discover our stylish and comfortable shoes, perfect for every
              occasion and need. */}
            Lorem ipsum dolor amet consectetur, adipisicing elit. Soluta,
            deleniti aut non perspiciatis excepturi.
          </p>

          <a className="z-[1]">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-fit w-fit text-nowrap rounded-full bg-orange-600 px-6 py-3 font-semibold text-white"
            >
              Shop Now
            </motion.button>
          </a>
        </div>
        <div className="w-2/3">
          <div className="h-12 w-40 rounded-full border border-gray-500"></div>
        </div>
      </div>
      <div className="relative flex h-full w-1/2 items-center justify-center overflow-clip">
        <div className="absolute left-24 top-24 -z-[11] h-[425px] w-[425px] rounded-full bg-[#fdeee9]"></div>
        <img
          className="relative -left-28 -top-2 -z-10 w-[675px] -rotate-30"
          src="./assets/heroImg.png"
          alt="heroImg"
        />
      </div>
      <div className="absolute left-0 top-0 z-0 h-full w-full"></div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="flex h-screen w-full bg-gray-100 p-10 px-32">
      <div className="flex h-full w-2/5 justify-center">
        <img
          className="h-full origin-top rounded-xl object-contain"
          src="./assets/shoeImg.png"
          alt=""
        />
      </div>
      <div className="h-full w-3/5">
        <div className="flex h-1/2 w-full flex-col gap-5 p-4">
          <h2 className="text-4xl font-bold">Why Choose Us</h2>
          <p className="text-justify text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            deserunt necessitatibus nisi culpa illo soluta dicta modi pariatur
            ex, vero, eum cum enim aliquam possimus sed molestias dolorum
            voluptatibus dolore?
          </p>
          <a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-fit w-fit text-nowrap rounded-full bg-orange-600 px-6 py-3 font-semibold text-white"
            >
              Shop Now
            </motion.button>
          </a>
        </div>
        <div className="h-1/2 w-full p-4 pb-0">
          <img
            className="h-full w-full rounded-md object-cover"
            src="https://as1.ftcdn.net/v2/jpg/08/75/89/40/1000_F_875894090_KEPJhqEk93divgIFZvlqsLUwNqSpDhzl.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

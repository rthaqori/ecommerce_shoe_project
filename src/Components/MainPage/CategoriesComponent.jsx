import React, { useState } from "react";
import { motion } from "framer-motion";

const CategoriesComponent = () => {
  const categoryList = [
    {
      id: 1,
      name: "Women's Shoes",
      Image: "./assets/WomensCollectionImg.webp",
    },
    {
      id: 2,
      name: "Men's Shoes",
      Image: "./assets/MensCollectionImg.webp",
    },
    {
      id: 3,
      name: "Collection",
      Image: "./assets/collectionImg.webp",
    },
  ];

  return (
    <div className="mx-auto my-20 flex max-w-7xl snap-x snap-mandatory grid-cols-3 overflow-x-scroll sm:grid-cols-2 md:grid md:gap-6 md:px-5 lg:grid-cols-3">
      {categoryList.map((category) => {
        return (
          <div className="shrink-0 basis-full snap-start" key={category.id}>
            <CategoryCard name={category.name} src={category.Image} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesComponent;

const CategoryCard = ({ name, src }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        initial={{ y: -40, opacity: 0 }}
        animate={isHovered ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        href=""
        className="absolute bottom-16 left-0 z-[1] hidden bg-white px-6 py-3 font-semibold uppercase tracking-wide transition-colors duration-150 ease-in hover:bg-orange-600 hover:text-white md:flex md:px-[30px] md:py-[15px]"
      >
        {name}
      </motion.a>
      <a
        href=""
        className="absolute bottom-16 left-0 z-[1] bg-orange-600 px-6 py-3 font-semibold uppercase tracking-wide text-white transition-colors duration-150 ease-in md:hidden md:px-[30px] md:py-[15px]"
      >
        {name}
      </a>
      <img
        className="h-auto w-full transition-transform duration-1000 ease-in group-hover:scale-105"
        src={src}
        alt={src}
      />
    </div>
  );
};

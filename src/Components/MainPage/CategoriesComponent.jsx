import React, { useState } from "react";
import { motion } from "framer-motion";

const CategoriesComponent = () => {
  const categoryList = [
    {
      id: 1,
      name: "Women's Shoes",
      Image: "assets/WomensCollectionImg.webp",
    },
    {
      id: 2,
      name: "Men's Shoes",
      Image: "assets/MensCollectionImg.webp",
    },
    {
      id: 3,
      name: "Collection",
      Image: "assets/collectionImg.webp",
    },
  ];
  return (
    <div className="mx-auto my-20 grid max-w-7xl grid-cols-3 gap-6 px-5">
      {categoryList.map((category) => {
        return (
          <div key={category.id}>
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
      className="group relative overflow-clip"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        initial={{ y: -40, opacity: 0 }}
        animate={isHovered ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        href=""
        className="absolute bottom-16 left-0 z-[1] bg-white px-[30px] py-[15px] font-semibold uppercase tracking-wide transition-colors duration-150 ease-in hover:bg-orange-600 hover:text-white"
      >
        {name}
      </motion.a>
      <img
        className="transition-transform duration-1000 ease-in group-hover:scale-105"
        src={src}
        alt={src}
      />
    </div>
  );
};

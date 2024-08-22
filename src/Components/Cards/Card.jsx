import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ id, name, priceInCents, colors = [], category }) => {
  const [currentImage, setCurrentImage] = useState(colors[0]?.images[0]);

  if (!id) {
    console.error("Product ID is not defined.");
    return null;
  }

  const colorsLength = colors.length;
  const currentColors = colors.slice(0, 4); // Always take the first 4 colors

  return (
    <Link to={`/product/${id}`} className="group h-fit cursor-pointer">
      <div className="bg-gray-100">
        <img
          className="aspect-square w-full object-contain"
          src={currentImage}
          alt={name}
        />
      </div>
      <div className="relative">
        <div className="py-1 text-card">
          <h2 className="font-semibold">{name}</h2>
          <div className="text-gray-500">
            <p>{category}</p>
            <p>
              <span>{colors.length} </span> Colors
            </p>
            <p className="mt-2 font-medium text-black">
              $<span>{priceInCents / 100}</span>
            </p>
          </div>
        </div>
        {colorsLength > 0 && (
          <div className="absolute left-0 top-0 hidden h-full w-full flex-col bg-white py-1 group-hover:flex">
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px]">
                {currentColors.map((item, index) => (
                  <div key={index} className="h-10 w-10">
                    <img
                      onMouseEnter={() => setCurrentImage(item.images[0])}
                      className="h-full w-full object-contain"
                      src={item.images[0]}
                      alt={name}
                    />
                  </div>
                ))}
              </div>
              {colorsLength > 4 && (
                <div className="text-sm text-gray-500">+{colorsLength - 4}</div>
              )}
            </div>
            <motion.p
              initial={{ opacity: 0.75, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 font-medium text-black"
            >
              $<span>{priceInCents / 100}</span>
            </motion.p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;

import React, { useState } from "react";

const ProductCard = ({
  name,
  description,
  priceInCents,
  tags,
  colors,
  sizes,
  images,
}) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  console.log(currentImage);
  return (
    <div className="rounded-md border">
      <img
        src={currentImage}
        alt={name}
        className="aspect-[16/9] w-full rounded-md md:aspect-auto"
      />
      <div className="flex flex-col p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {name}
        </h1>
        <p className="mt-2 line-clamp-2 overflow-hidden text-ellipsis text-sm text-gray-600">
          {description}
        </p>
        <div className="mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="mb-1 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Colors:</span>
          {colors.map((colorObj, index) => (
            <span
              key={index}
              className="block h-4 w-4 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: colorObj.color }}
              onClick={() => {
                setCurrentImage(colorObj.images[0]);
                console.log(colorObj.color);
              }} // Change image based on color
              title={colorObj.color} // Optional: Show color name on hover
            ></span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center space-x-2">
          <span className="block text-sm font-semibold">Sizes:</span>
          {sizes.map((sizeObj, index) => (
            <span
              key={index}
              className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium"
            >
              {sizeObj.size}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

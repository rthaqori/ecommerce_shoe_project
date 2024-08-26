import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";
import Data from "../JSON/Data.json";
import Breadcrumb from "../BreadCrumb/BreadCrumb";
import { addToCart, addToFavourite } from "../CartFunctions/CartFunction";

const ProductDetails = () => {
  const { id } = useParams();
  const product = Data.find((item) => item.id === id);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [bag, setBag] = useState(
    () => JSON.parse(localStorage.getItem("bag")) || [],
  );
  const [fav, setFav] = useState(
    () => JSON.parse(localStorage.getItem("fav")) || [],
  );
  const [error, setError] = useState("");

  if (!product) {
    return <div>Product not found</div>;
  }

  const selectedColor = product.colors[selectedColorIndex];
  const [currentImg, setCurrentImg] = useState(selectedColor.images[0]);

  const handleColorChange = (colorIndex) => {
    setSelectedColorIndex(colorIndex);
    setCurrentImg(product.colors[colorIndex].images[0]);
    setSelectedSize(null); // Reset selected size when color changes
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const availableSizes = selectedColor.sizes;
  const availableQuantity = selectedSize
    ? availableSizes.find((size) => size.size === selectedSize)
        ?.availableItems || 0
    : availableSizes.reduce((acc, size) => acc + size.availableItems, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-16">
      <div className="pt-8">
        <Breadcrumb />
      </div>
      <div className="flex gap-x-10 px-12 pb-10 pt-7 lg:pb-14 xl:gap-x-8 2xl:pb-20">
        <div className="min-h-full w-1/2">
          <div className="sticky top-10 mx-2 grid h-[555px] grid-cols-12 gap-4 p-2 pl-12">
            <div className="col-span-2 flex h-full snap-y snap-mandatory flex-col items-center gap-2 overflow-y-scroll py-[1px]">
              {selectedColor.images.map((img, index) => (
                <div
                  key={index}
                  className="max-h-[60px] min-h-[60px] min-w-[60px] max-w-[60px] cursor-pointer snap-start overflow-clip rounded-md bg-gray-100 outline-1 hover:outline"
                  onMouseEnter={() => setCurrentImg(img)}
                >
                  <img
                    src={img}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="col-span-10 h-full bg-gray-100">
              <img
                className="h-full w-full object-contain"
                src={currentImg}
                alt={product.name}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="mb-4 pb-5">
            <h2 className="text-heading text-lg font-medium md:text-xl lg:text-2xl 2xl:text-3xl">
              {product.name}
            </h2>
            <p className="text-body text-sm leading-6 lg:text-base lg:leading-8">
              {product.category}
            </p>
            <div className="mt-5 flex items-center">
              <div className="text-heading pr-2 text-base font-medium md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-3xl">
                ${product.priceInCents / 100}
              </div>
            </div>
          </div>
          <div className="mb-4 pb-3">
            <ul className="colors -mr-3 flex flex-wrap gap-2">
              {product.colors.map((color, colorIndex) => (
                <li
                  key={colorIndex}
                  className={`h-[60px] w-[60px] cursor-pointer overflow-clip rounded-md outline-1 hover:outline ${
                    selectedColorIndex === colorIndex ? "outline" : ""
                  }`}
                  onClick={() => handleColorChange(colorIndex)}
                >
                  <img
                    className="h-full w-full object-contain"
                    src={color.images[0]}
                    alt={product.name}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="pb-3">
            <div className="mb-4">
              <h3 className="text-heading mb-2.5 text-base font-medium capitalize md:text-lg">
                Select size
              </h3>
              <ul className="sizes -mr-3 flex flex-wrap">
                {availableSizes.map((size, sizeIndex) => (
                  <li
                    key={sizeIndex}
                    onClick={() => handleSizeClick(size.size)}
                    className={`text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ${
                      selectedSize === size.size
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                  >
                    {size.size}
                  </li>
                ))}
              </ul>
              <div className="text-base text-red-400">{error}</div>
              {selectedSize && (
                <div className="mt-2 text-sm">
                  <p>Available Quantity: {availableQuantity}</p>
                </div>
              )}
            </div>
          </div>
          <div className="space-s-4 3xl:pr-48 flex max-w-md flex-col items-center gap-2 md:pr-32 lg:pr-12 2xl:pr-32">
            <button
              onClick={() =>
                addToCart(
                  product,
                  selectedColor,
                  selectedSize,
                  bag,
                  setBag,
                  setError,
                )
              }
              type="button"
              className="w-full rounded-full bg-black px-3 py-4 text-lg font-medium text-white shadow-sm hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to cart
            </button>
            <button
              onClick={() =>
                addToFavourite(product, selectedColor, fav, setFav)
              }
              type="button"
              className="w-full rounded-full border border-gray-300 px-3 py-4 text-lg font-medium text-black shadow-sm transition-colors duration-300 ease-in-out hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Favorite <FavoriteBorderIcon fontSize="medium" />
            </button>
          </div>
          <div className="py-8">
            <ul className="space-y-5 pb-1 text-sm">
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">
                  SKU:
                </span>
                {product.sku || "NaN"}
              </li>
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">
                  Category:
                </span>
                {product.category}
              </li>
              <li className="productTags">
                <span className="text-heading inline-block pr-2 font-semibold">
                  Tags:
                </span>
                {product.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block after:content-[','] last:after:content-['']"
                  >
                    {tag}
                  </span>
                )) || "No Tags"}
              </li>
            </ul>
          </div>
          <div className="shadow-sm">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Product Details
              </h2>
              <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                <div className="bg-heading h-0.5 w-full rounded-sm"></div>
                <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out"></div>
              </div>
            </header>
            <div>
              <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                {product.description}
              </div>
            </div>
          </div>
          <div>
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Additional Information
              </h2>
            </header>
          </div>
          <div>
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                About The Brand
              </h2>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

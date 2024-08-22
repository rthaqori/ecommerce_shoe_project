import React, { useRef } from "react";
import ProductCard from "../Cards/ProductCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Data from "../JSON/Data.json";
import Card from "../Cards/Card";

const BestSeller = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Use only the first 10 products
  const productsToShow = Data.slice(0, 10);

  return (
    <div className="mx-auto max-w-7xl p-5 pr-0">
      <div className="flex items-center justify-between pr-20">
        <h1 className="text-4xl font-bold">Best Seller</h1>
        <div className="space-x-4">
          <button
            className="h-fit w-fit rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-300"
            onClick={scrollLeft}
          >
            <ChevronLeftIcon fontSize="large" />
          </button>
          <button
            className="h-fit w-fit rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-300"
            onClick={scrollRight}
          >
            <ChevronRightIcon fontSize="large" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="mx-auto my-5 flex w-full max-w-7xl snap-x items-center gap-3 overflow-x-scroll px-2 pr-10"
      >
        {productsToShow.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] max-w-[250px] snap-start"
          >
            <Card
              id={product.id}
              name={product.name}
              priceInCents={product.priceInCents}
              colors={product.colors}
              category={product.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

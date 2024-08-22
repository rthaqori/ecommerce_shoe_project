import React, { useState } from "react";
import Filter from "./Filter";
import Card from "../Cards/Card";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Data from "../JSON/Data.json";
import Breadcrumb from "../BreadCrumb/BreadCrumb";

const Shop = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    colors: [],
    sizes: [],
    price: [],
  });
  const productsPerPage = 12;

  // Function to update the selected filters
  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    setCurrentPage(1); // Reset to the first page when filters change
  };

  // Function to filter products based on selected filters
  const filterProducts = (product) => {
    const { categories, colors, sizes, price } = selectedFilters;

    const matchesCategory = categories.length
      ? categories.includes(product.category)
      : true;

    const matchesColor = colors.length
      ? product.colors.some((color) => {
          const colorArray = Array.isArray(color.color)
            ? color.color
            : [color.color];
          return colorArray.some((col) => colors.includes(col));
        })
      : true;

    const matchesSize = sizes.length
      ? product.colors.some((color) =>
          color.sizes.some((size) => sizes.includes(size.size.toString())),
        )
      : true;

    const matchesPrice = price.length
      ? price.some((priceRange) => {
          const priceInDollars = product.priceInCents / 100;
          if (priceRange === "$0 - $49") return priceInDollars < 50;
          if (priceRange === "$50 - $99")
            return priceInDollars >= 50 && priceInDollars < 100;
          if (priceRange === "$100 - $199")
            return priceInDollars >= 100 && priceInDollars < 200;
          if (priceRange === "$200+") return priceInDollars >= 200;
          return false;
        })
      : true;

    return matchesCategory && matchesColor && matchesSize && matchesPrice;
  };

  // Filter the products before pagination
  const filteredProducts = Data.filter(filterProducts);

  // Logic to calculate total page numbers based on filtered products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Logic to determine the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  return (
    <div className="mb-10 pt-16">
      <div className="px-4 pt-4">
        <Breadcrumb />
      </div>
      <div className="w-full p-5">
        <div className="flex w-full items-center justify-end px-10 py-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mb-4 ml-2 flex items-center gap-1 border border-black px-5 py-2 font-semibold tracking-wide transition-colors duration-300 ease-in-out hover:border-orange-600 hover:bg-orange-600 hover:text-white"
          >
            <FilterAltIcon /> Filter
          </button>
        </div>
        <div className="relative flex">
          <div
            className={`${
              isOpen ? "w-1/5" : "w-0"
            } min-h-full overflow-clip transition-all duration-300 ease-in-out`}
          >
            <div className="sticky top-0 p-2">
              <Filter onFilterChange={handleFilterChange} />
            </div>
          </div>
          <div
            className={`${
              isOpen ? "w-4/5" : "w-full"
            } grid h-full grid-cols-4 gap-2 p-2 transition-all duration-300 ease-in-out`}
          >
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <div key={product.id}>
                  <Card
                    id={product.id}
                    name={product.name}
                    priceInCents={product.priceInCents}
                    colors={product.colors}
                    category={product.category}
                  />
                </div>
              ))
            ) : (
              <p>No products found matching your filters.</p>
            )}
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`mx-1 border px-3 py-1 ${
                  currentPage === number
                    ? "bg-gray-500 text-white"
                    : "bg-white text-gray-500"
                }`}
              >
                {number}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;

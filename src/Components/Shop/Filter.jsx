import React, { useState } from "react";
import Data from "../JSON/Data.json";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Filter = ({ onFilterChange }) => {
  // Aggregating categories, colors, and sizes from all products
  const allCategories = [...new Set(Data.map((product) => product.category))];
  const allColors = [
    ...new Set(
      Data.flatMap((product) => product.colors.flatMap((color) => color.color)),
    ),
  ];

  console.log(allColors);
  const allSizes = [
    ...new Set(
      Data.flatMap((product) =>
        product.colors.flatMap((color) =>
          color.sizes.map((size) => size.size.toString()),
        ),
      ),
    ),
  ];

  const filters = [
    { type: "categories", values: allCategories },
    { type: "colors", values: allColors },
    { type: "sizes", values: allSizes },
    {
      type: "price",
      values: ["$0 - $49", "$50 - $99", "$100 - $199", "$200+"],
    }, // Static price range for example
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    colors: [],
    sizes: [],
    price: [],
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevState) => {
      const isSelected = prevState[filterType].includes(value);
      const updatedFilters = isSelected
        ? prevState[filterType].filter((item) => item !== value)
        : [...prevState[filterType], value];

      const newFilters = {
        ...prevState,
        [filterType]: updatedFilters,
      };

      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const filterLists = filters.map((filter, index) => {
    const filterType = filter.type;
    const filterItems = filter.values;
    const isRow = filterType === "colors" || filterType === "sizes";

    return (
      <div key={filterType}>
        <div>
          <h2 className="mb-2 text-xl font-semibold uppercase text-black">
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </h2>
        </div>
        <ul
          className={`flex flex-wrap ${
            isRow ? "flex-row gap-2" : "flex-col gap-1"
          } mb-2 max-h-96 opacity-100 transition-all duration-300`}
        >
          {filterItems.map((item, itemIndex) => {
            const isChecked = selectedFilters[filterType].includes(item);

            let valueContent;
            if (filterType === "colors") {
              valueContent = (
                <div
                  className={`my-2 h-6 w-6 cursor-pointer rounded-full border border-gray-400 transition-all duration-300 ease-in-out ${
                    isChecked
                      ? "mx-[2px] ring-2 ring-gray-400 ring-offset-2"
                      : ""
                  }`}
                  style={{ backgroundColor: item }}
                ></div>
              );
            } else if (filterType === "sizes") {
              valueContent = (
                <div
                  className={`group my-2 flex h-8 w-8 cursor-pointer items-center justify-center border-2 p-4 px-6 transition-colors duration-200 ease-in-out ${
                    isChecked ? "border-orange-600" : "border-gray-300"
                  } rounded-lg`}
                >
                  <span
                    className={`text-sm ${isChecked ? "font-bold text-orange-600" : ""} text-lg uppercase tracking-wider group-hover:text-orange-600`}
                  >
                    {item}
                  </span>
                </div>
              );
            } else {
              valueContent = (
                <span
                  className={`${isChecked ? "font-bold text-orange-600" : ""} text-base uppercase transition-all duration-300 ease-in-out hover:pl-1 hover:text-orange-600`}
                >
                  {item}
                </span>
              );
            }

            return (
              <li
                key={`${item}${itemIndex}`}
                className="flex items-center gap-2"
              >
                <label
                  htmlFor={item}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id={item}
                    checked={isChecked}
                    onChange={() => handleFilterChange(filterType, item)}
                    className="hidden"
                  />
                  {valueContent}
                </label>
              </li>
            );
          })}
        </ul>
        {index < filters.length - 1 && <hr className="my-4 border-gray-300" />}
      </div>
    );
  });

  return <>{filterLists}</>;
};

export default Filter;

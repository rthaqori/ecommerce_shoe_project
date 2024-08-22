import React, { useState } from "react";
import Breadcrumb from "../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Data from "../JSON/Data.json";

const WishList = () => {
  const [fav, setFav] = useState(
    () => JSON.parse(localStorage.getItem("fav")) || [],
  );

  const removeItem = (index) => {
    const updatedFav = fav.filter((_, i) => i !== index);
    setFav(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    window.dispatchEvent(new Event("storageUpdated"));
  };

  return (
    <div className="mx-auto mb-10 max-w-7xl pt-16">
      <div className="px-14 pt-8">
        <Breadcrumb />
      </div>
      <div className="mx-auto mb-10 max-w-6xl pt-5">
        <div className="h-full w-full">
          <div className="px-2">
            <h2 className="text-2xl font-medium">WishList</h2>
            <div className="">
              {fav.length !== 0 ? (
                <div>
                  {fav.map((product, index) => {
                    const favItem = Data.find((item) => item.id === product.id);
                    let colors = "";

                    if (Array.isArray(product.colorName)) {
                      colors = product.colorName.join("/");
                    } else if (typeof product.colorName === "string") {
                      colors = product.colorName;
                    } else {
                      console.warn(
                        "Unexpected data structure:",
                        product.colorName,
                      );
                    }

                    return (
                      <div key={`${favItem.id}${index}`}>
                        <Card
                          index={index}
                          id={favItem.id}
                          name={favItem.name}
                          priceInCents={favItem.priceInCents}
                          src={product.shoeImage}
                          color={colors}
                          onRemove={removeItem}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex h-40 w-full items-center justify-center">
                  <p className="text-lg text-gray-600">
                    Your wishlist is empty
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="my-10 flex justify-end">
          <Link
            className="flex h-10 items-center justify-center rounded-lg bg-black px-10 py-6 font-medium text-white hover:bg-gray-900"
            to="/shop"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishList;

const Card = ({ index, id, name, priceInCents, src, color, onRemove }) => {
  return (
    <div className="my-6 flex h-44 justify-start gap-4 bg-gray-50">
      <div className="h-full">
        <Link to={`/product/${id}`}>
          <img className="h-full object-contain" src={src} alt={name} />
        </Link>
      </div>
      <div className="flex h-full flex-col pb-1">
        <div className="flex flex-col gap-[2px] text-gray-700">
          <Link to={`/product/${id}`}>
            <h2 className="font-medium text-black">{name}</h2>
          </Link>
          <p>Men's Dri-FIT 5" Brief-Lined Running Shorts</p>
          <p>{color}</p>
        </div>
        <div className="mb-2 mt-auto flex gap-3">
          <Link
            to={`/product/${id}`}
            className="transition-colors duration-300 ease-in-out hover:text-orange-600"
          >
            {" "}
            View Product
          </Link>
          <button
            onClick={() => onRemove(index)}
            className="transition-colors duration-300 ease-in-out hover:text-orange-600"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="ml-auto p-2">
        <span className="font-medium">${(priceInCents / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

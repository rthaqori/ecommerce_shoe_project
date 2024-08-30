import React, { useState, useEffect } from "react";
import Breadcrumb from "../BreadCrumb/BreadCrumb";
import Data from "../JSON/Data.json";
import { Link } from "react-router-dom";
import { addToFavourite } from "../CartFunctions/CartFunction";

const Cart = () => {
  const [bag, setBag] = useState(
    () => JSON.parse(localStorage.getItem("bag")) || [],
  );
  const [fav, setFav] = useState(
    () => JSON.parse(localStorage.getItem("fav")) || [],
  );
  const [subtotal, setSubtotal] = useState(0);
  const maxValue = 50;
  let progress;
  if (subtotal > 50) {
    progress = 100;
  } else {
    progress = (subtotal / maxValue) * 100;
  }

  useEffect(() => {
    calculateSubtotal();
  }, [bag]);

  const calculateSubtotal = () => {
    const total = bag.reduce((acc, product) => {
      const bagItem = Data.find((item) => item.id === product.id);
      return acc + (bagItem.priceInCents * product.quantity) / 100;
    }, 0);
    setSubtotal(total);
  };

  const updateQuantity = (productId, size, newQuantity) => {
    const updatedBag = bag.map((product) => {
      if (product.id === productId && product.size === size) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setBag(updatedBag);
    localStorage.setItem("bag", JSON.stringify(updatedBag));
  };

  const removeItem = (index) => {
    const updatedBag = bag.filter((_, i) => i !== index);
    setBag(updatedBag);
    localStorage.setItem("bag", JSON.stringify(updatedBag));
    window.dispatchEvent(new Event("storageUpdated"));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
      <div className="pb-4 pt-8 md:pb-0">
        <Breadcrumb />
      </div>
      <div className="flex flex-col pb-10 md:flex-row md:space-x-8 md:space-y-0">
        <div className="w-full md:w-3/5">
          <div className="mb-3 rounded-lg border border-gray-300 p-3">
            <h3 className="text-lg font-semibold text-orange-600">
              Members get free shipping on orders $50+
            </h3>
            <p className="text-sm text-gray-600">
              Become a Nike Member for fast free shipping on orders $50+{" "}
              <a className="font-semibold underline" href="">
                Join us
              </a>{" "}
              or{" "}
              <a className="font-semibold underline" href="">
                Sign-in
              </a>
            </p>
          </div>
          <div className="px-2">
            <h2 className="text-xl font-medium md:text-2xl">Cart</h2>
            {bag.length !== 0 ? (
              <div>
                {bag.map((product, index) => {
                  const bagItem = Data.find((item) => item.id === product.id);
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
                    <div key={`${bagItem.id}${index}`}>
                      <Card
                        index={index}
                        id={bagItem.id}
                        name={bagItem.name}
                        priceInCents={bagItem.priceInCents}
                        size={product.size}
                        src={product.shoeImage}
                        quantity={product.quantity}
                        color={colors}
                        onQuantityChange={updateQuantity}
                        onRemove={removeItem}
                        onFavorite={() =>
                          addToFavourite(
                            bagItem,
                            {
                              color: product.colorName,
                              images: [product.shoeImage],
                            },
                            fav,
                            setFav,
                          )
                        }
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex h-40 flex-col items-center justify-center gap-3">
                <p className="text-lg text-gray-600">Your cart is empty</p>
                <Link
                  to="/product"
                  className="rounded-full border border-gray-300 px-4 py-2 text-gray-700 transition-colors duration-200 ease-in-out hover:border-black hover:text-black"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="w-full px-2 md:w-2/5">
          <div className="sticky top-10">
            <h3 className="mb-6 text-lg font-semibold md:text-xl">Summary</h3>
            <div>
              <div className="mb-2 flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Estimated Shipping & Handling</span>
                <span>$0.00</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Estimated Tax</span>
                <span>$0.00</span>
              </div>
            </div>
            <hr className="my-3 border-gray-300" />
            <div className="flex justify-between">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <hr className="my-3 border-gray-300" />
            <div>
              <p className="text-sm">
                Become a Nike Member for fast free shipping on orders $50+{" "}
                <a className="font-medium text-gray-600 underline" href="">
                  Join us
                </a>{" "}
                or{" "}
                <a className="font-medium text-gray-600 underline" href="">
                  Sign-in
                </a>
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-green-700 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span>$50</span>
              </div>
            </div>
            <div className="my-5 flex flex-col gap-4">
              <button className="h-12 w-full rounded-full bg-black font-medium text-white transition-colors duration-300 ease-in-out hover:bg-gray-900">
                Checkout
              </button>
              <button className="h-12 w-full rounded-full bg-black font-medium text-white transition-colors duration-300 ease-in-out hover:bg-gray-900">
                Paypal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const Card = ({
  index,
  id,
  name,
  priceInCents,
  size,
  src,
  quantity,
  color,
  onQuantityChange,
  onRemove,
  onFavorite,
}) => {
  const [discount, setDiscount] = useState(false);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    onQuantityChange(id, size, newQuantity);
  };

  return (
    <div className="my-6 flex h-auto justify-start gap-4 rounded-lg bg-gray-50 p-4 shadow-sm sm:h-44 sm:flex-row">
      <div className="h-32 w-1/3 sm:h-full">
        <Link to={`/product/${id}`}>
          <img className="w-full object-contain" src={src} alt={name} />
        </Link>
      </div>
      <div className="flex w-2/3 flex-col justify-between sm:h-full sm:flex-grow">
        <div className="flex flex-col gap-0 text-gray-700 md:gap-2">
          <Link to={`/product/${id}`}>
            <h2 className="text-lg font-medium text-black">{name}</h2>
          </Link>
          <p className="text-sm">Men's Dri-FIT 5" Brief-Lined Running Shorts</p>
          <p className="text-sm">{color}</p>
          <div>
            <Link to={`/product/${id}`}>
              <p className="text-sm">
                Size{" "}
                <span className="cursor-pointer underline hover:text-gray-500">
                  {size}
                </span>
              </p>
            </Link>

            <p>
              Quantity{" "}
              <select
                className="w-12 cursor-pointer"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </p>
          </div>
        </div>
        <div className="mt-2 flex gap-3 md:mt-4">
          <button
            className="text-sm transition-colors duration-300 ease-in-out hover:text-orange-600"
            onClick={onFavorite}
          >
            Favorite
          </button>
          <button
            className="text-sm transition-colors duration-300 ease-in-out hover:text-orange-600"
            onClick={() => onRemove(index)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="ml-auto self-end font-medium md:text-lg">
        {discount ? (
          <div className="flex gap-3">
            <span className="text-gray-600 line-through">
              ${(priceInCents / 100).toFixed(2)}
            </span>
            <span className="text-green-700">
              ${(priceInCents / 100).toFixed(2)}
            </span>
          </div>
        ) : (
          <span>${((priceInCents / 100) * quantity).toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

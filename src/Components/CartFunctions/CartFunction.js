// src/utils/cartFunctions.js

export const addToCart = (
  product,
  selectedColor,
  selectedSize,
  bag,
  setBag,
  setError,
) => {
  if (!selectedSize) {
    setError("Please select the size.");
    return;
  }

  setError(""); // Clear any previous error

  const cartBag = {
    id: product.id,
    colorName: selectedColor.color,
    shoeImage: selectedColor.images[0],
    size: selectedSize,
    quantity: 1,
  };

  const updatedItems = [...bag];

  const existingItemIndex = updatedItems.findIndex(
    (i) =>
      i.id === product.id &&
      JSON.stringify(i.colorName) === JSON.stringify(cartBag.colorName) &&
      i.size === cartBag.size,
  );

  if (existingItemIndex >= 0) {
    updatedItems[existingItemIndex].quantity += 1;
  } else {
    updatedItems.push(cartBag);
  }

  setBag(updatedItems);
  localStorage.setItem("bag", JSON.stringify(updatedItems));
  console.log("Added to cart:", updatedItems);
  window.dispatchEvent(new Event("storageUpdated"));
};

export const addToFavourite = (product, selectedColor, fav, setFav) => {
  const cartFavourite = {
    id: product.id,
    colorName: selectedColor.color,
    shoeImage: selectedColor.images[0],
  };

  const updatedItems = [...fav];

  const existingItemIndex = updatedItems.findIndex(
    (i) =>
      i.id === product.id &&
      JSON.stringify(i.colorName) === JSON.stringify(cartFavourite.colorName),
  );

  if (existingItemIndex >= 0) {
    console.log("Item already in favorites");
  } else {
    updatedItems.push(cartFavourite);
  }

  setFav(updatedItems);
  localStorage.setItem("fav", JSON.stringify(updatedItems));
  console.log("Added to favorites:", updatedItems);
  window.dispatchEvent(new Event("storageUpdated"));
};

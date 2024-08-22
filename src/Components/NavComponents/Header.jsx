import React, { useState, useEffect, useRef } from "react";
import Container from "../Utils/Container";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-100%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-[9999] w-full bg-white/30 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-sm dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.1),0px_1px_0px_0px_rgba(255,255,255,0.02),0px_0px_0px_1px_rgba(255,255,255,0.08)]"
    >
      <HeaderNav />
    </motion.div>
  );
};

export default Header;

const HeaderNav = () => {
  const [open, setOpen] = useState(false);
  const [favQuantity, setFavQuantity] = useState(0);
  const [bagQuantity, setBagQuantity] = useState(0);

  const toggleMenu = () => setOpen(!open);

  // Fetch and update quantities from local storage
  const updateQuantities = () => {
    const favItems = JSON.parse(localStorage.getItem("fav")) || [];
    const bagItems = JSON.parse(localStorage.getItem("bag")) || [];

    setFavQuantity(favItems.length); // Assuming each item counts as 1
    setBagQuantity(
      bagItems.reduce((total, item) => total + (item.quantity || 0), 0),
    );
  };

  useEffect(() => {
    // Update quantities on component mount
    updateQuantities();

    // Listen to 'storageUpdated' event
    const handleStorageChange = () => {
      updateQuantities();
    };

    window.addEventListener("storageUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storageUpdated", handleStorageChange);
    };
  }, []);

  return (
    <Container>
      <div className="flex h-16 w-full items-center justify-between bg-white px-6 py-2 shadow-md md:px-7 md:py-3 lg:px-9 lg:py-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <MenuIcon />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center text-3xl font-bold lg:text-4xl">
          <Link to="/">rthaqori</Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 h-full w-4/5 bg-white px-10 py-5 shadow-lg transition-all duration-300 ease-in-out md:relative md:flex md:h-fit md:w-fit md:px-0 md:py-0 md:shadow-none ${
            open ? "left-0" : "-left-full md:left-0"
          }`}
        >
          <div className="flex h-10 items-center justify-end md:hidden">
            <button onClick={toggleMenu} aria-label="Close menu">
              <CloseIcon />
            </button>
          </div>
          <ul className="mt-5 flex flex-col space-y-6 text-2xl font-semibold md:m-0 md:flex-row md:items-center md:space-x-6 md:space-y-0 md:text-lg">
            <li className="border-orange-600 transition-all duration-100 ease-in-out hover:border-b-2">
              <Link
                to="/"
                className="capitalize text-black transition-colors duration-300 ease-in-out hover:text-gray-600"
              >
                home
              </Link>
            </li>
            <li className="border-orange-600 transition-all duration-100 ease-in-out hover:border-b-2">
              <Link
                to="/shop"
                className="capitalize text-black transition-colors duration-300 ease-in-out hover:text-gray-600"
              >
                shop
              </Link>
            </li>
            <li className="border-orange-600 transition-all duration-100 ease-in-out hover:border-b-2">
              <Link
                to="/"
                className="capitalize text-black transition-colors duration-300 ease-in-out hover:text-gray-600"
              >
                about
              </Link>
            </li>
            <li className="border-orange-600 transition-all duration-100 ease-in-out hover:border-b-2">
              <Link
                to="/"
                className="capitalize text-black transition-colors duration-300 ease-in-out hover:text-gray-600"
              >
                blog
              </Link>
            </li>
            <li className="border-orange-600 transition-all duration-100 ease-in-out hover:border-b-2">
              <Link
                to="/"
                className="capitalize text-black transition-colors duration-300 ease-in-out hover:text-gray-600"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/wishlist"
            className="relative py-1 font-bold transition-colors duration-300 ease-in-out hover:text-orange-600"
            aria-label="Wishlist"
          >
            {favQuantity > 0 && (
              <span className="absolute -right-1/4 -top-1/4 flex h-5 w-5 translate-x-1/4 translate-y-1/4 items-center justify-center rounded-full bg-[#111111] text-[10px] font-medium text-white">
                {favQuantity}
              </span>
            )}
            <FavoriteBorderIcon />
          </Link>
          <Link
            to="/cart"
            className="relative py-1 font-bold transition-colors duration-300 ease-in-out hover:text-orange-600"
            aria-label="Shopping Cart"
          >
            {bagQuantity > 0 && (
              <span className="absolute -right-1/4 -top-1/4 flex h-5 w-5 translate-x-1/4 translate-y-1/4 items-center justify-center rounded-full bg-[#111111] text-[10px] font-medium text-white">
                {bagQuantity}
              </span>
            )}
            <ShoppingCartOutlinedIcon />
          </Link>
          <button
            className="py-1 font-bold transition-colors duration-300 ease-in-out hover:text-orange-600"
            aria-label="Account"
          >
            <PersonIcon />
          </button>
        </div>
      </div>
    </Container>
  );
};

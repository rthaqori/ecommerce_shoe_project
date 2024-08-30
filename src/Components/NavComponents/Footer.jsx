import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="rounded-tl-[75px] bg-black p-6 text-white md:rounded-tl-[100px] md:p-10 lg:rounded-tl-[125px]">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-10">
        <div className="col-span-1 p-2 lg:col-span-4">
          <span className="text-3xl font-bold md:text-4xl">rthaqori</span>
          <p className="mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            sapiente magnam maxime quis suscipit mollitia?
          </p>
        </div>
        <div className="col-span-1 p-2 lg:col-span-2">
          <h2 className="text-xl font-bold">Store</h2>
          <div className="mb-3 mt-4 flex flex-col">
            <span>Red Cross</span>
            <span>Balkot, Bhaktapur</span>
            <span>Bagmati, 44600</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium underline">info@gmail.com</span>
            <span>
              Phone: <span className="font-medium">986-123-4567</span>
            </span>
          </div>
        </div>
        <div className="col-span-1 p-2">
          <h2 className="text-xl font-bold">Links</h2>
          <ul className="mt-4 text-base font-medium">
            <li className="cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-600">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-600">
              <Link to="/product">Shop</Link>
            </li>
            <li className="cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-600">
              Blog
            </li>
            <li className="cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-600">
              About
            </li>
            <li className="cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-600">
              Contact
            </li>
          </ul>
        </div>
        <div className="col-span-1 p-2 lg:col-span-3">
          <h2 className="text-xl font-bold">Newsletter</h2>
          <form className="relative my-4 flex w-full items-center rounded border">
            <input
              className="w-full px-4 py-2 pr-24 text-black focus:border-none focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button className="absolute right-3 font-semibold text-black">
              Subscribe
            </button>
          </form>
          <div className="flex w-full items-center justify-center gap-4 text-white">
            <a href="https://www.facebook.com/">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://www.whatsapp.com/">
              <WhatsAppIcon fontSize="large" />
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-5 border-white" />
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm font-medium md:text-lg">
          Copyright 2023 All rights reserved
        </p>
        <div className="flex items-center gap-4">
          <img
            className="h-6 w-6 md:h-8 md:w-8"
            src="assets/icons8-visa-96.png"
            alt="icons8-visa-96"
          />
          <img
            className="h-6 w-6 md:h-8 md:w-8"
            src="assets/icons8-mastercard-96.png"
            alt="icons8-mastercard-96"
          />
          <img
            className="h-6 w-6 md:h-8 md:w-8"
            src="assets/icons8-paypal-96.png"
            alt="icons8-paypal-96"
          />
          <img
            className="h-6 w-6 md:h-8 md:w-8"
            src="assets/icons8-credit-card-96.png"
            alt="icons8-credit-card-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

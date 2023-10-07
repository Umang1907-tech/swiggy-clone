import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/Company logo.png";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnline();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const data = useSelector((store) => store.cart.items);
  console.log(data);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  console.log(isOnline);
  return (
    <nav className="bg-white shadow-lg py-3 fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 grid grid-cols-3 items-center">
        {" "}
        {/* Using CSS grid with 3 columns */}
        {/* Logo on the left */}
        <div className="col-span-1 flex items-center">
          <a
            href="/"
            className="flex items-center text-black font-bold text-xl"
          >
            <img src={Logo} alt="Logo" className="w-14 h-14 mr-2" />
          </a>
        </div>
        {/* Centered content */}
        <div className="col-span-1 flex justify-center">
          {" "}
          {/* This div will center its child elements */}
          {/* Nav Links (hidden by default) */}
          <div
            className={`hidden lg:flex space-x-10 ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
          >
            <Link to="/" className="text-black">
              Home
            </Link>
            <Link to="/about" className="text-black">
              About
            </Link>
            <Link to="/contact" className="text-black">
              Contact
            </Link>
            <Link to="/cart" className="text-black inline-block">
              Cart - <span>{data.length}</span>
            </Link>
            <Link to="/instamart" className="text-black">
              Instamart
            </Link>
          </div>
        </div>
        {/* Hamburger menu icon on the right for mobile view */}
        <div className="col-span-1 flex justify-end lg:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.5 4h15c.28 0 .5.22.5.5s-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm0 5h15c.28 0 .5.22.5.5s-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm0 5h15c.28 0 .5.22.5.5s-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div
        className={`lg:hidden ${isMobileMenuOpen ? "" : "hidden"}`}
        style={{
          transition: "height 0.3s ease-in-out",
          height: isMobileMenuOpen ? "auto" : 0,
          overflow: isMobileMenuOpen ? "visible" : "hidden",
          textAlign: "center",
        }}
      >
        <div className="bg-white shadow-lg">
          <div className="container mx-auto px-4">
            <Link href="/" className="block text-black py-2">
              Home
            </Link>
            <Link href="/about" className="block text-black py-2">
              About
            </Link>
            <Link href="/contact" className="block text-black py-2">
              Contact
            </Link>
            <Link href="/cart" className="block text-black py-2">
              Cart
            </Link>
            <Link href="/instamart" className="block text-black py-2">
              Instamart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from "lucide-react";

const Navbar = ({ cartItemsCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Specials", href: "/specials" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <span className="text-3xl">🍽️</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              FoodHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Sign In Button */}
            <Link
              to="/login"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-orange-50"
            >
              <User size={20} />
              <span>Sign In</span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <ShoppingCart size={20} />
              <span className="font-medium">Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Cart Icon */}
            <Link to="/cart" className="relative text-orange-500">
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-gray-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block px-4 py-3 text-gray-700 hover:bg-orange-100 hover:text-orange-600 rounded-lg transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-orange-100 hover:text-orange-600 rounded-lg transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <User size={20} />
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

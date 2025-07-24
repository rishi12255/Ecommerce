import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg border border-white rounded-lg px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">

        {/* Logo & Title */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="mains.png" alt="Logo" className="h-10 sm:h-12 w-auto mix-blend-multiply" />
          </Link>
          <div className="flex">
            <p className="text-red-500 text-xl sm:text-2xl font-bold">Street</p>
            <p className="text-green-700 text-xl sm:text-2xl font-bold">Hunt</p>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Items */}
        <div
          className={`w-full sm:w-auto ${
            menuOpen ? "block" : "hidden"
          } sm:flex items-center gap-4`}
        >
          {/* Mobile View: Search + Cart side-by-side */}
          <div className="sm:hidden flex justify-between items-center gap-2 mt-3">
            {/* Search */}
            <div className="flex flex-1 items-center border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="h-10 w-full px-3 outline-none"
              />
              <button className="bg-gray-100 px-3 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                <FaSearch />
              </button>
            </div>

            {/* Cart Icon */}
            <div
              className="text-2xl text-gray-700 hover:text-green-600 cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <FaCartShopping />
            </div>
          </div>

          {/* Desktop View: Search + Cart */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="h-10 w-full sm:w-48 md:w-56 px-3 outline-none"
              />
              <button className="bg-gray-100 px-3 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                <FaSearch />
              </button>
            </div>

            <div
              className="text-xl text-gray-700 hover:text-green-600 cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <FaCartShopping />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

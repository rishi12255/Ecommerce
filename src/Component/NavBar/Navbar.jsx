import React from 'react';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

// Dummy search data
const searchData = [
  "Pizza",
  "Burger",
  "Ice Cream",
  "Noodles",
  "Biryani",
  "Momo",
  "Samosa",
  "Fries",
];

function NavBar({ searchText, setSearchText }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Filter searchData locally just for dropdown suggestions
  const filteredResults = searchText
    ? searchData.filter(item =>
        item.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];

  const handleSelectItem = (item) => {
    navigate(`/search/${item}`);
    setSearchText("");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="mains.png" alt="Logo" className="h-10 sm:h-12 w-auto mix-blend-multiply" />
          </Link>
          <div className="flex">
            <p className="text-red-600 text-xl sm:text-2xl font-bold">Street</p>
            <p className="text-green-700 text-xl sm:text-2xl font-bold">Hunt</p>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Items */}
        <div className={`w-full sm:w-auto ${menuOpen ? "block" : "hidden"} sm:flex items-center gap-4`}>

          {/* Mobile Search + Cart */}
          <div className="sm:hidden flex justify-between items-center gap-2 mt-3">
            {/* Search */}
            <div className="relative flex-1">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search"
                  className="h-10 w-full px-3 outline-none"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="bg-gray-100 px-3 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                  <FaSearch />
                </button>
              </div>
              {/* Search Results Dropdown */}
              {filteredResults.length > 0 && (
                <div className="absolute bg-white border mt-1 rounded-md w-full z-50">
                  {filteredResults.map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectItem(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <div
              className="text-2xl text-gray-700 hover:text-green-600 cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart />
            </div>
          </div>

          {/* Desktop Search + Cart */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="relative flex items-center border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="h-10 w-full sm:w-48 md:w-56 px-3 outline-none"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="bg-gray-100 px-3 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                <FaSearch />
              </button>
              {/* Search Result Dropdown */}
              {filteredResults.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white border mt-1 rounded-md z-50">
                  {filteredResults.map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectItem(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              className="text-xl text-gray-700 hover:text-green-600 cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

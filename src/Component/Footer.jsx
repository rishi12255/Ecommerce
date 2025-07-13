import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="px-2 sm:px-4">
      <footer className="border bg-gray-300 border-gray-300 shadow-2xl mt-4 rounded-lg px-4 py-6 sm:py-8">

        {/* Follow Us Section */}
        <div className="text-center mb-4">
          <h2 className="text-lg sm:text-xl font-bold">Follow us on:</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 items-center mb-6 text-xl sm:text-2xl">
          <p className="cursor-pointer hover:scale-110 transition-all duration-200"><FaFacebook /></p>
          <p className="cursor-pointer hover:scale-110 transition-all duration-200"><FaInstagram /></p>
          <p className="cursor-pointer hover:scale-110 transition-all duration-200"><SiGmail /></p>
          <p className="cursor-pointer hover:scale-110 transition-all duration-200"><FaTiktok /></p>
        </div>

        {/* Info Columns */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around gap-10 sm:gap-16 px-2 sm:px-6 mt-6">

          {/* Column 1 */}
          <div className="text-center sm:text-left">
            <p className="font-bold text-base sm:text-lg mb-2">More Information</p>
            <p className="hover:underline cursor-pointer text-sm sm:text-base">Help</p>
            <p className="hover:underline cursor-pointer text-sm sm:text-base mt-1">Partnership</p>
            <p className="hover:underline cursor-pointer text-sm sm:text-base mt-1">FAQs</p>
          </div>

          {/* Column 2 */}
          <div className="text-center sm:text-left">
            <p className="font-bold text-base sm:text-lg mb-2">
              About <span className="text-red-500 font-medium">Street</span>
              <span className="text-green-700 font-medium">Hunt</span>
            </p>
            <p className="hover:underline cursor-pointer text-sm sm:text-base">About us</p>
            <p className="hover:underline cursor-pointer text-sm sm:text-base mt-1">How we started?</p>
            <p className="hover:underline cursor-pointer text-sm sm:text-base mt-1">How We Served?</p>
          </div>

          {/* Column 3 */}
          <div className="text-center sm:text-left">
            <p className="font-bold text-base sm:text-lg mb-2">
              More From <span className="text-red-500 font-medium">Street</span>
              <span className="text-green-700 font-medium">Hunt</span>
            </p>
            <p className="hover:underline cursor-pointer text-sm sm:text-base">Learn Now</p>
            <p className="hover:underline cursor-pointer text-sm sm:text-base mt-1">Career Based</p>
            <p className="hover:underline cursor-pointer text-sm sm:text-base mt-1">When it started?</p>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-10 text-center text-sm sm:text-base text-black font-medium">
          &copy; 2025 All rights reserved by <span className="text-red-500">Street</span><span className="text-green-700">Hunt</span>
        </div>

      </footer>
    </div>
  );
}

export default Footer;

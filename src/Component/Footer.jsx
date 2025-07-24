import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="px-2 sm:px-6 lg:px-10">
      <footer className="bg-gray-100 text-gray-800 rounded-lg shadow-2xl mt-6 px-6 py-10">

        
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700">Follow Us</h2>
          <div className="mt-4 flex justify-center gap-6 text-2xl text-gray-700">
            <a href="#" className="hover:text-blue-600 transition hover:scale-110"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500 transition hover:scale-110"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500 transition hover:scale-110"><SiGmail /></a>
            <a href="#" className="hover:text-black transition hover:scale-110"><FaTiktok /></a>
          </div>
        </div>

     
        <div className="flex flex-col sm:flex-row justify-between gap-10 max-w-6xl mx-auto px-4 mt-10">

          {/* Column 1 */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-semibold mb-3 pl-2">More Information</h3>
            <ul className="space-y-2 text-sm text-gray-600 pl-2">
              <li className="hover:underline cursor-pointer">Help</li>
              <li className="hover:underline cursor-pointer">Partnership</li>
              <li className="hover:underline cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-semibold mb-3">
              About <span className="text-red-500">Street</span><span className="text-green-700">Hunt</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:underline cursor-pointer">Who We Are</li>
              <li className="hover:underline cursor-pointer">Our Story</li>
              <li className="hover:underline cursor-pointer">Mission & Values</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-semibold mb-3">
              More from <span className="text-red-500">Street</span><span className="text-green-700">Hunt</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:underline cursor-pointer">Learn More</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Our Timeline</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>

        {/* Copyright */}
        <div className="text-center text-sm sm:text-base text-gray-600">
          &copy; 2025 All rights reserved by <span className="text-red-500 font-semibold">Street</span><span className="text-green-700 font-semibold">Hunt</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

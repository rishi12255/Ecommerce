import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";


function Footer() {
  return (
    <div>
      <footer className="border bg-gray-300 border-gray-300 shadow-2xl m-3 sm:m-5 rounded-lg px-4 py-6">
        
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 items-center mb-6">
          <p className="cursor-pointer hover:underline flex items-center gap-2 text-sm sm:text-base">
            <FaFacebook />
          </p>
          <p className="cursor-pointer hover:underline flex items-center gap-2 text-sm sm:text-base">
            <FaInstagram />
          </p>
          <p className="cursor-pointer hover:underline flex items-center gap-2 text-sm sm:text-base">
            <SiGmail />
          </p>
            <p className="cursor-pointer hover:underline flex items-center gap-2 text-sm sm:text-base">
            <FaTiktok />
          </p>

        </div>

       
        <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around gap-8 sm:gap-16 mx-4 sm:mx-10 mt-4">
          <div>
            <p className="font-bold text-base sm:text-lg cursor-pointer">More Information</p>
            <p className="hover:underline cursor-pointer mt-1 text-sm sm:text-base">Help</p>
            <p className="hover:underline cursor-pointer mt-1 text-sm sm:text-base">Partnership</p>
            <p className="hover:underline cursor-pointer mt-1 text-sm sm:text-base">FAQs</p>
          </div>

          <div>
            <p className="font-bold text-base sm:text-lg cursor-pointer">
              About <span className="sm:text-xl text-red-500 font-medium">Street</span>
              <span className="sm:text-xl font-medium text-green-700">Hunt</span>
            </p>
            <p className="cursor-pointer hover:underline mt-1 text-sm sm:text-base">About us</p>
            <p className="cursor-pointer hover:underline mt-1 text-sm sm:text-base">How we started?</p>
            <p className="cursor-pointer hover:underline mt-1 text-sm sm:text-base">How We Served?</p>
          </div>

          <div>
            <p className="font-bold text-base sm:text-lg cursor-pointer">
              More From <span className="sm:text-xl text-red-500 font-medium">Street</span>
              <span className="sm:text-xl font-medium text-green-700">Hunt</span>
            </p>
            <p className="cursor-pointer hover:underline mt-1 text-sm sm:text-base">Learn Now</p>
            <p className="cursor-pointer hover:underline mt-1 text-sm sm:text-base">Career Based</p>
            <p className="cursor-pointer hover:underline mt-1 text-sm sm:text-base">When it started?</p>
          </div>
        </div>

        
        <div className="mt-8 sm:mt-10 flex justify-center items-center text-center px-4">
          <div className="font-medium text-sm sm:text-base text-black">
            &copy; 2025 <span>All rights reserved by </span>
            <span className="font-medium text-red-500">Street</span>
            <span className="font-medium text-green-700">Hunt</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

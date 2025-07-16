import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router';
import { Link } from 'react-router';

function NavBar() {

  const navigate = useNavigate();
  return (
    <>
      <div className="border shadow-2xl border-white bg-white flex flex-wrap items-center justify-between px-4 py-2 h-auto rounded-lg">
        
      
        <div className="flex gap-1 items-center ">
         
      
                 
                  <Link to="/">
                  <img src="mains.png" alt="Logo" className=" h-16 w-16 sm:h-20 mix-blend-multiply" />
                  </Link>
           
          
          <div className="flex ">
            <p className="text-red-500 text-2xl sm:text-3xl font-bold">Street</p>
            <p className="text-green-700 text-2xl sm:text-3xl font-bold">Hunt</p>
          </div>
        </div>

        
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          
         
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="h-10 w-32 sm:w-40 px-2 outline-none"
            />
            <button className="bg-gray-200 px-3 h-10 flex items-center justify-center">
              <FaSearch />
            </button>
          </div>

          
          <div className="text-xl">
            <FaCartShopping 
            onClick={()=>navigate("/cart")}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

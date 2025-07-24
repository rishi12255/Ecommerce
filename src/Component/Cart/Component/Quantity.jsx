import React from 'react';
import addQuantity from '../../LocalStorage/addQuantity';
import subQuantity from '../../LocalStorage/subQuantity';

const Quantity = ({ data, setCartData }) => {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-6 text-sm sm:text-base">
      
      <button
        className="w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 active:bg-red-700 transition-all duration-200 ease-in-out font-bold cursor-pointer"
        onClick={() => subQuantity(data, setCartData)}
        aria-label="Decrease quantity"
      >
        <span className="text-lg sm:text-xl">-</span>
      </button>

      {/* Quantity Display */}
      <span className="font-bold text-gray-800 text-lg sm:text-xl px-3">{data.quantity}</span>

      {/* Increase Button */}
      <button
        className="w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 active:bg-green-700 transition-all duration-200 ease-in-out font-semibold cursor-pointer"
        onClick={() => addQuantity(data, setCartData)}
        aria-label="Increase quantity"
      >
        <span className="text-lg sm:text-xl">+</span>
      </button>
    </div>
  );
};

export default Quantity;

import React from 'react';
import { MdDelete } from 'react-icons/md';
import removeFromCart from '../../LocalStorage/RemoveFromCart';
import Quantity from './Quantity';

const CardCart = ({ data, setCartData }) => {
  return (
    <div className="flex justify-center px-4 pt-10 sm:pt-16">
      <div className="relative w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-lg transition duration-300 hover:shadow-green-300/50 group">

        {/* Delete Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-red-500 transition-all duration-300 group-hover:scale-110 hover:text-red-700"
          onClick={() => removeFromCart(data, setCartData)}
          aria-label="Remove from cart"
        >
          <MdDelete />
        </button>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Product Image */}
          <img
            src={data.image}
            alt={data.name}
            className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-xl border border-purple-300 shadow-md transition-transform duration-200 group-hover:scale-105"
          />

          {/* Product Info */}
          <div className="flex flex-col justify-between w-full text-center sm:text-left">
            <div className="mb-4 space-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{data.name}</h3>
              {data.tags?.[0] && (
                <span className="inline-block text-xs sm:text-sm text-gray-600 bg-purple-100 rounded-full px-3 py-1 font-medium">
                  {data.tags[0]}
                </span>
              )}
            </div>

            <div className="space-y-4">
              {/* Rating */}
              <div className="flex justify-center sm:justify-start items-center gap-1 text-yellow-500 text-sm">
                <span className="text-gray-700 font-medium">{data.rating}</span>
                <span className="text-yellow-400">★★★★★</span>
              </div>

              {/* Quantity Control */}
              <Quantity data={data} setCartData={setCartData} />

              {/* Price */}
              <div className="text-lg sm:text-xl font-bold text-emerald-600 tracking-wide">
                ₹ {data.caloriesPerServing}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;

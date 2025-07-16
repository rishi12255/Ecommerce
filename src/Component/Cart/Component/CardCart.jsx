import React from 'react';
import { MdDelete } from 'react-icons/md';
import removeFromCart from '../../LocalStorage/RemoveFromCart';


const CardCart = ({ data ,setCartData}) => {
  return (
    <div className="flex items-start justify-center pt-16 px-4">
      <div className="relative bg-white border-4 border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-green-400/40 transition-shadow duration-300 w-full max-w-3xl">
        
        
        <button
          className="absolute top-4 right-4 text-green-600 hover:text-red-500 transition-colors duration-200 text-2xl"
         onClick={() => removeFromCart(data ,setCartData)}
        >
          <MdDelete />
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Image */}
          <img
            src={data.image}
            alt={data.name}
            className="w-36 h-36 object-cover rounded-xl border-2 border-purple-300 shadow-md"
          />

          {/* Text Content */}
          <div className="flex flex-col justify-between w-full text-center md:text-left">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{data.name}</h3>
              <p className="text-sm text-purple-600 italic">{data.tags?.[0]}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-center md:justify-start items-center text-yellow-500 text-base">
                <span className="text-gray-700 font-semibold mr-2">{data.rating}</span>
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-sm text-gray-700">
                Quantity: <span className="font-medium">{data.quantity}</span>
              </p>
              <p className="text-xl text-emerald-600 font-bold">
                Rs. {data.caloriesPerServing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;

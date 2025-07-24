import React from 'react';
import { FaTimes } from 'react-icons/fa'; // FontAwesome cross icon
import totalAmount from '../../ComponentFunction/totalAmount';
import UserDetails from './UserDetails';

const CheckOutModal = ({ visible, setVisible, cartData }) => {
  const localData = JSON.parse(localStorage.getItem("cart1"));
  console.log("localData", localData);

  return (
    <div
      className={`${visible ? "flex" : "hidden"} fixed inset-0 z-50 backdrop-blur-lg justify-center items-center px-4`}
      onClick={() => setVisible(false)}
    >
      <div
        className='relative w-full max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-xl shadow-black/50 p-6 overflow-y-auto max-h-[80vh] transition-all duration-300'
        onClick={(e) => e.stopPropagation()}
      >
        {/* ❌ Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition"
        >
          <FaTimes size={18} />
        </button>

        {/* Modal Header */}
        <div className='text-center text-2xl font-bold text-green-700 mb-6'>
          Checkout
        </div>

        {/* Items Section */}
        <div className='mb-5 space-y-3'>
          <div className='text-lg text-gray-700 font-semibold'>Items:</div>

          {cartData.length === 0 ? (
            <div className="text-gray-500 italic">No items in cart.</div>
          ) : (
            cartData.map((item, index) => (
              <div
                key={index}
                className='flex items-center justify-between bg-green-50 rounded-md px-4 py-2 shadow-sm'
              >
                <div className='flex-1 font-medium text-gray-800'>{item.name}</div>
                <div className='w-14 text-center text-sm text-gray-700'>{item.quantity}</div>
                <div className='w-16 text-right text-sm text-gray-700'>{item.caloriesPerServing}</div>
              </div>
            ))
          )}
        </div>

        {/* Total Amount */}
        <div className='flex justify-between items-center font-semibold text-lg text-red-600 mt-4'>
          <div>Total:</div>
          <div> ₹ {totalAmount(cartData)}</div>
        </div>

        {/* User Details */}
        <div className="mt-4">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;

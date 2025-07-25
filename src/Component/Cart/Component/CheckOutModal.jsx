import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import totalAmount from '../../ComponentFunction/totalAmount';
import UserDetails from './UserDetails';

const CheckOutModal = ({ visible, setVisible, cartData }) => {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  return (
    <div
      className={`${
        visible ? 'flex' : 'hidden'
      } fixed inset-0 z-50 backdrop-blur-md bg-black/20 justify-center items-center px-4`}
      onClick={() => setVisible(false)}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
          onClick={() => setVisible(false)}
        >
          <FaTimes size={18} />
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-green-700 text-center mb-4">Checkout</h2>

        {/* Items Summary */}
        <div className="space-y-3 mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Items:</h3>
          {cartData.length === 0 ? (
            <p className="text-gray-500 italic">No items in cart.</p>
          ) : (
            cartData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-4 py-2 bg-green-50 rounded shadow-sm text-sm"
              >
                <span className="text-gray-700 font-medium">{item.name}</span>
                <span className="text-gray-600">{item.quantity}x</span>
                <span className="text-green-700 font-semibold">₹{item.caloriesPerServing}</span>
              </div>
            ))
          )}
        </div>

        {/* Total Amount */}
        <div className="flex justify-between items-center text-lg font-bold text-red-600 mt-4">
          <span>Total:</span>
          <span>₹ {totalAmount(cartData)}</span>
        </div>

        {/* Payment Options */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Method:</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:shadow-sm bg-green-100">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'cash'}
                onChange={() => setPaymentMethod('cash')}
              />
              <span className="text-green-800 font-medium">Cash on Delivery</span>
            </label>

            <label className="flex items-center gap-3 p-3 border rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed">
              <input type="radio" disabled />
              <span>Online Payment (Coming Soon)</span>
            </label>
          </div>
        </div>

        {/* User Details Form */}
        <div className="mt-6">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;

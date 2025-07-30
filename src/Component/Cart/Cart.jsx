// Cart.jsx
import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";
import CartCard from "./Component/CardCart";
import OrangeButton from "../Product/component/OrangeButton";
import totalAmount from "../ComponentFunction/totalAmount";
import CheckOutModal from "./Component/CheckOutModal";
import { Link } from "react-router-dom"; // ✅ import Link

const Cart = () => {
  const [visible, setVisible] = useState(false);
  const data = localStorage.getItem("cart1");
  const [cartData, setCartData] = useState(JSON.parse(data) || []);

  const isEmpty = cartData.length === 0;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      <div className="flex-1 overflow-auto px-4 py-6 space-y-4 sm:px-8">
        {isEmpty ? (
          <div className="flex justify-center items-center h-80">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full max-w-md text-center">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">Your Cart is Empty 🛒</h2>
              <p className="text-gray-500 mb-4">Looks like you haven’t added anything yet.</p>

              {/* ✅ Link with state to scroll on homepage */}
              <Link
                to="/"
                state={{ scrollToProduct: true }}
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          cartData.map((item) => (
            <CartCard key={item.id} data={item} setCartData={setCartData} />
          ))
        )}
      </div>

      {!isEmpty && (
        <div className="sticky bottom-0 z-50 bg-white border-t border-gray-300 px-4 py-4 flex flex-col sm:flex-row justify-between items-center shadow-inner">
          <OrangeButton title="Check Out" onClick={() => setVisible(true)} />
          <div className="text-xl font-semibold text-green-700 mt-4 sm:mt-0">
            Total Amount: <span className="text-black">₹ {totalAmount(cartData)}</span>
          </div>
        </div>
      )}

      <CheckOutModal visible={visible} setVisible={setVisible} cartData={cartData} />
    </div>
  );
};

export default Cart;

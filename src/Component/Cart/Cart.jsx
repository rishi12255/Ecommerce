import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import CartCard from "./Component/CardCart";
import OrangeButton from "../Product/component/OrangeButton";
import totalAmount from "../ComponentFunction/totalAmount";
import CheckOutModal from "./Component/CheckOutModal";

const Cart = () => {
  const [visible, setVisible] = useState(false);
  const data = localStorage.getItem("cart1");
  const [cartData, setCartData] = useState(JSON.parse(data) || []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <NavBar />
      </div>

      {/* Scrollable Cart Items */}
      <div className="flex-1 overflow-auto px-4 py-6 space-y-4 sm:px-8">
        {cartData.length === 0 ? (
          <div className="text-center text-gray-500 text-xl font-semibold mt-10">
            Your cart is empty 🛒
          </div>
        ) : (
          cartData.map((item) => (
            <CartCard key={item.id} data={item} setCartData={setCartData} />
          ))
        )}
      </div>

      {/* Sticky Checkout Section */}
      <div className="sticky bottom-0 z-50 bg-white border-t border-gray-300 px-4 py-4 flex flex-col sm:flex-row justify-between items-center shadow-inner">
        <OrangeButton title="Check Out" onClick={() => setVisible(true)} />
        <div className="text-xl font-semibold text-green-700 mt-4 sm:mt-0">
          Total Amount: <span className="text-black">₹ {totalAmount(cartData)}</span>
        </div>
      </div>

      {/* Modal */}
      <CheckOutModal visible={visible} setVisible={setVisible} cartData={cartData} />
    </div>
  );
};

export default Cart;

import React from "react";
import NavBar from "../NavBar/NavBar";
import CartCard from "./Component/CardCart";
import { useState } from "react";
import OrangeButton from "../Product/component/OrangeButton";
import totalAmount from "../ComponentFunction/totalAmount";
import CheckOutModal from "./Component/CheckOutModal";

const Cart = () => {
  const[visible,setVisible]=useState(false);
  let data = localStorage.getItem("cart1");
  const[cartData, setCartData]=useState(JSON.parse(data) || [])
  ;

  return (
    <div className="p-2 px-5 flex-col flex h-[100vh] ">
      <NavBar />
      <div className="mx-5  space-y-5 flex-1 overflow-auto">
        {cartData.map((item) => (
          <CartCard data={item} key={item.id} setCartData={setCartData} />
        ))}
      </div>
      <div className="flex justify-between items-center p-2 mx-5 border-gray-300 ">
          <div>
          <OrangeButton title={"Check Out"} onClick={()=>setVisible(true)}/>
        </div>
        <div className="flex text-green-600 font-bold text-2xl">
        <div> Total Amount:</div>
        <div>${totalAmount(cartData)} </div>
      </div>
      </div>
      <CheckOutModal  visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Cart;

import React from 'react'
import { NavLink } from 'react-router'

const Cart = () => {
   let data = localStorage.getItem("cart1");
  console.log("data from cart", data);
  return (
    <div>
      hello cart
       <NavLink to={"/"}>
       <div className="border bg-red-500 border-red-500 hover:bg-red-900 h-12  w-fit p-2">Back TO home</div>
        </NavLink>     
    </div>
  )
}

export default Cart

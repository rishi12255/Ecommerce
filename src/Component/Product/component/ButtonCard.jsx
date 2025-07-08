import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';

function ButtonCard() {
  return (
    <button className=" border bg-green-400  h-10 w-fit p-2.5 rounded-lg border-green-400 hover:bg-green-700 flex gap-2 ">
                <div className=''><FaCartShopping/></div>
                <div className="mt-[-5px]">Add to cart</div>
                </button>
  )
}

export default ButtonCard

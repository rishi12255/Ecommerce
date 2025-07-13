import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const ButtonCard = ({ cartBoolean, ...props }) => {
  return (
    <button
      {...props}
      aria-pressed={cartBoolean}
      aria-label={cartBoolean ? "Remove from cart" : "Add to cart"}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-white transition-colors duration-300 shadow-sm
        ${cartBoolean ? 'bg-green-600 hover:bg-green-700' : 'bg-red-700 hover:bg-red-800'}
      `}
    >
      <FaCartShopping className="w-5 h-5" />
      <span>{cartBoolean ? "Added to cart " : "Add to Cart"}</span>
    </button>
  );
};

export default ButtonCard;

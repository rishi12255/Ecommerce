import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ButtonCard from './ButtonCard';
import ProductModal from '../Modal/ProductModal';
import AddToCart from '../../LocalStorage/AddToCart';

const Card = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [cartBoolean, setCartBoolean] = useState(false);

  const addItemToCart = () => {
    if (!cartBoolean) {
      AddToCart(data);
    }
  };

  // Manually apply star color without using array
  const getStar = (index) => (
    <FaStar
      key={index}
      className={
        data.rating >= index ? 'text-yellow-500' : 'text-gray-300'
      }
    />
  );

  return (
    <>
      <div
        className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden"
        onClick={() => setShowModal(true)}
      >
        {/* Image */}
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-44 sm:h-48 md:h-52 lg:h-56 xl:h-64 object-cover"
        />

        {/* Info */}
        <div className="p-3 sm:p-4 space-y-2">
          {/* Meal Type */}
          <h3 className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider">
            {data.mealType[0]}
          </h3>

          {/* Title */}
          <p className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
            {data.name}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm sm:text-base">
            <span className="text-gray-600">{data.rating}</span>
            <div className="flex gap-0.5">
              {getStar(1)}
              {getStar(2)}
              {getStar(3)}
              {getStar(4)}
              {getStar(5)}
            </div>
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs sm:text-sm font-bold text-gray-900 bg-green-100 px-2 py-1 rounded-md shadow-sm">
              ₹ {data.caloriesPerServing}
            </span>
            <div onClick={(e) => e.stopPropagation()}>
              <ButtonCard
                cartBoolean={cartBoolean}
                onClick={() => {
                  setCartBoolean(true);
                  addItemToCart();
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <ProductModal
          data={data}
          setShowModal={setShowModal}
          cartBoolean={cartBoolean}
          setCartBoolean={setCartBoolean}
          addItemToCart={addItemToCart}
        />
      )}
    </>
  );
};

export default Card;

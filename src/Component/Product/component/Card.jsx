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
      className={
        data.rating >= index
          ? 'text-yellow-500'
          : 'text-gray-300'
      }
    />
  );

  return (
    <>
      <div
        className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden"
        onClick={() => setShowModal(true)}
      >
        {/* Image */}
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-48 object-cover"
        />

        {/* Info */}
        <div className="p-4 space-y-2">
          {/* Meal Type */}
          <h3 className="text-gray-700 font-semibold text-sm uppercase tracking-wide">{data.mealType[0]}</h3>

          {/* Title */}
          <p className="text-lg font-bold text-gray-800">{data.name}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm">
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
            <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md shadow-sm">
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

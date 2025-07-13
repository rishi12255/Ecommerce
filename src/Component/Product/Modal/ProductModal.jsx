import React from 'react'
import { LuDot } from 'react-icons/lu'
import { RxCross2 } from 'react-icons/rx'
import ButtonCard from '../component/ButtonCard'

const ProductModal = ({ data, setShowModal, cartBoolean, setCartBoolean ,addItemToCart}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6"
      onClick={() => setShowModal(false)}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white shadow-xl border border-gray-200 rounded-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden"
        
      >
       
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 p-2 rounded-full bg-white shadow"
          aria-label="Close modal"
        >
          <RxCross2 className="text-xl" />
        </button>

        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-50 flex items-center justify-center p-4">
          <img
            src={data.image}
            alt={data.name || 'Product'}
            className="object-contain w-full h-full rounded-md"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col gap-5">
          <div>
            <h2
              id="modal-title"
              className="text-2xl font-bold text-gray-900 mb-1"
            >
              {data.name}
            </h2>
            <p className="text-md text-green-500">${data.caloriesPerServing}</p>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
          </p>

         
        <div>
  <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
    Ingredients
  </h3>
  <div className="max-h-40 overflow-y-auto pr-2 custom-scroll">
    <ul className="space-y-2">
      {data.ingredients.map((item, index) => (
        <li
          key={index}
          className="flex items-start text-gray-600 text-sm"
        >
          <LuDot className="mt-1 text-indigo-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>


         
          <div className="mt-auto pt-4 border-t border-gray-200" onClick={(e)=>e.stopPropagation()}>
            
            <ButtonCard
              cartBoolean={cartBoolean}
              onClick={() => {
                setCartBoolean(true), addItemToCart();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ButtonCard from './ButtonCard';
import ProductModal from '../Modal/ProductModal';
import AddToCart from '../../LocalStorage/AddToCart';

const Card = ({ data }) => {
  const[showModal,setShowModal]=useState(false);
  const[cartBoolean,setCartBoolean]=useState(false);
  const addItemToCart=()=>{
              if (!cartBoolean){
                AddToCart(data);

              }
  }
  return (
    <>
   
    <div className="w-72 h-[375px] max-w-sm bg-white rounded-lg shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] mx-auto mt-7"
    onClick={()=>setShowModal(true)}>
      <img
        src={data.image}
        alt="image is not loaded"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      
      <div className="p-4">
        <div className="font-bold text-xl mb-1">{data.mealType}</div>
        <div className="font-semibold text-md text-gray-800">{data.name}</div>

        <div className="flex items-center mt-2">
          <span className="text-sm text-gray-600 mr-2">{data.rating}</span>
          <div className="flex text-yellow-500 text-sm">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <span className="text-green-600 font-semibold">
            ${data.caloriesPerServing}
          </span>
          <div onClick={(e)=>e.stopPropagation()}>
            
              <ButtonCard   
          cartBoolean={cartBoolean} 
          onClick={()=>{setCartBoolean(true),addItemToCart();
          }} />
          </div>
        
        </div>
      </div>
    </div>
     {showModal && <ProductModal data={data} 
     setShowModal={setShowModal}
     cartBoolean={cartBoolean}
     setCartBoolean={setCartBoolean}
     addItemToCart={addItemToCart}/>
      }
     </>

  );
};

export default Card;

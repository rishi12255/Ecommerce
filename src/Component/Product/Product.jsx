import React from "react";
import Card from "./component/Card";


const Product = ({ productData }) => {
  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Menu 🍽️</h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto">
        Explore our delicious range of dishes made with love and fresh ingredients.
      </p>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {productData.length === 0 ? (
            <p className="text-center text-gray-500">No items found.</p>
          ) : (
            productData.map((item) => <Card key={item.id} data={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
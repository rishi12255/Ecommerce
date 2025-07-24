import React, { useEffect, useState } from 'react';
import Card from './component/Card';
import productDataApi from '../Api/productData.api';

const Product = ({productData}) => {
 



  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {productData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

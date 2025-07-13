import React, { useEffect, useState } from 'react';
import Card from './component/Card';
import productDataApi from '../Api/productData.api';

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    productDataApi(setProductData);
  }, []);

  return (
    <div className="min-h-screen bg-white px-4 py-10">
    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;

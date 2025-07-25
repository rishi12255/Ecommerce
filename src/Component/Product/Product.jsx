import React, { useEffect, useState } from 'react';
import Card from './component/Card';
import productDataApi from '../Api/productData.api';

const Product = ({ searchText }) => {
  const [productData, setProductData] = useState([]);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    productDataApi(setProductData, setMainData);
  }, []);

  useEffect(() => {
    if (!searchText.trim()) {
      setProductData(mainData);
    } else {
      const filtered = mainData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setProductData(filtered);
    }
  }, [searchText, mainData]);

  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Menu 🍽️</h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto">
        Explore our delicious range of dishes made with love and fresh ingredients.
      </p>
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

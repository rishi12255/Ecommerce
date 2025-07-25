// App.jsx
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import HeroSection from './Component/HeroSection';
import Categories from './Component/Categories';
import Footer from './Component/Footer';
import Product from './Component/Product/Product';
import productDataApi from './Component/Api/productData.api';

function App() {
  const [mainData, setMainData] = useState([]);
  const [productData, setProductData] = useState([]);
  const location = useLocation();
  const productRef = useRef(null);
    const [searchText, setSearchText] = useState("");

  useEffect(() => {
    productDataApi(setMainData, setProductData);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToProduct && productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className='pt-20'>
      <NavBar searchText={searchText} setSearchText={setSearchText}/>
      <HeroSection />
      <Categories setProductData={setProductData} mainData={mainData} />
      <div ref={productRef}>
        <Product productData={productData} searchText={searchText}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;

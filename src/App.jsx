import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Component/NavBar/Navbar';
import HeroSection from './Component/HeroSection';
import Categories from './Component/Categories';
import Footer from './Component/Footer';
import Product from './Component/Product/Product';
import productDataApi from './Component/Api/productData.api';


function App() {
  const [mainData, setMainData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const productRef = useRef(null);
  const location = useLocation();


  useEffect(() => {
    productDataApi(setProductData, setMainData);
  }, []);


  useEffect(() => {
    if (location.state?.scrollToProduct && productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState({}, document.title);
    }
  }, [location]);


  return (
    <div className='pt-20'>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <HeroSection />
      <Categories
        setProductData={setProductData}
        mainData={mainData}
        scrollToMenuRef={productRef}
      />
      <div ref={productRef}>
        <Product productData={productData} searchText={searchText} />
      </div>
      <Footer />
    </div>
  );
}


export default App; 
import { useState } from 'react'

import NavBar from './Component/NavBar/Navbar'
import HeroSection from './Component/HeroSection'
import Categories from './Component/Categories'
import Footer from './Component/Footer'
import Product from './Component/Product/Product' 
import { useEffect } from 'react'
import productDataApi from './Component/Api/productData.api'


function App() {
 const [mainData, setMainData] = useState([]);
  const [productData, setProductData] = useState([]);
   useEffect(() => {
     productDataApi(setMainData, setProductData);
   }, []);
   console.log("main data", mainData);


  return (
    <>
     <NavBar/>
     <HeroSection/>
     <Categories setProductData={setProductData} mainData={mainData}/>
     <Product productData={productData}/>
     <Footer/>
    </>
  )
}

export default App

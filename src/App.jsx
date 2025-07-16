import { useState } from 'react'

import NavBar from './Component/NavBar/Navbar'
import HeroSection from './Component/HeroSection'
import Categories from './Component/Categories'
import Footer from './Component/Footer'
import Product from './Component/Product/Product'


function App() {
 
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <HeroSection/>
     <Categories/>
     <Product/>
     <Footer/>
    </>
  )
}

export default App

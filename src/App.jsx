import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Products from './sections/Products'
import ProductsCard from './sections/Products'
import ShopByCategory from './sections/ShopByCategory'
import WhyDhakapa from './sections/WhyDhakapa'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShopByCategory/>
    <Products/>
    <WhyDhakapa/>
    <Footer/>
    
    </>
  )
}

export default App

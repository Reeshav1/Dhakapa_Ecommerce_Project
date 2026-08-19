import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Products from './sections/Products'
import ProductsCard from './sections/Products'
import ShopByCategory from './sections/ShopByCategory'
import WhyDhakapa from './sections/WhyDhakapa'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShopByCategory/>
    <Products/>
    <WhyDhakapa/>
    
    </>
  )
}

export default App

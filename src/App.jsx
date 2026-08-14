import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Products from './sections/Products'
import ProductsCard from './sections/Products'
import ShopByCategory from './sections/ShopByCategory'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShopByCategory/>
    <Products/>
    
    </>
  )
}

export default App

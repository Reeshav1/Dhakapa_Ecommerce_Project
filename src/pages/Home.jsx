import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import ShopByCategory from '../sections/ShopByCategory'
import Products from '../sections/Products'
import WhyDhakapa from '../sections/WhyDhakapa'
import Footer from '../sections/Footer'

const Home  = () => {
  return (
    <>
    <Hero/>
    <ShopByCategory/>
    <Products/>
    <WhyDhakapa/>
     </>
  )
}

export default Home 
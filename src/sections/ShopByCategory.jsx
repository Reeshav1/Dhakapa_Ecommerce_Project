import React from 'react'
import Button from "../components/Button";
import CategoryCard from '../components/CategoryCard';
import Category from '../data/ShopByCategory';



const ShopByCategory = () => {
  return (
       <>
    <section className="max-w-7xl mx-auto px-6 py-4 ">
      <div className="flex justify-between mt-4">
        <h1 className="text-3xl font-bold">Shop By Category</h1>
        <Button className="text-white">See All Products</Button>
      </div>
      <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
      </div>
      <div className="category flex gap-4">
       {Category.map((elem)=>{
        return <CategoryCard props={elem}/>
        console.log(elem)
       })}
      </div>
    </section>
    </>
  )
}

export default ShopByCategory
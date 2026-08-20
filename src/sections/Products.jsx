import React from "react";
import Button from "../components/Button";
import ProductsCard from "../components/ProductsCard";
import products from "../data/Products";

const Products = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto px-6 py-4 ">
      <div className="flex justify-between mt-6">
        <h1 className="text-3xl font-bold">Featured Products</h1>
        <Button className="text-white">See All Products</Button>
      </div>
      <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
      {
      products.map((product)=>{
        return <ProductsCard props={product}/>
      })
      }
      </div>
    </section>
    </>
  );
};

export default Products;

import React from "react";
import { CiSearch } from "react-icons/ci";
import products from "../data/Products";
import ProductsCard from "../components/ProductsCard";

const ProductsPage = () => {
  return (
    <>
      <div className="max-w-7xl m-auto px-6 py-4">
        {/* Page Header */}
        <section className="">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold font-mono">Our Products</h1>
            <p className="text-gray-400">
              Discover thoughtfully crafted bags that bring together traditional
              Nepali craftsmanship and contemporary design.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section>
          <div className="flex gap-4 mt-5 font-serif">
            <button className="border px-4 py-2 rounded-3xl hover:bg-[#263F79] hover:text-white ">
              All
            </button>
            <button className="border px-4 py-2 rounded-3xl hover:bg-[#263F79] hover:text-white ">
              Backpacks
            </button>
            <button className="border px-4 py-2 rounded-3xl hover:bg-[#263F79] hover:text-white ">
              Handbags
            </button>
            <button className="border px-4 py-2 rounded-3xl hover:bg-[#263F79] hover:text-white ">
              Tote Bags
            </button>
            <button className="border px-4 py-2 rounded-3xl hover:bg-[#263F79] hover:text-white ">
              Travel Bags
            </button>
            <button className="border px-4 py-2 rounded-3xl hover:bg-[#263F79] hover:text-white ">
              Briefcases
            </button>
          </div>
        </section>

        {/* Products Section */}
        <main>
          {/* Toolbar */}
          <div className="border max-w-7xl m-auto py-3  rounded-2xl w-full mt-6 flex justify-between">
            <div className="flex items-center ml-5 flex-1 border-none">
              <CiSearch size={25} />
              <input
                type="text"
                placeholder="Search products..."
                className="ml-4 font-serif w-full outline-none "
              />
            </div>
            <div className="h-10 border-l border-gray-300 mx-4"></div>

            <div className="flex gap-2 mr-4 font-serif text-center ">
              <button className="border w-23  py-2 rounded-xl flex justify-center  ">Filter</button>
              <select className="border py-2 rounded-xl text-center">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </main>
        <div className="flex gap-10 justify-center mt-10 ">
        {products.map((products)=>{
          return <ProductsCard props={products}/>
        })}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

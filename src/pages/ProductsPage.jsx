import React from "react";
import products from "../data/Products";
import ProductsCard from "../components/ProductsCard";
import SearchBar from "../components/SearchBar";

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

        <SearchBar />
        {/* Products Section */}

        <div className="flex gap-10 justify-center mt-10 ">
          {products.map((products) => {
            return <ProductsCard props={products} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

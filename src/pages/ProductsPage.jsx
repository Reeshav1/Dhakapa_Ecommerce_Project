import React,{useState} from "react";
import products from "../data/Products";
import ProductsCard from "../components/ProductsCard";
import { CiSearch } from "react-icons/ci";
import ShopByCategory from "../data/ShopByCategory";



const ProductsPage = () => {
   const [input,setInput] = useState('');
   const [category,setCategory] = useState('All');

    const handleUserInput =(e)=>{
        setInput(e.target.value);  
        conso
    }

    const handInnerText =(e)=>{
      const clickedCategory = e.target.innerText;
      setCategory(clickedCategory);
      console.log(clickedCategory)
    }


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
            {ShopByCategory.map((items)=>(
              <button className="border px-4 py-2 rounded-3xl hover:bg-[#263F79] hover:text-white " onClick={handInnerText}>
                {items.category}
            </button>
            ))}
          </div>
        </section>

           <main>
          {/* Toolbar */}
          <div className="border max-w-7xl m-auto py-3  rounded-2xl w-full mt-6 flex justify-between">
            <div className="flex items-center ml-5 flex-1 border-none">
              <CiSearch size={25} />
              <input
                type="text"
                value={input}
                placeholder="Search products..."
                className="ml-4 font-serif w-full outline-none "
                onChange={handleUserInput}
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
        {/* Products Section */}

        <div className="flex gap-10 justify-center mt-10 ">
          {products.filter((item)=>{
            if(category == "All"){
              return true;
            }
            return category === item.category
            })
          .filter((item)=>{
            return input.toLowerCase() === ''? item : item.name.toLowerCase().includes(input.toLowerCase())
          }).map((product) => {
            return <ProductsCard props={product}/>;
          })}

        </div>
      </div>
    </>
  );
};

export default ProductsPage;

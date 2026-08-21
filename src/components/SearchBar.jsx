
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import products from '../data/Products';

const SearchBar = () => {
    const [input,setInput] = useState('');

    const handleUserInput =(e)=>{
        setInput(e.target.value);  
    }

  return (
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
  )
}

export default SearchBar
import React from 'react'
import casualBag from "../assets/CasualBagImage.png"

const CategoryCard = () => {
  return (
    <>
    <div className="container h-[104px] w-[104px] rounded  bg-gray-400/30">
        <div>
        <img src={casualBag} alt="" className='object-contain h-full w-full'/>
        </div>
        <div>
            <p className='text-center font-semibold mt-2'>Casual Bags</p>
        </div>
    </div>
    </>
  )
}

export default CategoryCard
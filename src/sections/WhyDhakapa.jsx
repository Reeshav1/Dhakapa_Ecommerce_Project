import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import Button from '../components/Button';
 

const WhyDhakapa = () => {
  return (
    <>
    <section className='max-w-7xl m-auto px-6 py-4 '>
        <div className='mt-4'>
            <h1 className='text-4xl text-center font-bold'>Why Dhakapa ?</h1>
        </div>
        <div className='grid grid-cols-3 '>
        <div className="left flex flex-col gap-2 ">
            <h3 className='mt-[50px] font-semibold text-2xl md:text-xl  lg:text-2xl flex items-center gap-2'><FaCaretRight size={20}/>Heritage CraftsManship</h3>
            <p className='text-xl md:text-[17px] lg:text-xl'>Inspired by timeless traditions and crafted with attention to detail, each bag carries a touch of heritage in a modern form </p>

             <h3 className='mt-[80px] font-semibold text-2xl flex items-center gap-2'><FaCaretRight size={20}/>Modern Vogue</h3>
            <p className='text-xl'>Contemporary silhouettes and refined details create a stylish look designed for today’s fashion-conscious lifestyle.</p>
        </div>
        <div className="image ">
            <img src="https://i.ibb.co/tpmFHK73/Why-Dhakpa.png" alt="" className='object-contain h-[400px] w-[400px] ' />
        </div>
        <div className="right mt-[50px] flex flex-col gap-2">
            
            <h3 className='font-semibold text-2xl flex items-center gap-2'><FaCaretRight size={20} />Crafted for Everyday</h3>
            <p className='text-xl'>Thoughtfully designed with practical space and versatile styles, making tradition effortless for everyday use.</p>

            <h3 className='mt-[80px] font-semibold text-2xl flex items-center gap-2'> <FaCaretRight size={20}/>Timeless Appeal</h3>
            <p className='text-xl'>A balance of classic character and modern aesthetics creates bags that remain stylish beyond changing trends.</p>
        </div>
        </div>
        <div className='flex justify-center mt-4'>
            <Button>Explore the Collection</Button>
        </div>

    </section>
      
    </>
  )
}

export default WhyDhakapa;

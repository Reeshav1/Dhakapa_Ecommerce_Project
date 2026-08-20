import React from 'react'
import logo from "../assets/logo.png"
import { FaShoppingCart ,FaBars} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
return (
  <nav className="w-full bg-[#f5f3e9]">
    <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

      {/* Logo + Dhakapa */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Dhakapa"
          className="h-12 w-auto"
        />
        <span className="text-3xl font-bold">
          Dhakapa
        </span>
      </div>

    {/* Desktop navigation */}
    <div className="hidden md:flex items-center gap-8 font-medium">
       <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
    </div>

    {/* Desktop actions */}
    <div className="hidden md:flex items-center gap-5">
      <a href="#" className="text-xl"><FaShoppingCart size={22} /></a>
      <a
        href="#"
        className="px-5 py-2 bg-blue-600 text-white rounded-lg"
      >
        Pre-Order
      </a>
    </div>
    {/* Mobile menu */}
    <button className="md:hidden text-2xl">
      <FaBars />
    </button>

  </div>
</nav>
  )
}

export default Navbar

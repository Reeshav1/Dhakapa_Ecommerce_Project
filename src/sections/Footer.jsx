import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-[#f5f3e9] text-black mt-0">
      <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="text-2xl font-bold">Dhakapa</h2>
          <p class="mt-3 text-black">
            Where tradition meets modern style. Discover handcrafted bags made
            with heritage and care.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
          <ul class="space-y-2 text-black">
            <li>
              <a href="#" class="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-black">
                Products
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-black">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">Contact Us</h3>
          <p class="text-black">Kathmandu, Nepal</p>
          <p class="text-black mt-2">info@dhakapa.com</p>
          <p class="text-black mt-2">+977 9800000000</p>
        </div>
      </div>
      <div class=" max-w-7xl m-auto border-t border-black/20  py-4 text-black flex justify-between">
        © 2026 Dhakapa. All rights reserved.
        <div className="flex gap-6 text-3xl">
          <a href="https://www.facebook.com/profile.php?id=61577021860875" target="_blank" rel="noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/dhakapa_official/" target="_blank" rel="noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

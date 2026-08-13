import React from "react";
import heroImg from "../assets/Heroimage.png"

const Hero = () => {
  return (
    <section className="hero px-6 max-w-7xl mx-auto ">
      <div className="hero-content bg-gradient-to-r from-[#3C63A8] via-[#263F79] to-[#122750] rounded-2xl flex mt-2">
        <div className="hero-text p-4 text-white max-w-[70%]">
          <h1 className="text-3xl font-bold text-white pt-4  ">
            Elevate Your Style:
            <br />
            Where Tradition Meets Vogue
          </h1>
          <p className="mt-3 font-mono">
            Experience Sound in Its Purest Formmed Justo Jam, Venentis Eii Amet
            Tortor et, Cortier, Peritillle Metus. Ut aelellque klleuthenlina
            Figita Elf eis Lucher, Ligula Polin, Intantum Vell, Geoie,
            Oitexisier som Temper Pec. 
          </p>
          <div className="hero-buttons flex flex-col  md:flex-row gap-4 mt-4 items-start text-center">
            <a href="#" className="btn primary border w-40 h-10 p-2 rounded hover:bg-[#263F79]/90">
              Shop Collection
            </a>
            <a href="#" className="btn secondary border w-40 h-10 rounded px-2 py-2  hover:bg-[#263F79]/90">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image hidden md:flex items-end ">
          <img src={heroImg} alt="Leather backpack"  className="object-contain h-60  "/>
        </div>
      </div>
    </section>
  );
};

export default Hero;

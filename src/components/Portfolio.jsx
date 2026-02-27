import {
  portfolioProject1,
  portfolioProject2,
  portfolioProject3,
  portfolioProject4,
  portfolioProject5,
  portfolioProject6,
  portfolioProject7,
} from "@/assets";
import Image from "next/image";
import React from "react";

const PortfolioGrid = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header Section */}
        <div className="relative mb-16">
          <h2 className="absolute -top-16 left-0 text-[70px] sm:text-[90px] md:text-[100px] font-bold text-gray-100 opacity-40 select-none z-0">
            Portfolio
          </h2>
          <h3 className="text-3xl font-bold text-black relative z-10 pt-4  ">
            My Awesome Portfolio
          </h3>
        </div>

        {/* --- THE EXACT LAYOUT START --- */}
        <div className="flex flex-col gap-6">
          
          {/* ROW 1: Small + Large */}
          <div className="flex flex-col md:flex-row gap-6 h-auto md:h-87.5">
            <div className="md:w-1/3 h-full rounded-[30px] overflow-hidden group relative">
              <Image src={portfolioProject1} alt="p1" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
            </div>
            <div className="md:w-2/3 h-full rounded-[30px] overflow-hidden group relative">
              <Image src={portfolioProject2} alt="p2" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
            </div>
          </div>

          {/* ROW 2: Large + Small */}
          <div className="flex flex-col md:flex-row gap-6 h-auto md:h-87.5">
            <div className="md:w-2/3 h-full rounded-[30px] overflow-hidden group relative">
              <Image src={portfolioProject3} alt="p3" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
            </div>
            <div className="md:w-1/3 h-full rounded-[30px] overflow-hidden group relative">
              <Image src={portfolioProject4} alt="p4" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
            </div>
          </div>

          {/* ROW 3: Equal Three Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-75">
            <div className="h-full rounded-[30px] overflow-hidden group relative">
              <Image src={portfolioProject5} alt="p5" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
            </div>
            <div className="h-full rounded-[30px] overflow-hidden group relative">
              <Image src={portfolioProject6} alt="p6" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
            </div>
            <div className="h-full rounded-[30px] overflow-hidden group relative">
              <Image src={portfolioProject7} alt="p7" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
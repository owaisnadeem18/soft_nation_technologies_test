import { portfolioProject2 } from "@/assets"; // Example image, replace with your product asset
import Image from "next/image";
import React from "react";

const ProductDetailContent = () => {
  return (
    <main className="container mx-auto px-6 lg:px-20 py-12 bg-white">
      {/* --- TOP SECTION: Image + Info --- */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* LEFT: Product Image Gallery */}
        <div className="w-full lg:w-3/5">
          <div className="border border-blue-100 rounded-lg p-10 flex items-center justify-center bg-white shadow-sm min-h-112.5">
            <Image 
              src={portfolioProject2} // Replace with dynamic product image later
              alt="Main Product" 
              className="object-contain max-h-87.5"
            />
          </div>
        </div>

        {/* RIGHT: Product Buy Box */}
        <div className="w-full lg:w-2/5 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">C9300L-24P-4G-E</h1>
            <p className="text-[13px] text-gray-500 mt-2 leading-relaxed uppercase font-semibold tracking-wide">
              CATALYST 9300L 24P POE NTWK ESSENTIALS 4X1G UPLINK
            </p>
          </div>

          {/* Ratings & Reviews */}
          <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
            <div className="flex text-yellow-400 text-lg">★★★★☆</div>
            <span className="text-sm text-gray-400 font-bold">4.4 (88)</span>
          </div>

          <div className="space-y-1">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              Category: <span className="text-black ml-2 font-bold uppercase">electronics</span>
            </p>
          </div>

          {/* Price Area */}
          <div className="pt-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-gray-900 tracking-tighter">$979.99</span>
              <span className="bg-green-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">27% off</span>
            </div>

            {/* Controls: Quantity + Add to Cart */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-md">
                <button className="px-4 py-2 hover:bg-gray-50 text-gray-600 border-r">-</button>
                <input type="text" value="1" className="w-12 text-center text-sm font-bold focus:outline-none" readOnly />
                <button className="px-4 py-2 hover:bg-gray-50 text-gray-600 border-l">+</button>
              </div>
              
              <button className="bg-[#1D61B9] text-white px-10 py-3 rounded-md font-bold text-sm uppercase flex-1 hover:bg-blue-800 transition-all shadow-sm">
                Add to Cart
              </button>
              
              <button className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                <span className="text-xl text-gray-400">♡</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: Search & Product List --- */}
      <div className="mt-20 max-w-5xl">
        <div className="relative mb-8 group">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full border border-blue-100 rounded-full py-3.5 px-14 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
          />
          <span className="absolute left-6 top-4 text-gray-400">🔍</span>
        </div>

        {/* Suggested/Sub-Products Card */}
        <div className="border border-blue-50 rounded-[20px] shadow-sm overflow-hidden">
          <div className="bg-white p-8">
            <h2 className="text-xl font-bold mb-6 text-gray-800 tracking-tight">Products</h2>
            <div className="space-y-1">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-6 py-4 border-b border-gray-50 last:border-0 hover:bg-blue-50/30 px-4 -mx-4 transition-all cursor-pointer">
                  {/* Small Thumb */}
                  <div className="w-12 h-9 bg-gray-100 rounded border border-gray-200 shrink-0"></div>
                  {/* Title */}
                  <p className="text-[12px] font-bold text-gray-600 uppercase leading-snug">
                    2911 w/ HWIC-16A and 2 CAB-HD8-ASYNC Terminal Server Bundle
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailContent;
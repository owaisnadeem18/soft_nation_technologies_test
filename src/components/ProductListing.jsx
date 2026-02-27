import React from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronUp } from 'lucide-react';

const ProductListing = () => {
  // Fake array for structure (Baad mein API yahan map hogi)
  const products = Array(5).fill(null);

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="container mx-auto py-10 flex flex-col md:flex-row gap-8">
        
        {/* LEFT SIDE: Filter Sidebar (Fixed width on desktop) */}
        <aside className="w-full md:w-64 shrink-0">
            <div className='flex items-center' >

          <h2 className="text-2xl font-bold">Filter</h2>
          <ChevronRight className="w-5 h-5 text-black flex sm:hidden " />
            </div>
          
          {/* Price Filter */}
          <div className=" py-4">
            <div className="flex justify-between items-center mb-4 cursor-pointer">
              <span className="font-semibold text-gray-800">Price</span>
              <ChevronUp/>
            </div>
            <div className="space-y-3">
              {['$100-$299.99 (7)', '$300-$499.99 (11)', '$500-$799.99 (46)'].map((range) => (
                <label key={range} className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                  <span className="text-sm">{range}</span>
                </label>
              ))}
              <button className="text-blue-600 text-xs font-semibold mt-2">See more</button>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="border-t border-b border-[#CCCCCC] py-4">
            <div className="flex justify-between items-center mb-4 cursor-pointer">
              <span className="font-semibold text-gray-800">Rating</span>
            <ChevronUp/>
            </div>
            <div className="space-y-3">
              {[5, 4, 3].map((star) => (
                <label key={star} className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                  <div className="flex text-yellow-400 text-sm">
                    {"★".repeat(star)}{"☆".repeat(5-star)}
                  </div>
                </label>
              ))}
              <button className="text-blue-600 text-xs font-semibold mt-2">See more</button>
            </div>
          </div>
        </aside>

        {/* RIGHT SIDE: Product List */}
        <main className="flex-1 space-y-4">
          {products.map((_, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-sm p-6 flex flex-col lg:flex-row items-center gap-6 hover:shadow-md transition-shadow relative"
            >
              {/* Product Image */}
              <div className="w-48 h-32 relative shrink-0">
                <div className="bg-gray-100 w-full h-full rounded flex items-center justify-center">
                   {/* <Image src={productImg} alt="C9300L" className="object-contain" /> */}
                   <span className="text-xs text-gray-400 italic">Product Image</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-lg font-bold text-gray-900">C9300L-24P-4G-E</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase max-w-md">
                  Catalyst 9300L 24P POE NTWK Essentials 4X1G Uplink
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-3">
                  <div className="flex text-yellow-400 text-sm">★★★★☆</div>
                  <span className="text-xs text-gray-400">4.4 (88)</span>
                </div>
              </div>

              {/* Price & Action Section */}
              <div className="w-full lg:w-48 border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-6 flex flex-col items-center lg:items-end justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">$979.99</span>
                  <span className="bg-green-600 text-white text-[10px] px-1 py-0.5 rounded font-bold">27% off</span>
                </div>
                <button className="bg-[#1D61B9] hover:bg-blue-800 text-white w-full py-2 rounded-md font-semibold text-sm transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          {/* Load More Button */}
          <div className="flex justify-center mt-10">
            <button className="border border-[#1D61B9] text-[#1D61B9] px-10 py-2.5 font-semibold text-sm hover:bg-blue-50 transition-colors">
              Load More Results
            </button>
          </div>
        </main>

      </div>
    </div>
  );
};

export default ProductListing;
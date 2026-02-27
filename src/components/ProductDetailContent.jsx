"use client"
import React, { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { Star, Minus, Plus, Search, Heart } from "lucide-react";
import Image from "next/image";
import { Spinner } from "./ui/spinner";

const ProductDetailContent = () => {
  const { id } = useParams();
  const router = useRouter();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  
  // Search & Related State
  const [allItems, setAllItems] = useState([]); // Backup for searching
  const [filteredList, setFilteredList] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Fetch Main Product & All Products (for search)
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Fetch current product
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);

        // Fetch all products for searching capability
        const listRes = await fetch(`https://fakestoreapi.com/products`);
        const listData = await listRes.json();
        setAllItems(listData);
        setFilteredList(listData.slice(0, 5)); // Initial view
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) loadData();
  }, [id]);

  // 2. DEBOUNCING LOGIC (Requirement)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredList(allItems.slice(0, 5));
      } else {
        const filtered = allItems.filter(item => 
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredList(filtered);
      }
    }, 500); // 500ms wait

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, allItems]);

  if (loading) {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
    <Spinner size="lg" />
  </div>
);
}

  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <main className="container mx-auto px-6 lg:px-12 py-12 bg-white">
      {/* --- TOP SECTION --- */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:w-3/5">
          <div className="border border-blue-100 rounded-lg p-10 flex items-center justify-center bg-white shadow-sm min-h-112.5">
            <img src={product.image} alt={product.title} className="object-contain max-h-87.5" />
          </div>
        </div>

        <div className="w-full lg:w-2/5 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900 uppercase">{product.title}</h1>
          <p className="text-[13px] text-gray-500 font-semibold uppercase">{product.description}</p>
          
          <div className="flex items-center gap-2 border-b pb-4">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill={i < Math.round(product.rating.rate) ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-sm text-gray-400 font-bold">{product.rating.rate} ({product.rating.count})</span>
          </div>

          <div className="pt-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-gray-900">${product.price}</span>
              <span className="bg-green-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">IN STOCK</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-md">
                <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="px-4 py-2 border-r">-</button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button onClick={() => setQuantity(q => q+1)} className="px-4 py-2 border-l">+</button>
              </div>
              <button className="bg-[#1D61B9] text-white px-10 py-3 rounded-md font-bold text-sm uppercase flex-1 shadow-sm">Add to Cart</button>
              <button className="p-3 border border-gray-200 rounded-md"><Heart size={20} className="text-gray-400" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SEARCH SECTION (The Fix) --- */}
      <div className="mt-20 max-w-5xl">
        <div className="relative mb-8">
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..." 
            className="w-full border border-blue-100 rounded-full py-3.5 px-14 focus:ring-2 focus:ring-blue-100 bg-[#F9FBFF] outline-none"
          />
          <Search className="absolute left-6 top-4 text-gray-400" size={20} />
          {searchTerm && (
            <button 
                className="absolute right-6 top-4 text-xs text-blue-600 font-bold"
                onClick={() => setSearchTerm("")}
            >
                Clear
            </button>
          )}
        </div>

        <div className="border border-blue-50 rounded-4xl shadow-sm overflow-hidden">
          <div className="bg-white p-8">
            <h2 className="text-xl font-bold mb-6 text-gray-800">
                {searchTerm ? `Search Results (${filteredList.length})` : "Products"}
            </h2>
            <div className="space-y-1">
              {filteredList.length > 0 ? filteredList.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => router.push(`/product/${item.id}`)}
                  className="flex items-center gap-6 py-4 border-b border-gray-50 last:border-0 hover:bg-blue-50/30 px-4 -mx-4 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white border rounded p-1 shrink-0">
                    <Image src={item.image} width={36} height={36} alt="" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-[12px] font-bold text-gray-600 uppercase line-clamp-1 flex-1">
                    {item.title}
                  </p>
                  {/* <span className="text-blue-600 font-bold text-xs">${item.price}</span> */}
                </div>
              )) : (
                <p className="text-center py-4 text-gray-400 italic">No products found matching "{searchTerm}"</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailContent;
"use client"

import React, { useState, useEffect, useMemo } from 'react';
import { ChevronRight, ChevronUp, Star } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import { Spinner } from './ui/spinner';

const ProductListing = () => {
  const router = useRouter();
  const { id: categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  // Filter States
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  // 1. Fetch Data
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url = categoryId 
          ? `https://fakestoreapi.com/products/category/${categoryId}`
          : `https://fakestoreapi.com/products`;
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  // 2. DYNAMIC PRICE RANGES (Requirement: Not hardcoded)
  const priceRanges = useMemo(() => {
    if (products.length === 0) return [];
    const prices = products.map(p => p.price);
    const min = Math.floor(Math.min(...prices));
    const max = Math.ceil(Math.max(...prices));
    
    // Dividing price into 3 dynamic buckets
    const step = (max - min) / 3;
    return [
      { label: `$${min} - $${Math.round(min + step)}`, min: min, max: min + step },
      { label: `$${Math.round(min + step)} - $${Math.round(min + 2 * step)}`, min: min + step, max: min + 2 * step },
      { label: `$${Math.round(min + 2 * step)} - $${max}`, min: min + 2 * step, max: max },
    ];
  }, [products]);

  // 3. FILTERING LOGIC
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Rating Filter
      const matchesRating = selectedRatings.length === 0 || 
        selectedRatings.some(r => Math.floor(product.rating.rate) >= r);

      // Price Filter
      const matchesPrice = selectedPriceRanges.length === 0 || 
        selectedPriceRanges.some(range => product.price >= range.min && product.price <= range.max);

      return matchesRating && matchesPrice;
    });
  }, [products, selectedRatings, selectedPriceRanges]);

  // Handle Selection
  const toggleRating = (rate) => {
    setSelectedRatings(prev => prev.includes(rate) ? prev.filter(r => r !== rate) : [...prev, rate]);
  };

  const togglePrice = (range) => {
    setSelectedPriceRanges(prev => prev.some(r => r.label === range.label) 
      ? prev.filter(r => r.label !== range.label) : [...prev, range]);
  };

  if (loading) 
  {
    return (
  <div className="min-h-screen w-full flex items-center justify-center">
    <Spinner size="lg" />
  </div>
);
}

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="container mx-auto py-10 flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR */}
        <aside className="w-full md:w-64 shrink-0 border-r border-gray-50 pr-4">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-tighter">Filter</h2>
          
          {/* Price Filter (Dynamic) */}
          <div className="py-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-gray-800">Price</span>
              <ChevronUp size={16}/>
            </div>
            <div className="space-y-3">
              {priceRanges.map((range) => (
                <label key={range.label} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                  <input 
                    type="checkbox" 
                    onChange={() => togglePrice(range)}
                    className="w-4 h-4 rounded border-gray-300 accent-[#1D61B9]" 
                  />
                  {range.label}
                </label>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="py-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-gray-800">Rating</span>
              <ChevronUp size={16}/>
            </div>
            <div className="space-y-3">
              {[5, 4, 3].map((star) => (
                <label key={star} className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    onChange={() => toggleRating(star)}
                    className="w-4 h-4 rounded border-gray-300 accent-[#1D61B9]" 
                  />
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill={i < star ? "currentColor" : "none"} />
                    ))}
                    <span className="text-gray-400 text-[10px] ml-1">& Up</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* PRODUCT LIST */}
        <main className="flex-1 space-y-4">
          <p className="text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">
            Showing {filteredProducts.length} results for "{categoryId || 'All Products'}"
          </p>
          
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              onClick={() => router.push(`/product/${product.id}`)} 
              className="border border-gray-100 rounded-lg p-6 flex flex-col lg:flex-row items-center gap-6 hover:shadow-lg hover:border-blue-100 transition-all cursor-pointer relative"
            >
              <div className="w-40 h-32 relative shrink-0">
                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.title}</h3>
                <p className="text-[11px] text-gray-400 mt-2 uppercase font-medium line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-4">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold">★ {product.rating.rate}</span>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">{product.rating.count} Reviews</span>
                </div>
              </div>

              <div className="w-full lg:w-48 lg:border-l border-gray-50 p-4 flex items-center lg:items-center gap-4 bg-[#fafafa] lg:flex-col">
                <div className="">
                  <span className="text-2xl font-black text-gray-900">${product.price}</span>
                </div>
                <button className="bg-[#1D61B9] text-white w-full py-2.5 rounded font-bold text-[12px] uppercase tracking-wider hover:bg-blue-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          {/* Load More */}
          {visibleCount < filteredProducts.length && (
            <div className="flex justify-center pt-10">
              <button 
                onClick={() => setVisibleCount(prev => prev + 4)}
                className="border-2 border-[#1D61B9] text-[#1D61B9] px-12 py-3 font-bold text-xs uppercase tracking-widest hover:bg-[#1D61B9] hover:text-white transition-all"
              >
                Load More Results
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductListing;
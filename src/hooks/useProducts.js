// src/hooks/useProducts.js
import { useState, useEffect, useMemo } from 'react';

export const useProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  // 1. Fetching Logic
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
        console.error("Products fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  // 2. Dynamic Price Ranges (Requirement: Not hardcoded)
  const priceRanges = useMemo(() => {
    if (products.length === 0) return [];
    const prices = products.map(p => p.price);
    const min = Math.floor(Math.min(...prices));
    const max = Math.ceil(Math.max(...prices));
    const step = (max - min) / 3;
    
    return [
      { label: `$${min} - $${Math.round(min + step)}`, min: min, max: min + step },
      { label: `$${Math.round(min + step)} - $${Math.round(min + 2 * step)}`, min: min + step, max: min + 2 * step },
      { label: `$${Math.round(min + 2 * step)} - $${max}`, min: min + 2 * step, max: max },
    ];
  }, [products]);

  // 3. Filtering Logic
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesRating = selectedRatings.length === 0 || 
        selectedRatings.some(r => Math.floor(product.rating.rate) >= r);
      const matchesPrice = selectedPriceRanges.length === 0 || 
        selectedPriceRanges.some(range => product.price >= range.min && product.price <= range.max);
      return matchesRating && matchesPrice;
    });
  }, [products, selectedRatings, selectedPriceRanges]);

  return {
    loading,
    priceRanges,
    filteredProducts,
    selectedRatings,
    setSelectedRatings,
    selectedPriceRanges,
    setSelectedPriceRanges
  };
};
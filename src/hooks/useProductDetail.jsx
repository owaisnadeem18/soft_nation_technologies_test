// src/hooks/useProductDetail.js
import { useState, useEffect } from 'react';

export const useProductDetail = (id, searchTerm) => {
  const [product, setProduct] = useState(null);
  const [allItems, setAllItems] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Initial Fetch (Main Product + Search List)
  useEffect(() => {
    if (!id) return;
    const loadData = async () => {
      setLoading(true);
      try {
        const [prodRes, listRes] = await Promise.all([
          fetch(`https://fakestoreapi.com/products/${id}`),
          fetch(`https://fakestoreapi.com/products`)
        ]);
        const prodData = await prodRes.json();
        const listData = await listRes.json();
        
        setProduct(prodData);
        setAllItems(listData);
        setFilteredList(listData.slice(0, 5));
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  // 2. Debounced Search Logic
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
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, allItems]);

  return { product, filteredList, loading };
};
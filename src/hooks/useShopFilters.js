import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import filters from "../pages/Shop/components/categoryKeywords.js";

function useShopFilters(products) {
  const location = useLocation();

  // states
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [price, setPrice] = useState(3000);
  const [sortBy, setSortBy] = useState("featured");

  // Sync search & category state with incoming location.state
  useEffect(() => {
    if (location.state?.search) {
      setSearch(location.state.search);
    }
    if (location.state?.category) {
      setSelectedCategory([location.state.category]);
    }
  }, [location.state]);

  // Category function
  function handleCategoryChange(event) {
    const clickedCategory = event.target.value;
    const isSelected = selectedCategory.includes(clickedCategory);
    if (isSelected) {
      const newCategories = selectedCategory.filter(
        (category) => category !== clickedCategory,
      );
      setSelectedCategory(newCategories);
    } else {
      setSelectedCategory((prev) => [...prev, clickedCategory]);
    }
  }
  ////// filtering //////
  
  const filteredProducts = (products || []).filter((product) => {
    const matchesSearch =
      (product.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (product.category || "").toLowerCase().includes(search.toLowerCase());
    const matchesPrice = product.price <= price; // Price
    let matchesCategory = true; // Category

    // If condition
    if (selectedCategory.length > 0) {
      const text = `${product.name || ""} ${product.category || ""}`.toLowerCase();
      matchesCategory = selectedCategory.some((category) => {
        const keywords = filters[category] || [category];
        return keywords.some((keyword) => text.includes(keyword.toLowerCase()));
      });
    }
    return matchesPrice && matchesCategory && matchesSearch;
  });

  // SortBy filter
  const sortedProducts = [...filteredProducts];
  if (sortBy === "priceLow") {
      sortedProducts.sort((a, b) => {
        return a.price - b.price;
      });
  }
  if (sortBy === "priceHigh") {
    sortedProducts.sort((a, b) => {
        return b.price - a.price;
      });
  }
  if (sortBy === "highestRated") {
    sortedProducts.sort((a, b) => {
        return a.rating - b.rating;
      });
  }
  // Price function
  function handlePriceChange(event) {
    setPrice(Number(event.target.value))
  }

  // Reset function
  function ResetAll() {
    setPrice(3000)
    setSelectedCategory([])
    setSearch("");
    setSortBy("featured")
  }

  // Search function
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  // SoryBy function
  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  // return
return {
  search,
  setSearch,
  selectedCategory,
  price,
  sortBy,
  filteredProducts,
  sortedProducts,
  handleCategoryChange,
  handlePriceChange,
  handleSearchChange,
  handleSortChange,
  ResetAll,
};
}

export default useShopFilters;

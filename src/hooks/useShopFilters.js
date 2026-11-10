import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

function useShopFilters(products = []) {
  const location = useLocation();

  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [price, setPrice] = useState(3000);
  const [sortBy, setSortBy] = useState("featured");
  const search = searchText.trim().toLowerCase();

  // Debounce 
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  //  Sync filters from navigation
  useEffect(() => {
    // search
    if (location.state?.search !== undefined) {
      setSearchText(location.state.search);
    } else {
      setSearchText("");
    }

    // Category
    if (location.state?.category) {
      setSelectedCategories([location.state.category]);
    } else {
      setSelectedCategories([]);
    }
  }, [location.state]);

  // Search function
  function handleSearchChange(e) {
    setSearchText(e.target.value);
  }
  // Category function
  function handleCategoryChange(e) {
    const selectedCategory = e.target.value;
    setSelectedCategories((prev) => {
      if (prev.includes(selectedCategory)) {
        return prev.filter((category) => category !== selectedCategory);
      } else {
        return [...prev, selectedCategory];
      }
    });
  }
  // Price function
  function handlePriceChange(e) {
    setPrice(Number(e.target.value));
  }
  // Sort function
  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  // useMemo
  const sortedProducts = useMemo(() => {
    // 1. Search filter
    const filteredBySearch = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(debouncedSearch) ||
        product.description.toLowerCase().includes(debouncedSearch)
      );
    });

    // 2. Category filter
    const filteredByCategory = filteredBySearch.filter((item) => {
      return (
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category)
      );
    });

    // 3. Price filter
    const filteredByPrice = filteredByCategory.filter((item) => {
      return item.price <= price;
    });

    // 4. Sort filter
    const finalProducts = [...filteredByPrice];
    if (sortBy === "priceLow") {
      finalProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHigh") {
      finalProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "highestRated") {
      finalProducts.sort((a, b) => b.rating - a.rating);
    }

    return finalProducts;
  }, [products, debouncedSearch, selectedCategories, price, sortBy]);
  // End of useMemo

  // Clear filters function
  function clearFilters() {
    setSelectedCategories([]);
    setPrice(3000);
    setSortBy("featured");
    setSearchText("");
    setDebouncedSearch("");
  }

  return {
    // Filter states
    searchText,
    selectedCategories,
    price,
    sortBy,
    sortedProducts,
    // Action handlers
    handleCategoryChange,
    handlePriceChange,
    handleSearchChange,
    handleSortChange,
    clearFilters,
  };
}
export default useShopFilters;

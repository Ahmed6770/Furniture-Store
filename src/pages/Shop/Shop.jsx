import { useState, useEffect } from "react";
import ProductGrid from "./components/ProductGrid.jsx";
import FilterSidebar from "./components/FilterSidebar.jsx";
import useProducts from "../../hooks/useProducts.js";
import ShopHeader from "./components/ShopHeader.jsx";
import EmptyState from "./components/EmptyState.jsx";
import { SearchX } from "lucide-react";
import NavigationControls from "../../components/shared/NavigationControls.jsx";
import useShopFilters from "../../hooks/useShopFilters.js";

function Shop() {
  // Getting data from shared context
  const { products, loading, error } = useProducts();

  const {
    search,
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
  } = useShopFilters(products);

  // Pagination
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // scroll when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  // Change pages function
  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / productsPerPage),
  );
  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }
  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }
  // Resets the pages number when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, price, sortBy]);


  return (
    <div className="min-h-[60vh] space-y-6">
      <ShopHeader
        productsCount={filteredProducts.length}
        handleSearchChange={handleSearchChange}
        search={search}
        sortBy={sortBy}
        handleSortChange={handleSortChange}
        handleCategoryChange={handleCategoryChange}
        handlePriceChange={handlePriceChange}
        ResetAll={ResetAll}
        price={price}
        selectedCategory={selectedCategory}
      />

      <div className="flex flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:gap-8 lg:px-8">
        <aside className="hidden lg:block w-72 lg:mt-2">
          <FilterSidebar
            handleCategoryChange={handleCategoryChange}
            handlePriceChange={handlePriceChange}
            ResetAll={ResetAll}
            price={price}
            selectedCategory={selectedCategory}
          />
        </aside>

        <div className="flex-1">
          {loading ? (
            <div className="py-20 text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-stone-200 border-t-[#B88746]"></div>
              <p className="mt-4 text-base font-semibold text-stone-700">Loading catalog...</p>
              <p className="mt-1 text-xs text-stone-400">Fetching the latest furniture pieces for you</p>
            </div>
          ) : error && products.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg font-bold text-red-600">Unable to load products</p>
              <p className="mt-2 text-sm text-stone-500">Please check your connection and try refreshing the page.</p>
            </div>
          ) : sortedProducts.length === 0 ? (
            <EmptyState
              icon={<SearchX size={64} />}
              title="No products found"
              description="We couldn't find any products matching your search or selected filters."
              buttonText="Clear Filters"
              onClick={ResetAll}
            />
          ) : (
            <>
              <ProductGrid
                products={sortedProducts.slice(startIndex, endIndex)}
              />
              <div className="mt-8 flex justify-center">
                <NavigationControls
                  onPrevious={goToPreviousPage}
                  onNext={goToNextPage}
                  isPreviousDisabled={currentPage === 1}
                  isNextDisabled={currentPage === totalPages}
                >
                  <p className="min-w-24 text-center text-sm font-medium text-stone-600">
                    Page {currentPage} of {totalPages}
                  </p>
                </NavigationControls>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Shop;

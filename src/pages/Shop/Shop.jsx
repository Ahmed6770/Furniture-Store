import {useContext } from "react";
import ProductGrid from "./components/ProductGrid.jsx";
import FilterSidebar from "./components/FilterSidebar.jsx";
import { ProductsContext } from "../../context/ProductsContext.jsx";
import ShopHeader from "./components/ShopHeader.jsx";
import EmptyState from "./components/EmptyState.jsx";
import { SearchX } from "lucide-react";
import NavigationControls from "../../components/shared/NavigationControls.jsx";
import useShopFilters from "../../hooks/useShopFilters.js";
import usePagination from "../../hooks/usePagination.js";

function Shop() {
  // Getting data from shared context
  const { products, loading, error } = useContext(ProductsContext);

  const {
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
  } = useShopFilters(products);

  const { currentPage, setCurrentPage, totalPages, startIndex, endIndex } =
    usePagination(sortedProducts);

  return (
    <main className="min-h-128 space-y-6">
      <ShopHeader
        productsCount={sortedProducts.length}
        handleSearchChange={handleSearchChange}
        searchText={searchText}
        sortBy={sortBy}
        handleSortChange={handleSortChange}
        handleCategoryChange={handleCategoryChange}
        handlePriceChange={handlePriceChange}
        clearFilters={clearFilters}
        price={price}
        selectedCategories={selectedCategories}
      />

      <article className="flex flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:gap-8 lg:px-8">
        <aside className="hidden lg:block w-72 lg:mt-2">
          <FilterSidebar
            handleCategoryChange={handleCategoryChange}
            handlePriceChange={handlePriceChange}
            clearFilters={clearFilters}
            price={price}
            selectedCategories={selectedCategories}
          />
        </aside>

        <section className="flex-1">
          {loading ? (
            <div className="py-20 text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-stone-200 border-t-amber-700"></div>
              <p className="mt-4 text-base font-semibold text-stone-700">
                Loading catalog...
              </p>
              <p className="mt-1 text-xs text-stone-400">
                Fetching the latest furniture pieces for you
              </p>
            </div>
          ) : error ? (
            <div className="py-20 text-center">
              <p className="text-lg font-bold text-red-600">
                Unable to load products
              </p>
              <p className="mt-2 text-sm text-stone-500">
                Please check your connection and try refreshing the page.
              </p>
            </div>
          ) : sortedProducts.length === 0 ? (
            <EmptyState
              icon={<SearchX size={64} />}
              title="No products found"
              description="We couldn't find any products matching your search or selected filters."
              buttonText="Clear Filters"
              onClick={clearFilters}
            />
          ) : (
            <>
              <ProductGrid
                products={sortedProducts.slice(startIndex, endIndex)}
              />
              <div className="mt-8 flex justify-center">
                <NavigationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </>
          )}
        </section>
      </article>
    </main>
  );
}
export default Shop;

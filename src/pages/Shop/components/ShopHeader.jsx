import { Search } from "lucide-react";
import FilterSidebar from "./FilterSidebar.jsx";

function ShopHeader({
  productsCount,
  searchText,
  handleSearchChange,
  sortBy,
  handleSortChange,
  handleCategoryChange,
  handlePriceChange,
  price,
  selectedCategories,
  clearFilters,
}) {

  return (
    <section className="border-b border-stone-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-semibold text-stone-900">Shop</h1>
          <p className="mt-2 text-sm text-stone-500">
            Showing {productsCount} Products
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          {/* Search */}
          <div className="flex flex-1 items-center gap-2.5 rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 transition focus-within:border-amber-700 lg:w-80">
            <Search className="shrink-0 text-stone-400" size={18} />
            <input className="w-full bg-transparent text-sm outline-none"
              type="text" placeholder="Search furniture..."
              value={searchText}
              onChange={handleSearchChange}
              aria-label="Search furniture"
            />
          </div>

          {/* Sort & Mobile Filter */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select className="flex-1 sm:flex-none rounded-lg border border-stone-300 px-4 py-2.5 text-sm
              outline-none transition focus:border-amber-700 bg-white cursor-pointer"
              aria-label="Sort by"
              value={sortBy} onChange={handleSortChange}>
              <option value="featured">Featured</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="highestRated">Highest Rated</option>
            </select>

            {/* Mobile filter buttons */}
            <div className="flex-1 lg:hidden">
              <FilterSidebar
                handleCategoryChange={handleCategoryChange}
                handlePriceChange={handlePriceChange}
                clearFilters={clearFilters}
                price={price}
                selectedCategories={selectedCategories}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopHeader;

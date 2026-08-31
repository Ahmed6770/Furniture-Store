import { Search } from "lucide-react";
import FilterSidebar from "./FilterSidebar.jsx";

function ShopHeader({
  productsCount,
  search,
  handleSearchChange,
  sortBy,
  handleSortChange,
  handleCategoryChange,
  handlePriceChange,
  price,
  selectedCategory,
  ResetAll,
}) {

  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Shop</h1>
          <p className="mt-2 text-sm text-gray-500">
            Showing {productsCount} Products
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          {/* Search */}
          <div className="relative flex-1 lg:w-80">
            <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input className="w-full rounded-lg border border-gray-300 py-2.5 pr-4 pl-11 text-sm outline-none transition focus:border-amber-700"
              type="text" placeholder="Search furniture..."
              value={search}
              onChange={handleSearchChange}
            />
          </div>

          {/* Sort & Mobile Filter */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select className="flex-1 sm:flex-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-amber-700 bg-white cursor-pointer"
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
                ResetAll={ResetAll}
                price={price}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopHeader;

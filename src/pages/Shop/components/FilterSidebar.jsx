import { useState } from "react";
import { SlidersHorizontal, X, Check } from "lucide-react";

const categories = ["Sofas", "Chairs", "Tables", "Beds", "Storage", "Lighting"];

function FilterSidebar({
  handleCategoryChange,
  handlePriceChange,
  price,
  selectedCategory,
  ResetAll,
}) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  // filter counter
  const activeFiltersCount =
    (selectedCategory?.length || 0) + (price < 3000 ? 1 : 0);

  const filterContent = (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="mb-4 font-semibold text-stone-800">Categories</h3>
        <div className="space-y-3">
          {categories.map((item) => {
            const isChecked = selectedCategory.includes(item);
            return (
              <label
                className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-sm text-stone-700 transition hover:bg-stone-100/70"
                key={item}
              >
                <div className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 cursor-pointer rounded border-stone-300 accent-amber-700"
                    type="checkbox"
                    value={item}
                    onChange={handleCategoryChange}
                    checked={isChecked}
                  />
                  <span
                    className={isChecked ? "font-semibold text-amber-800" : ""}
                  >
                    {item}
                  </span>
                </div>
                {isChecked && <Check size={16} className="text-amber-700" />}
              </label>
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-stone-800">Price Range</h3>
          <span className="text-sm font-bold text-amber-800">${price}</span>
        </div>
        <input
          className="w-full cursor-pointer accent-amber-700"
          type="range"
          value={price}
          onChange={handlePriceChange}
          min="0"
          max="3000"
        />
        <div className="mt-2 flex justify-between text-xs text-stone-500">
          <span>$0</span>
          <span>$3,000</span>
        </div>
      </div>

      {/* Clear Filters */}
      <button
        className="w-full cursor-pointer rounded-xl border border-stone-300 py-3 text-sm font-medium transition hover:bg-stone-100"
        onClick={() => {
          ResetAll();
        }}
      >
        Clear Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpenMobile(true)}
          className="flex w-full cursor-pointer items-center justify-between rounded-2xl border border-stone-200 bg-white p-4 shadow-xs transition hover:border-amber-600/50"
        >
          <div className="flex items-center gap-2 font-semibold text-stone-900">
            <SlidersHorizontal size={20} className="text-amber-700" />
            <span>Filters & Sorting</span>
          </div>

          {activeFiltersCount > 0 ? (
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-700 text-xs font-bold text-white">
              {activeFiltersCount}
            </span>
          ) : (
            <span className="text-xs text-stone-400">Tap to filter</span>
          )}
        </button>
      </div>

      {/* Mobile filter toggle*/}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
          <div
            className="fixed inset-0 bg-stone-950/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpenMobile(false)}
          />

          {/* Drawer */}
          <div className="relative z-10 flex h-full w-full max-w-xs flex-col bg-white p-6 shadow-2xl transition-transform">
            <div className="mb-6 flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={20} className="text-amber-700" />
                <h2 className="text-xl font-bold text-stone-900">Filters</h2>
              </div>
              <button className="rounded-full p-2 text-stone-500 transition hover:bg-stone-100 hover:text-stone-900"
                type="button"
                onClick={() => setIsOpenMobile(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-1">{filterContent}</div>

            <div className="mt-6 border-t border-stone-100 pt-4">
              <button className="w-full cursor-pointer rounded-xl bg-stone-900 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-amber-700"
                type="button"
                onClick={() => setIsOpenMobile(false)}
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden w-full rounded-3xl border border-stone-200 bg-white p-6 shadow-xs lg:block">
        <h2 className="mb-8 text-2xl font-semibold text-stone-900">Filters</h2>
        {filterContent}
      </aside>
    </>
  );
}

export default FilterSidebar;

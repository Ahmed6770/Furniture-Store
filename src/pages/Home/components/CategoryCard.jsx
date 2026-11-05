import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to="/shop"
      state={{ search: category.searchQuery }}
      className="group cursor-pointer block"
      aria-label="View products in this category"
    >
      <div className="overflow-hidden rounded-2xl bg-stone-100 border border-stone-200/80 shadow-xs transition-all duration-300 group-hover:shadow-md">
        <img className="aspect-4/3 w-full object-cover transition-opacity duration-300 group-hover:opacity-95"
          src={category.image} alt={category.title}
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 px-1">
        <h3 className="text-sm font-semibold text-stone-900 transition-colors duration-300 group-hover:text-amber-700 lg:text-base">
          {category.title}
        </h3>

        <ArrowUpRight className="text-amber-700 transition-transform duration-300"
          size={18}
        />
      </div>
    </Link>
  );
}

export default CategoryCard;

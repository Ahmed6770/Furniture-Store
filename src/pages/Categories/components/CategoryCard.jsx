import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to="/shop"
      state={{ category: category.filterKey }}
      className="animate-fade-up group relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-2xs transition-all duration-300 hover:shadow-md"
    >
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-stone-100">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-stone-900 transition group-hover:text-[#b88746]">
            {category.name}
          </h2>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-700 transition group-hover:bg-[#b88746] group-hover:text-white">
            <ArrowRight size={16} />
          </div>
        </div>
        <p className="mt-2 text-xs text-stone-500 leading-relaxed">
          {category.description}
        </p>
      </div>
    </Link>
  );
}

export default CategoryCard;

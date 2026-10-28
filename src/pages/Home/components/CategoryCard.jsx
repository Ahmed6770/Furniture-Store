import { ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function CategoryCard({ category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop", {
      state: { search: category.searchQuery || category.title },
    });
  };

  return (
    <Link className="group cursor-pointer block"
    to="/shop"
    aria-label="View products in this category"
    onClick={handleClick}
    >
      <div className="overflow-hidden rounded-2xl bg-stone-100 border border-stone-200/80 shadow-xs transition-all duration-300 group-hover:shadow-md">
        <img className="aspect-[4/3] w-full object-cover transition-opacity duration-300 group-hover:opacity-95"
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

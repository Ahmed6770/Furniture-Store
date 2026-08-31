import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Check } from "lucide-react";
import { CartContext } from "../../../context/CartContext";

function ProductCard({ product }) {
  const { id, image, category, name, rating, reviews, price } = product;
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  function handleAddToCart(e) {
    e.preventDefault();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  }

  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <Link className="cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden bg-stone-50/60 p-4">
          <img className="h-56 w-full object-contain transition-transform duration-300 group-hover:scale-105 ease-out"
          src={image} alt={name} />
        </div>
      </Link>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">{category}</p>
          <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-semibold text-gray-900 leading-snug">
            {name}
          </h3>
          <p className="text-sm text-yellow-500">
            ⭐ {rating}{" "}
            <span className="text-gray-500">({reviews} Reviews)</span>
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 gap-2 mt-auto">
          <p className="text-lg sm:text-xl font-bold text-amber-700 shrink-0">${price}</p>

          <button
            onClick={handleAddToCart}
            className={`cursor-pointer flex items-center gap-1.5 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-all duration-300 ${
              isAdded
                ? "bg-emerald-600 scale-95"
                : "bg-[#B88746] hover:bg-[#a67637] hover:scale-105"
            }`}
          >
            {isAdded ? (
              <>
                <Check size={14} className="shrink-0" />
                <span className="whitespace-nowrap">Added!</span>
              </>
            ) : (
              <>
                <ShoppingCart size={14} className="shrink-0" />
                <span className="whitespace-nowrap">Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

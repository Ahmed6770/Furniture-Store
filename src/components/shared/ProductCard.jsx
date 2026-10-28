import { useState, useContext } from "react";
import { Star, ShoppingCart, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  function handleAddToCart(e) {
    e.preventDefault();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  }

  return (
    <article className="relative group w-56 shrink-0 flex flex-col h-full overflow-hidden rounded-xl border border-stone-100 bg-white transition-all duration-300 hover:shadow-md">
      <Link className="relative block overflow-hidden bg-stone-50/60 p-3"
        to={`/product/${product.id}`}     
      >
        {product.badge && (
          <span className={`absolute top-2.5 left-2.5 z-10 rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase shadow-xs ${
            product.badge === "Best Seller"
              ? "bg-[#B88746] text-white"
              : product.badge === "New"
              ? "bg-emerald-700 text-white"
              : "bg-stone-800 text-white"
          }`}>
            {product.badge}
          </span>
        )}
        <img className="aspect-square w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          src={product.image} alt={product.name}
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between p-3.5">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold text-stone-900 leading-snug transition-colors duration-300 group-hover:text-[#B88746]">
              {product.name}
            </h3>
          </Link>

          <div className="mt-1.5 flex items-center gap-1 text-[11px] text-stone-500">
            <Star className="fill-yellow-400 text-yellow-400" size={13} />
            <span>{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2 mt-auto">
          <p className="text-base font-bold text-stone-900 shrink-0">
            ${product.price}
          </p>

          <button
            onClick={handleAddToCart}
            className={`cursor-pointer flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-all duration-300 ${
              isAdded
                ? "bg-emerald-600 scale-95"
                : "bg-[#B88746] hover:bg-[#a67637] hover:scale-105"
            }`}
          >
            {isAdded ? (
              <>
                <Check size={13} className="shrink-0" />
                <span className="whitespace-nowrap">Added to cart!</span>
              </>
            ) : (
              <>
                <ShoppingCart size={13} className="shrink-0" />
                <span className="whitespace-nowrap">Add to cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

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
    <article className="animate-fade-up relative group w-56 shrink-0 overflow-hidden rounded-xl border border-stone-100 bg-white transition-all duration-300 hover:shadow-md">
      <div>
        <Link className="relative block overflow-hidden bg-stone-50/60 p-3"
          to={`/product/${product.id}`}     
        >
          <img className="aspect-square w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
            src={product.image} alt={product.name}
          />
        </Link>

        <div className="p-3.5">
          <Link to={`/product/${product.id}`}>
            <h3 className="line-clamp-1 text-sm font-semibold text-stone-900 transition-colors duration-300 group-hover:text-[#B88746]">
              {product.name}
            </h3>
          </Link>

          <div className="mt-1.5 flex items-center gap-1 text-[11px] text-stone-500">
            <Star className="fill-yellow-400 text-yellow-400" size={13} />
            <span>{product.rating}</span>
            <span>({product.reviews})</span>
          </div>

          <div className="mt-2 flex items-center justify-between gap-2">
            <p className="text-base font-bold text-stone-900">
              ${product.price}
            </p>

            <button
              onClick={handleAddToCart}
              className={`cursor-pointer flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-white transition-all duration-300 ${
                isAdded
                  ? "bg-emerald-600 scale-95"
                  : "bg-[#B88746] hover:bg-[#a67637] hover:scale-105"
              }`}
            >
              {isAdded ? (
                <>
                  <Check size={13} />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={13} />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

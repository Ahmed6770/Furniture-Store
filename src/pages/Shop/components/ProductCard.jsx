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
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <Link className="cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden bg-stone-50/60 p-4">
          <img className="h-56 w-full object-contain transition-transform duration-300 group-hover:scale-105 ease-out"
          src={image} alt={name} />
        </div>
      </Link>
        <div className="space-y-2 p-4">
          <p className="text-sm font-medium text-gray-500"
          >{category}</p>
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-900"
          >{name}</h3>
          <p className="text-sm text-yellow-500"
          >⭐ {rating}{" "}
          <span className="text-gray-500">({reviews} Reviews)</span>
          </p>

          <div className="flex items-center justify-between pt-1 gap-2">
            <p className="text-xl font-bold text-amber-700">${price}</p>

            <button
              onClick={handleAddToCart}
              className={`cursor-pointer flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-white transition-all duration-300 ${
                isAdded
                  ? "bg-emerald-600 scale-95"
                  : "bg-[#B88746] hover:bg-[#a67637] hover:scale-105"
              }`}
            >
              {isAdded ? (
                <>
                  <Check size={15} />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={15} />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      
    </article>
  );
}

export default ProductCard;

import { useState, useContext } from "react";
import { Minus, Plus, ShoppingCart, Star, Check } from "lucide-react";
import { CartContext } from "../../../context/CartContext";

function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  // Quantity change
  function increaseQuantity() {
    setQuantity((prev) => prev + 1)
  }
  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  function handleAddToCart() {
    addToCart(product, quantity)
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  }

  return (
    <div className="flex flex-col">
      {/* Badge */}
      {product.badge && (
        <span className="cursor-pointer mb-4 w-fit rounded-full bg-[#B88746]/10 px-4 py-2 text-sm font-semibold text-[#B88746]">
          {product.badge}
        </span>
      )}

      {/* Category */}
      <p className="text-sm uppercase tracking-widest text-stone-500">
        {product.category}
      </p>

      {/* Name */}
      <h1 className="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1 text-amber-500">
          <Star size={18} fill="currentColor" />
          <span className="font-semibold">{product.rating}</span>
        </div>
        <span className="text-stone-300">|</span>

        <p className="text-stone-500">
          {(product.reviews || 0).toLocaleString()} Reviews
        </p>
      </div>

      {/* Price */}
      <h2 className="mt-8 text-4xl font-bold text-stone-900 sm:text-5xl">
        ${product.price}
      </h2>

      {/* Description */}
      <p className="mt-6 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
        {product.description}
      </p>

      {/* Quantity*/}
      <div className="mt-10 flex items-center gap-3 sm:gap-4">
        <div className="flex items-center shrink-0 overflow-hidden rounded-xl border border-stone-300 bg-white">
          <button className="cursor-pointer px-2.5 py-3.5 sm:p-4 transition hover:bg-stone-100 text-stone-700"
            onClick={decreaseQuantity}
          >
            <Minus size={18} />
          </button>
          <span className="w-9 sm:w-12 text-center font-semibold text-stone-900 text-sm sm:text-base">{quantity}</span>
          <button
            className="cursor-pointer px-2.5 py-3.5 sm:p-4 transition hover:bg-stone-100 text-stone-700"
            onClick={increaseQuantity}
          >
            <Plus size={18} />
          </button>
        </div>

        <button
          className={`cursor-pointer flex flex-1 items-center justify-center gap-2 sm:gap-3 rounded-xl px-4 sm:px-6 py-3.5 sm:py-4 
            text-sm sm:text-base font-semibold text-white transition-all duration-300 ${
            isAdded
              ? "bg-emerald-700 scale-98"
              : "bg-[#B88746] hover:bg-[#a67637]"
          }`}
          onClick={handleAddToCart}
        >
          {isAdded ? (
            <>
              <Check size={18} className="sm:w-5 sm:h-5" />
              <span>Added to Cart!</span>
            </>
          ) : (
            <>
              <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
              <span>Add To Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;

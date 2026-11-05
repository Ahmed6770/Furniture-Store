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
    <section className="flex flex-col">
      {/* Category */}
      <p className="text-sm uppercase tracking-widest text-stone-500">
        {product.category}
      </p>

      {/* Name */}
      <h1 className="mt-3 text-3xl font-bold text-stone-900 lg:text-4xl">
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
      <p className="mt-8 text-4xl font-bold text-stone-900">
        ${product.price}
      </p>

      {/* Description */}
      <p className="mt-6 text-base leading-relaxed text-stone-600">
        {product.description}
      </p>

      {/* Quantity*/}
      <div className="mt-10 flex items-center gap-3 sm:gap-4">
        <div className="flex items-center shrink-0 overflow-hidden rounded-xl border border-stone-300 bg-white">
          <button
            className="cursor-pointer h-12 w-11 flex items-center justify-center transition hover:bg-stone-100 text-stone-700 active:bg-stone-200"
            type="button"
            aria-label="Decrease quantity"
            onClick={decreaseQuantity}
          >
            <Minus size={18} />
          </button>
          <span className="w-10 text-center font-semibold text-stone-900 text-base">{quantity}</span>
          <button
            className="cursor-pointer h-12 w-11 flex items-center justify-center transition hover:bg-stone-100 text-stone-700 active:bg-stone-200"
            type="button"
            aria-label="Increase quantity"
            onClick={increaseQuantity}
          >
            <Plus size={18} />
          </button>
        </div>

        <button
          type="button"
          aria-label={isAdded ? `${product.name} added to cart` : `Add ${product.name} to cart`}
          className={`cursor-pointer flex flex-1 items-center justify-center gap-2.5 rounded-xl h-12 px-6 
            text-base font-semibold text-white transition-all duration-300 active:scale-95 ${
            isAdded
              ? "bg-emerald-700"
              : "bg-amber-700 hover:bg-amber-800"
          }`}
          onClick={handleAddToCart}
        >
          {isAdded ? (
            <>
              <Check size={20} />
              <span>Added to Cart!</span>
            </>
          ) : (
            <>
              <ShoppingCart size={20} />
              <span>Add To Cart</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;

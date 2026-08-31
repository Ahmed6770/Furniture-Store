import { Trash2 } from "lucide-react";

function CartItem({ item, removeFromCart, addToCart }) {
  const itemImage = item.image;
  const itemTotal = (item.price * item.quantity).toFixed(2);

  const handleDecrease = () => {
    if (item.quantity > 1) {
      addToCart(item, -1);
    } else {
      removeFromCart(item);
    }
  };

  return (
    <div className="py-6 first:pt-2 sm:first:pt-6 last:pb-2 flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1.5fr_1fr]
     items-center gap-4 sm:gap-2 border-b border-stone-100 last:border-0">
      {/* Product Info */}
      <div className="flex items-center gap-4 w-full">
        <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-stone-100 p-2 border border-stone-200/60 flex items-center justify-center">
          <img className="h-full w-full object-contain"
            src={itemImage}
            alt={item.name}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-stone-900 text-sm sm:text-base truncate">
            {item.name}
          </h3>
          {item.specs && (
            <p className="text-xs text-stone-400 mt-0.5">{item.specs}</p>
          )}
          <p className="text-xs text-stone-500 mt-1">
            Category:{" "}
            <span className="font-semibold text-[#B88746]">
              {item.category || "Furniture"}
            </span>
          </p>

          <button
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700 transition-colors cursor-pointer"
            type="button"
            onClick={() => removeFromCart(item)}
          >
            <span>Remove</span>
            <Trash2 size={13} />
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="hidden sm:block text-right">
        <span className="text-sm font-semibold text-stone-900">
          ${item.price.toFixed(2)}
        </span>
      </div>

      {/* Quantity */}
      <div className="flex items-center justify-between sm:justify-center w-full sm:w-auto">
        <div className="flex items-center rounded-lg border border-stone-200 bg-stone-50/50">
          <button className="px-3 py-1.5 text-stone-500 hover:text-stone-900 transition cursor-pointer text-sm font-medium"
            type="button"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="w-8 text-center text-sm font-bold text-stone-900">
            {item.quantity}
          </span>
          <button className="px-3 py-1.5 text-stone-500 hover:text-stone-900 transition cursor-pointer text-sm font-medium"
            type="button"
            onClick={() => addToCart(item, 1)}
          >
            +
          </button>
        </div>
        <div className="sm:hidden text-right">
          <span className="text-base font-bold text-stone-900">${itemTotal}</span>
        </div>
      </div>

      {/* Total */}
      <div className="hidden sm:block text-right">
        <span className="text-base font-bold text-stone-900">${itemTotal}</span>
      </div>
    </div>
  );
}

export default CartItem;

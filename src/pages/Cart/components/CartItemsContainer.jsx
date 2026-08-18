import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CartItem from "./CartItem.jsx";
import FreeShippingBar from "./FreeShippingBar.jsx";

function CartItemsContainer({ cartItems = [], addToCart, removeFromCart }) {
  const currentTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 shadow-2xs">

        {/* Headers desktop */}
        <div className="hidden sm:grid grid-cols-[2.5fr_1fr_1.2fr_1fr_auto] items-center border-b border-stone-100 pb-4 text-xs font-bold uppercase tracking-wider text-stone-400">
          <span>Product</span>
          <span className="text-right">Price</span>
          <span className="text-center">Quantity</span>
          <span className="text-right">Total</span>
          <span className="w-8"></span>
        </div>

        <div className="divide-y divide-stone-100">
          {cartItems.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              <p className="text-base font-semibold">Your cart is currently empty.</p>
              <p className="text-xs text-stone-400 mt-1">Explore our shop and add your favorite items.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
              />
            ))
          )}
        </div>

        {/* Free shipping progress bar */}
        <FreeShippingBar currentAmount={currentTotal} targetAmount={600} />
      </div>

      {/* Continue Shopping Button */}
      <div>
        <Link className="inline-flex items-center gap-2 text-sm font-bold text-stone-700 hover:text-stone-900 transition-colors"
          to="/shop"
        >
          <ArrowLeft size={16} />
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
}

export default CartItemsContainer;

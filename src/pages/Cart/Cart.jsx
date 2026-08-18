import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

import CartHeader from "./components/CartHeader.jsx";
import CartItemsContainer from "./components/CartItemsContainer.jsx";
import OrderSummary from "./components/OrderSummary.jsx";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext)

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 600 || cartItems.length === 0 ? 0 : 20.0

  return (
    <div className="min-h-screen bg-stone-50/50 py-8 font-sans text-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CartHeader />

        {/* Cart Items */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          <CartItemsContainer
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
          {/* Order summary */}
          <OrderSummary subtotal={subtotal} shipping={shipping} />
        </div>
      </div>
    </div>
  );
}

export default Cart;

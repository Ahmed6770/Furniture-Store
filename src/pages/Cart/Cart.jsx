import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

import CartItemsContainer from "./components/CartItemsContainer.jsx";
import OrderSummary from "./components/OrderSummary.jsx";

function Cart() {
  const { cartItems, addToCart, removeFromCart, subtotal } =
    useContext(CartContext);

  return (
    <main className="min-h-screen bg-stone-50/50 py-8 font-sans text-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
            Your Cart
          </h1>
          <p className="mt-1 text-sm text-stone-500">
            Review your items and proceed to checkout.
          </p>
        </div>

        {/* Cart Items */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CartItemsContainer
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              subtotal={subtotal}
            />
          </div>
          {/* Order summary */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;

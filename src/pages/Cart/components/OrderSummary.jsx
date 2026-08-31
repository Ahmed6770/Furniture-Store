import { useContext } from "react";
import { Lock, ShieldCheck, RotateCcw, Headphones, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext.jsx";

function OrderSummary({
  subtotal = 0,
  shipping = 0,
  showCheckoutButton = true,
}) {
  const { cartItems } = useContext(CartContext);
  const isCartEmpty = cartItems.length === 0;
  const total = isCartEmpty ? 0 : subtotal + shipping;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-2xs sticky top-24">
      <h2 className="text-xl font-bold text-stone-900 mb-6">Order Summary</h2>

      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between text-stone-600">
          <span>Subtotal</span>
          <span className="font-semibold text-stone-900">
            ${isCartEmpty ? "0.00" : subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between text-stone-600">
          <span className="flex items-center gap-1">
            <span>Shipping</span>
            <Info size={14} className="text-stone-400" />
          </span>
          <span className="font-semibold text-stone-900">
            ${isCartEmpty ? "0.00" : shipping.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="my-6 border-t border-stone-100 pt-4">
        <div className="flex items-baseline justify-between">
          <span className="text-base font-bold text-stone-900">Total</span>
          <span className="text-2xl font-black text-stone-900">
            ${total.toFixed(2)}
          </span>
        </div>
        <p className="mt-1 text-[11px] text-stone-400">
          Tax included and shipping calculated at checkout.
        </p>
      </div>

      {/* Action btn  */}
      {showCheckoutButton && (
        <div className="space-y-3">
          {isCartEmpty ? (
            <button
              className="w-full cursor-not-allowed rounded-xl bg-stone-300 py-3.5 text-center text-sm font-bold text-stone-500 flex items-center justify-center gap-2"
              disabled
            >
              <Lock size={16} />
              <span>Proceed to Checkout</span>
            </button>
          ) : (
            <Link
              className="w-full cursor-pointer rounded-xl bg-[#b53d5d] py-3.5 text-center text-sm font-bold text-white shadow-sm transition hover:bg-[#962f49] flex items-center justify-center gap-2"
              to="/checkout"
            >
              <Lock size={16} />
              <span>Proceed to Checkout</span>
            </Link>
          )}
        </div>
      )}

      {/* Security features */}
      {showCheckoutButton && (
        <div className="mt-6 space-y-3.5 border-t border-stone-100 pt-6 text-xs text-stone-500">
          <div className="flex items-start gap-3">
            <ShieldCheck size={18} className="text-stone-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-stone-800">Secure Checkout</p>
              <p className="text-stone-400">Your data is protected</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <RotateCcw size={18} className="text-stone-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-stone-800">Easy Returns</p>
              <p className="text-stone-400">30-day return policy</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Headphones size={18} className="text-stone-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-stone-800">Support 24/7</p>
              <p className="text-stone-400">We're here to help</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;

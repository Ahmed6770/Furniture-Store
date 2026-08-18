import { Check } from "lucide-react";
import { Link, useLocation, Navigate } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();
  const orderNumber = location.state?.orderNumber;

  // Back to shop page if no order placed
  if (!orderNumber) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-stone-50/50 p-4 font-sans text-stone-800">
      <div className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-xs">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
          <Check size={44} strokeWidth={3} />
        </div>

        <h1 className="text-2xl font-bold text-stone-900 sm:text-3xl">
          Thank you for your order!
        </h1>

        <p className="mt-3 text-sm text-stone-500 leading-relaxed">
          Your order has been placed
          <br />
          successfully.
        </p>

        <p className="mt-6 text-sm font-bold text-stone-900">
          Order Number:{" "}
          <span className="font-extrabold text-[#b53d5d]">{orderNumber}</span>
        </p>

        {/* Continue shopping btn */}
        <div className="mt-8">
          <Link className="inline-block w-full rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-semibold
          text-white shadow-sm transition-all duration-200 hover:bg-stone-800 hover:shadow"
            to="/shop"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;

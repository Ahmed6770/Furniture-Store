import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import OrderSummary from "../Cart/components/OrderSummary.jsx";
import CustomerInfo from "./components/CustomerInfo.jsx";
import PaymentAndOrder from "./components/PaymentAndOrder.jsx";

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Redirect to cart if it's empty
  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderNumber = Math.floor(Math.random() * 10000);
    navigate("/order-success", { state: { orderNumber } });
  };

  return (
    <main className="min-h-screen bg-stone-50/50 py-8 font-sans text-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left side */}
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2">
            <CustomerInfo />
            <PaymentAndOrder />
          </form>

          {/* Right side */}
          <div className="lg:col-span-1">
            <OrderSummary showCheckoutButton={false} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;

import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import OrderSummary from "../Cart/components/OrderSummary.jsx";
import CustomerInfo from "./components/CustomerInfo.jsx";
import PaymentAndOrder from "./components/PaymentAndOrder.jsx";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0 && !isSubmitting) {
      navigate("/cart", { replace: true });
    }
  }, [cartItems.length, isSubmitting, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Generate order number
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000);
    
    clearCart();
    navigate("/order-success", { state: { orderNumber: randomOrderNumber } });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 600 || cartItems.length === 0 ? 0 : 20.0;

  return (
    <div className="min-h-screen bg-stone-50/50 py-8 font-sans text-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          {/* Left side */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <CustomerInfo />
            <PaymentAndOrder />
          </form>

          {/* Right side */}
          <div>
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              showCheckoutButton={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

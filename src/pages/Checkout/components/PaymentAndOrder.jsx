import { CreditCard, Banknote } from "lucide-react";

function PaymentAndOrder() {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-2xs">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100">
          <CreditCard size={18} className="text-stone-600" />
        </div>
        <div>
          <h2 className="text-base font-bold text-stone-900">Payment Method</h2>
          <p className="text-xs text-stone-400">Choose how you want to pay</p>
        </div>
      </div>

      {/* Payment */}
      <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-[#B88746] bg-[#B88746]/5 p-4">
        <input className="accent-[#B88746] h-4 w-4 shrink-0"
          type="radio"
          name="payment"
          defaultChecked
        />
        <div className="flex items-center gap-3">
          <Banknote size={20} className="text-[#B88746] shrink-0" />
          <div>
            <p className="text-sm font-semibold text-stone-900">Cash on Delivery</p>
            <p className="text-xs text-stone-400">Pay when you receive your order</p>
          </div>
        </div>
      </label>

      {/* Place Order Button */}
      <button className="mt-6 w-full cursor-pointer rounded-xl bg-stone-900 py-4 text-center text-sm font-bold text-white shadow-sm transition hover:bg-stone-700"
        type="submit"
      >
        Place Order
      </button>
    </div>
  );
}

export default PaymentAndOrder;

import { Truck } from "lucide-react";

function FreeShippingBar({ targetAmount = 600, currentAmount = 196 }) {
  const remaining = Math.max(0, targetAmount - currentAmount);
  const percentage = Math.min(100, (currentAmount / targetAmount) * 100);

  return (
    <div className="mt-6 rounded-xl bg-stone-50/80 border border-stone-200/80 p-4">
      <div className="flex items-center justify-between gap-2 text-xs font-semibold text-stone-700 mb-2">
        <div className="flex items-center gap-2">
          <Truck size={16} className="text-[#b53d5d]" />
          {remaining > 0 ? (
            <span>You're ${remaining.toFixed(2)} away from free shipping!</span>
          ) : (
            <span>🎉 You qualify for free shipping!</span>
          )}
        </div>
        <span className="text-stone-500 font-bold">${targetAmount}</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className="h-full rounded-full bg-[#b53d5d] transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default FreeShippingBar;

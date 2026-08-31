import { ShieldCheck, Truck, RotateCcw, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Delivered safely to your doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description: "Premium materials with trusted quality.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Simple return policy for peace of mind.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Product",
    description: "Selected from IKEA best-selling collection.",
  },
];

function ProductFeatures() {
  return (
    <section>
      <h2 className="mb-10 text-2xl sm:text-3xl font-bold text-stone-900">
        Why You'll Love It
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div className="rounded-3xl border border-stone-200 p-6 sm:p-8 "
              key={feature.title}>
              <div className="mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#B88746]/10 text-[#B88746]">
                <Icon size={28} />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-stone-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-stone-500">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductFeatures;

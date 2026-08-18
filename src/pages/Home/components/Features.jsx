import { Truck, RotateCcw, ShieldCheck, CreditCard } from "lucide-react";


function Features() {
  return (
    <section className="border-y border-line py-1">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        
        {features.map(({ icon: Icon, title, desc }) => (
          <div className="flex items-center gap-2.5 py-4 pr-3 sm:gap-3 sm:py-5 lg:border-r lg:border-line lg:px-6 lg:first:pl-0 lg:last:border-r-0" key={title}>
            <Icon className="shrink-0 text-brand"
            strokeWidth={1.7} size={20} />

            <div>
              <h3 className="text-[15px] font-semibold text-stone-900"
              >{title}</h3>
              <p className="mt-0.5 text-sm leading-5 text-stone-500"
              >{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;


const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On all orders over $600",
  },
  {
    icon: RotateCcw,
    title: "30 Days Returns",
    desc: "Easy returns & exchanges",
  },
  {
    icon: ShieldCheck,
    title: "2 Years Warranty",
    desc: "Quality you can trust",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    desc: "100% safe & secure",
  },
];
import { WandSparkles, BadgeCheck, Sofa, Leaf } from "lucide-react";

const reasons = [
  {
    icon: WandSparkles,
    title: "Timeless Design",
    desc: "Made to elevate every space",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    desc: "Carefully crafted with the best materials",
  },
  {
    icon: Sofa,
    title: "Functional Living",
    desc: "Designed for comfort and practicality",
  },
  {
    icon: Leaf,
    title: "Sustainable Choice",
    desc: "Eco-friendly materials for a better future",
  },
];

function WhyChoose() {
  return (
    <section className="pt-4 pb-12 lg:pt-6 lg:pb-16">
      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold leading-tight text-stone-900 lg:text-4xl">
            Crafted for Beautiful Living
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600">
            Thoughtfully designed furniture that blends timeless aesthetics,
            premium craftsmanship, and everyday comfort.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <article
              className="group text-center transition-all duration-300"
              key={title}
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface shadow-sm">
                <Icon className="text-brand" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-stone-900">
                {title}
              </h3>
              <p className="text-sm leading-7 text-stone-600">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

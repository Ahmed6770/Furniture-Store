import { Armchair, Leaf, Gem } from "lucide-react";

function WhoWeAre() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#b53d5d]">
        Who We Are
      </p>
      <div className="mx-auto mt-2 h-1.5 w-1.5 rounded-full bg-[#b53d5d]" />

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
        Furniture for the way you live.
      </h2>

      <div className="mt-8 space-y-5 text-sm sm:text-base leading-relaxed text-stone-600">
        <p>
          At LOOMA, our passion is simple: to help you create spaces that feel like home. We believe furniture is more than just what fills a room — it shapes how you live, how you relax, and how you connect with the people around you.
        </p>
        <p>
          We blend timeless design with everyday function, using quality materials and thoughtful details that stand the test of time.
        </p>
        <p>
          From modern classics to space-saving solutions, every piece in our collection is chosen to bring comfort, beauty, and balance to your space.
        </p>
      </div>

      {/* Key Values */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-stone-100 pt-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-[#b53d5d]">
            <Armchair size={26} />
          </div>
          <h3 className="text-base font-bold text-stone-900">Thoughtful Design</h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-500 max-w-[220px]">
            We design with purpose and attention to every detail.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-[#b53d5d]">
            <Leaf size={26} />
          </div>
          <h3 className="text-base font-bold text-stone-900">Everyday Function</h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-500 max-w-[220px]">
            Practical solutions that fit your daily life.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-[#b53d5d]">
            <Gem size={26} />
          </div>
          <h3 className="text-base font-bold text-stone-900">Timeless Style</h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-500 max-w-[220px]">
            Modern, elegant pieces made to last.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;

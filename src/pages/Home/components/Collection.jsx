import { Link } from "react-router-dom";
import livingRoom from "../../../assets/images/livingRoom.png";

function Collection() {
  return (
    <section className="pb-8 lg:pb-12">
      <div className="mx-auto max-w-375 px-4">
        <div className="grid overflow-hidden rounded-2xl bg-stone-900 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">

        {/* Left Content */}
        <div className="order-2 flex flex-col justify-center px-5 py-6 sm:px-8 lg:order-1 lg:px-10 lg:py-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Special Collection
            </p>
            <h2 className="mb-3 text-2xl font-bold leading-tight text-white lg:text-3xl">
            Modern Living
            </h2>
            <p className="mb-5 max-w-sm text-sm leading-6 text-stone-300 sm:text-base">
            A curated collection made for contemporary lifestyles.
            </p>
            <Link className="inline-flex h-10 w-fit items-center justify-center rounded-full bg-brand px-5 text-xs font-semibold text-white transition-colors hover:bg-brand-hover sm:text-sm"
            to="/shop" >
            Explore Collection
            </Link>
        </div>

        {/* Right Image */}
        <div className="order-1 overflow-hidden lg:order-2">
            <img className="h-44 w-full object-cover sm:h-56 lg:h-full"
            src={livingRoom} alt="Modern Living"/>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;

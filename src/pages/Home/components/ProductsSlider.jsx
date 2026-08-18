import { useRef } from "react";
import { Link } from "react-router-dom";
import ProductsSection from "../../../components/shared/ProductsSection.jsx";
import NavigationControls from "../../../components/shared/NavigationControls.jsx";

function ProductsSlider({ title, description, products }) {
    // Navigation 
  const sliderRef = useRef(null);
  function handleNext() {
    sliderRef.current?.scrollBy({
      left: 248,
      behavior: "smooth",
    });
  }
  function handlePrevious() {
    sliderRef.current?.scrollBy({
      left: -248,
      behavior: "smooth",
    });
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-375 px-4">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold lg:text-3xl">
              {title}</h2>
            <p className="mt-2 text-stone-500">
              {description}</p>
          </div>

          <Link className="shrink-0 text-sm font-medium text-stone-600 transition hover:text-[#B88746]"
            to="/shop">
            View All →
          </Link>
        </div>

        <div className="relative">
          {/* Slider */}
          <div className="hide-scrollbar flex gap-6 overflow-x-auto scroll-smooth"
            ref={sliderRef}>
            <ProductsSection products={products} />
          </div>

          {/* Navigation */}
          <NavigationControls
            className="flex absolute inset-y-0 -left-1 -right-1 sm:-left-5 sm:-right-5 items-center justify-between pointer-events-none z-10"
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductsSlider;

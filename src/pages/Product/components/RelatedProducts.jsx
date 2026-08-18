import { useRef } from "react";
import useProducts from "../../../hooks/useProducts.js";
import ProductCard from "../../Shop/components/ProductCard";
import NavigationControls from "../../../components/shared/NavigationControls.jsx";

function RelatedProducts({ currentProduct }) {
  const { products } = useProducts();
  const sliderRef = useRef(null);

  const relatedProducts = products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id,
    )
    .slice(0, 6);

  if (relatedProducts.length === 0) return null;

  function handleNext() {
    sliderRef.current?.scrollBy({ left: 260, behavior: "smooth" });
  }
  function handlePrevious() {
    sliderRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  }

  return (
    <section>
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-stone-900">Related Products</h2>
      </div>

      {/* Mobile: Horizontal Slider */}
      <div className="relative sm:hidden">
        <div
          ref={sliderRef}
          className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth"
        >
          {relatedProducts.map((product) => (
            <div key={product.id} className="w-56 shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <NavigationControls
          className="flex absolute inset-y-0 -left-1 -right-1 items-center justify-between pointer-events-none z-10"
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>

      {/* Desktop: Grid */}
      <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;

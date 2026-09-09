import useProducts from "../../../hooks/useProducts.js";
import ProductCard from "../../Shop/components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function RelatedProducts({ currentProduct }) {
  const { products } = useProducts();
  // Filter related products
  const relatedProducts = products.filter((product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id,
    ).slice(0, 6);

  if (relatedProducts.length === 0) return null;

  return (
    <section>
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-stone-900">Related Products</h2>
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <Swiper className="cursor-grab active:cursor-grabbing py-2"
          spaceBetween={16}
          slidesPerView={1.3}
        >
          {relatedProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop */}
      <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;

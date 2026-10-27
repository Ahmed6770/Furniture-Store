import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductCard from "../../../components/shared/ProductCard.jsx";

function ProductsSlider({ title, description, products }) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-375 px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold lg:text-3xl">{title}</h2>
            <p className="mt-2 text-stone-500">{description}</p>
          </div>

          <Link className="shrink-0 text-sm font-medium text-stone-600 transition hover:text-amber-700"
            aria-label="View all products"
            to="/shop"
          >
            View All →
          </Link>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={24}
          slidesPerView="auto"
          className="cursor-grab active:cursor-grabbing py-2"
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id} className="!w-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductsSlider;

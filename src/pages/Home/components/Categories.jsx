import { Link } from "react-router-dom";
import Card from "./CategoryCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import livingRoom from "../../../assets/images/categories/livingroom.webp";
import bedRoom from "../../../assets/images/categories/bedroom.webp";
import office from "../../../assets/images/categories/office.webp";
import dining from "../../../assets/images/categories/dining.webp";
import outdoor from "../../../assets/images/categories/outdoor.webp";
import decor from "../../../assets/images/categories/decor.webp";
import storage from "../../../assets/images/categories/storage.webp";
import lighting from "../../../assets/images/categories/lighting.webp";

function Categories() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-375 px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-stone-900 lg:text-3xl">
            Shop by Category
          </h2>

          <Link className="shrink-0 text-sm font-medium text-stone-600 transition hover:text-amber-700"
            aria-label="View all categories"
            to="/categories"
          >
            View All →
          </Link>
        </div>

        {/* Categories Slider */}
        <Swiper
          spaceBetween={16}
          slidesPerView={1.25}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 16 },
            768: { slidesPerView: 3.2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="cursor-grab active:cursor-grabbing py-2"
        >
          {categoriesData.map((category) => (
            <SwiperSlide key={category.id}>
              <Card category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Categories;

const categoriesData = [
  {
    id: "living-seating",
    title: "Living & Seating",
    searchQuery: "Sofa",
    image: livingRoom,
  },
  {
    id: "tables-desks",
    title: "Tables & Desks",
    searchQuery: "Table",
    image: dining,
  },
  {
    id: "storage-organization",
    title: "Storage & Organization",
    searchQuery: "Drawer",
    image: storage,
  },
  {
    id: "bedroom",
    title: "Bedroom",
    searchQuery: "Bed",
    image: bedRoom,
  },
  {
    id: "lighting",
    title: "Lighting",
    searchQuery: "Lamp",
    image: lighting,
  },
  {
    id: "office",
    title: "Office",
    searchQuery: "Desk",
    image: office,
  },
  {
    id: "outdoor",
    title: "Outdoor",
    searchQuery: "Outdoor",
    image: outdoor,
  },
  {
    id: "kitchen-dining",
    title: "Kitchen & Dining",
    searchQuery: "Dining",
    image: dining,
  },
  {
    id: "home-decor",
    title: "Home Decor & Accessories",
    searchQuery: "Decor",
    image: decor,
  },
];

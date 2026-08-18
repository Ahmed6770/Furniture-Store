import { Link } from "react-router-dom";
import Card from "./CategoryCard.jsx";
import { useRef } from "react";
import NavigationControls from "../../../components/shared/NavigationControls.jsx";

import livingRoom from "../../../assets/images/categories/livingroom.png";
import bedRoom from "../../../assets/images/categories/bedroom.png";
import office from "../../../assets/images/categories/office.png";
import dining from "../../../assets/images/categories/dining.png";
import outdoor from "../../../assets/images/categories/outdoor.png";
import decor from "../../../assets/images/categories/decor.png";
import storage from "../../../assets/images/categories/storage.png";
import lighting from "../../../assets/images/categories/lighting.png";

function Categories() {
  const sliderRef = useRef(null);

  // Scroll function 
  function scrollNext() {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth", 
      });
    }
  }

  function scrollPrev() {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  }

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-375 px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-stone-900 lg:text-3xl">
            Shop by Category
          </h2>

          <Link className="shrink-0 text-sm font-medium text-stone-600 transition hover:text-[#B88746]"
            to="/categories">
            View All →
          </Link>
        </div>

        <div className="relative">
          {/* Categories */}
          <div className="hide-scrollbar flex overflow-x-auto scroll-smooth" ref={sliderRef}>
            {categoriesData.map((category) => (
              <div key={category.id} className="w-[80%] sm:w-1/2 md:w-1/3 lg:w-1/4 shrink-0 px-2.5">
                <Card category={category} />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <NavigationControls
            className="flex absolute inset-y-0 -left-1 -right-1 sm:-left-5 sm:-right-5 items-center justify-between pointer-events-none z-10"
            onPrevious={scrollPrev}
            onNext={scrollNext}
          />
        </div>
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
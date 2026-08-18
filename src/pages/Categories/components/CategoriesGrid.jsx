import CategoryCard from "./CategoryCard.jsx";

import bedroomImg from "../../../assets/images/categories/bedroom.png";
import decorImg from "../../../assets/images/categories/decor.png";
import diningImg from "../../../assets/images/categories/dining.png";
import livingRoomImg from "../../../assets/images/categories/livingroom.png";
import officeImg from "../../../assets/images/categories/office.png";
import outdoorImg from "../../../assets/images/categories/outdoor.png";
import storageImg from "../../../assets/images/categories/storage.png";
import lightingImg from "../../../assets/images/categories/lighting.png";

function CategoriesGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoriesGrid;

const categories = [
  {
    id: "living-room",
    name: "Living Room",
    filterKey: "Sofas",
    image: livingRoomImg,
    description: "Sofas, coffee tables & media units designed for comfort.",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    filterKey: "Beds",
    image: bedroomImg,
    description: "Beds, nightstands & wardrobes for restful sleep.",
  },
  {
    id: "dining",
    name: "Dining & Kitchen",
    filterKey: "Chairs",
    image: diningImg,
    description: "Dining tables, chairs & sideboards for gatherings.",
  },
  {
    id: "storage",
    name: "Storage & Organization",
    filterKey: "Storage",
    image: storageImg,
    description: "Cabinets, dressers & shelving units for a clean space.",
  },
  {
    id: "lighting",
    name: "Lighting & Lamps",
    filterKey: "Lighting",
    image: lightingImg,
    description: "Ambient, task & ceiling lighting to brighten your home.",
  },
  {
    id: "workspace",
    name: "Office & Workspace",
    filterKey: "Tables",
    image: officeImg,
    description: "Ergonomic desks, chairs & storage solutions.",
  },
  {
    id: "outdoor",
    name: "Outdoor & Patio",
    filterKey: "Outdoor",
    image: outdoorImg,
    description: "Weather-resistant furniture for garden & balcony.",
  },
  {
    id: "decor",
    name: "Decor & Accessories",
    filterKey: "Decor",
    image: decorImg,
    description: "Rugs, mirrors, vases & subtle details.",
  },
];

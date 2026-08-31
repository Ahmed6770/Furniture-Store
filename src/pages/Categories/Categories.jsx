import CategoriesHeader from "./components/CategoriesHeader.jsx";
import CategoriesGrid from "./components/CategoriesGrid.jsx";
import Reveal from "../../components/shared/Reveal.jsx";
function Categories() {
  return (
    <div className="min-h-screen bg-stone-50/50 py-12 font-sans text-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Reveal> 
        <CategoriesHeader />
        </Reveal>

        <Reveal> 
        <CategoriesGrid />
        </Reveal>

      </div>
    </div>
  );
}

export default Categories;

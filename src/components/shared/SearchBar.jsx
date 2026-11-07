import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SearchBar({ isMobile, setIsMobileMenuOpen }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Search function
  function handleSearchSubmit(event) {
    event.preventDefault();
    if (search.trim()) {
      navigate("/shop", { state: { search: search } });
      setIsMobileMenuOpen?.(false);
    }
  }

  return (
    <form
      className={`flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-stone-900 transition-all duration-300 focus-within:border-amber-700 focus-within:ring-2 focus-within:ring-amber-700/30 ${
        isMobile ? "w-full h-11 mb-4" : "hidden lg:flex w-72"
      }`}
      onSubmit={handleSearchSubmit}
    >
      <Search className="shrink-0 text-stone-400" size={18} />
      <input
        className="w-full bg-transparent outline-none placeholder:text-sm placeholder:text-stone-400"
        type="search"
        placeholder="Search for furniture..."
        value={search}
        aria-label="Search furniture"
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
}

export default SearchBar;

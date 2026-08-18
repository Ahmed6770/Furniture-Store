import { useState, useContext } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CartContext } from "../../context/CartContext.jsx";

// search function
function SearchInput({ isMobile, search, setSearch, handleSearchSubmit }) {
  return (
    <form className={`relative ${isMobile ? "w-full mb-4" : "hidden lg:block"}`}
      onSubmit={handleSearchSubmit}
    >
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
        size={18}
      />
      <input className={`rounded-full border border-stone-300 bg-surface py-2 pl-11 pr-4 outline-none placeholder:text-sm
      placeholder:text-stone-400 transition-all duration-300 focus:border-brand focus:ring-2 focus:ring-brand/30 text-stone-900 ${isMobile ? "w-full h-11" : "w-72"}`}
        type="search" placeholder="Search for furniture..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
}

function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { cartItems } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Cart count
  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  // Search function
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (search.trim()) {
      navigate("/shop", { state: { search: search.trim() } });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="relative border-b border-line bg-canvas">
      <div className="mx-auto flex h-20 w-full max-w-[1500px] items-center justify-between px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2">
          <img className="h-12 w-12 lg:h-16 lg:w-16"
            src={logo} alt="LOOMA logo"
          />
          <span className="text-2xl font-semibold tracking-wide text-stone-800 lg:text-3xl">
            LOOMA
          </span>
        </NavLink>
        {/* Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink className={({ isActive }) =>
                `relative font-medium transition-colors duration-300 ${isActive ? "text-brand font-semibold" : "text-stone-700 hover:text-stone-900"}`
              }
              to={link.path} key={link.path}                           
            >
              {link.name}
            </NavLink>
          ))}
        </div>
          {/* Search bar */}
        <div className="flex items-center gap-3 sm:gap-4">
          <SearchInput
            search={search}
            setSearch={setSearch}
            handleSearchSubmit={handleSearchSubmit}
          />
          {/* Cart btn */}
          <NavLink className="relative text-stone-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-brand"
            to="/cart" id="navbar-cart-icon"
          >
            <ShoppingCart size={24} />
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#b53d5d] text-[10px] font-bold text-white shadow-xs">
                {totalCartCount}
              </span>
            )}
          </NavLink>

          <button className="rounded-md p-1 transition hover:bg-stone-100 lg:hidden"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
          {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-line bg-canvas p-4 shadow-md lg:hidden">
          <SearchInput
            isMobile={true}
            search={search}
            setSearch={setSearch}
            handleSearchSubmit={handleSearchSubmit}
          />
          
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? "bg-stone-100 text-[#b53d5d] font-semibold" : "text-stone-700 hover:bg-stone-50"}`
                }
                to={link.path} key={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

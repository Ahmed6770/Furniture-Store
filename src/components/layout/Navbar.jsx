import { useState, useContext } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import { CartContext } from "../../context/CartContext.jsx";
import SearchBar from "../shared/SearchBar.jsx";

function Navbar() {
  const { totalCartCount } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="relative border-b border-stone-200 bg-stone-50">
      <div className="mx-auto flex h-20 w-full max-w-screen-2xl items-center justify-between px-6 lg:px-8">
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
                `relative font-medium transition-colors duration-300 ${isActive ? "text-amber-700 font-semibold" : "text-stone-700 hover:text-stone-900"}`
              }
              to={link.path} key={link.path}                           
            >
              {link.name}
            </NavLink>
          ))}
        </div>
          {/* Search bar */}
        <div className="flex items-center gap-3 sm:gap-4">
          <SearchBar />
          {/* Cart btn */}
          <NavLink className="relative text-stone-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-amber-700"
            to="/cart" aria-label="Open cart"
          >
            <ShoppingCart size={24} />
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-xs font-bold text-white shadow-xs">
                {totalCartCount}
              </span>
            )}
          </NavLink>

          <button className="rounded-md p-1 transition hover:bg-stone-100 lg:hidden"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "close the menu" : "Open the menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
          {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-stone-200 bg-stone-50 p-4 shadow-md lg:hidden">
          <SearchBar isMobile setIsMobileMenuOpen={setIsMobileMenuOpen} />
          
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? "bg-stone-100 text-amber-700 font-semibold" : "text-stone-700 hover:bg-stone-50"}`
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

import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import logo from "../../assets/images/logo.png";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const footerLinkClass = "cursor-pointer text-sm text-stone-500 transition-colors hover:text-brand";

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 4000);
  };

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-10 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-[1.3fr_1fr_1fr_1.5fr]">
          {/* Logo */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img className="h-12 w-12" src={logo} alt="LOOMA logo" />
              <h2 className="text-xl font-semibold tracking-wide text-stone-800">LOOMA</h2>
            </Link>
            <p className="mt-3 max-w-[220px] text-sm leading-5 text-stone-500">
              Furniture that fits your lifestyle.
            </p>
          </div>
          {/* Shop links */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-stone-800">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link className={footerLinkClass} to="/shop">
                  All Products
                </Link>
              </li>
              <li>
                <Link className={footerLinkClass} to="/shop" state={{ category: "Sofas" }}>
                  Living Room
                </Link>
              </li>
              <li>
                <Link className={footerLinkClass} to="/shop" state={{ category: "Beds" }}>
                  Bedroom
                </Link>
              </li>
              <li>
                <Link className={footerLinkClass} to="/shop" state={{ category: "Tables" }}>
                  Office
                </Link>
              </li>
            </ul>
          </div>
          {/* Support links */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-stone-800">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link className={footerLinkClass} to="/about">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className={footerLinkClass} to="/about">
                  Shipping
                </Link>
              </li>
              <li>
                <Link className={footerLinkClass} to="/about">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="mb-3 text-base font-semibold text-stone-800">Newsletter</h3>
            <p className="mb-3 text-sm text-stone-500">Get the latest furniture updates.</p>
            {isSubscribed ? (
              <div className="flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-xs font-semibold text-emerald-700 border border-emerald-200">
                <Check size={16} />
                <span>Thank you for subscribing to our newsletter!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit}>
                <input className="h-11 w-full rounded-full border border-stone-300 bg-surface px-4 text-sm text-stone-900 outline-none placeholder:text-stone-400 focus:border-brand focus:ring-2 focus:ring-brand/30"
                  placeholder="Your email" type="email" id="newsletter-email" required
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <button className="cursor-pointer mt-2 h-11 w-full rounded-full bg-stone-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-7 flex items-center border-t border-line pt-5 justify-center">
          <p className="text-sm text-stone-500">© 2026 LOOMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

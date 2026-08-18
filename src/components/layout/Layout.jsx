import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "../shared/ScrollToTop.jsx";

function Layout() {
  return (
    <div className="min-h-screen bg-canvas text-stone-900">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

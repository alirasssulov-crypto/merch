import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CartModal from "../cart-modal/CartModal";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartModal />
    </div>
  );
}
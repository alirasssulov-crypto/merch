import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../shared/lib/cart";
import { CartIcon } from "../../shared/ui/icons";

const links = [
  { to: "/sets", label: "Наборы" },
  { to: "/catalog", label: "Все товары" },
  { to: "/sewing", label: "Пошив" },
  { to: "/production", label: "Производство" },
  { to: "/info", label: "Информация" },
];

const linkClass = ({ isActive }) =>
  `rounded-md px-4 py-2 text-sm font-semibold transition ${
    isActive ? "bg-brand-dark text-white" : "hover:bg-brand-light"
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();
  const close = () => setOpen(false);

  return (
    <header className="bg-gradient-to-r from-brand-light to-brand/60">
      <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 md:px-8">
        <Link to="/" onClick={close} className="text-lg font-extrabold tracking-[0.2em] md:text-2xl">
          GIFTS &amp; MERCH
        </Link>

        <input
          type="search"
          placeholder="Поиск"
          aria-label="Поиск"
          className="ml-4 hidden h-9 flex-1 rounded-full border-2 border-brand-dark bg-transparent px-4 text-sm outline-none lg:block"
        />

        <a
          href="tel:+380630130103"
          className="ml-auto hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white sm:block"
        >
          +380 630 130 103
        </a>

        <button
          type="button"
          aria-label="Корзина"
          onClick={openCart}
          className="relative ml-auto flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/40 sm:ml-0"
        >
          <CartIcon className="h-6 w-6" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-white">
              {count}
            </span>
          )}
        </button>

        <button
          type="button"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-brand-dark transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-brand-dark transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-brand-dark transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <nav className="hidden bg-white/40 lg:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-2">
          <div className="flex gap-2">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </div>
          <span className="text-sm font-extrabold uppercase">Шопперы со скидкой - 25%</span>
        </div>
      </nav>

      {open && (
        <nav className="flex flex-col gap-1 bg-white px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={close} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <a
            href="tel:+380630130103"
            className="mt-2 rounded-full bg-accent px-5 py-2 text-center text-sm font-semibold text-white sm:hidden"
          >
            +380 630 130 103
          </a>
        </nav>
      )}
    </header>
  );
}
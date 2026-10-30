import { useCart } from "../lib/cart";
import { CartIcon } from "./icons";

export default function ProductCard({ product, onOpen }) {
  const { add } = useCart();

  return (
    <article
      onClick={() => onOpen?.(product)}
      className="group cursor-pointer rounded-xl bg-white p-3 shadow-sm transition hover:shadow-lg"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-3 text-xs font-bold leading-snug md:text-sm">{product.title}</h3>
      <div className="mt-2 flex gap-1.5">
        {product.colors.map((c) => (
          <span
            key={c}
            className="h-3 w-3 rounded-full border border-brand-dark/30"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="text-[10px] text-brand-dark/60">From Price</p>
          <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
        </div>
        <button
          type="button"
          aria-label="Добавить в корзину"
          onClick={(e) => {
            e.stopPropagation();
            add(product);
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full text-brand-dark transition hover:bg-brand-light"
        >
          <CartIcon />
        </button>
      </div>
    </article>
  );
}
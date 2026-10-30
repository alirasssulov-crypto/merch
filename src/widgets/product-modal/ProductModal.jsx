import { useState } from "react";
import Modal from "../../shared/ui/Modal";
import { images } from "../../shared/assets";
import { useCart } from "../../shared/lib/cart";

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
const chest = [84, 90, 96, 102, 108, 114, 120];

export default function ProductModal({ product, onClose }) {
  const { add, openCart } = useCart();
  const [size, setSize] = useState("M");
  const [active, setActive] = useState(0);

  if (!product) return null;

  const gallery = [product.image, images.youngMan, images.hoodieSmall];

  const handleAdd = () => {
    add(product, size);
    onClose();
    openCart();
  };

  return (
    <Modal open onClose={onClose} className="max-w-3xl">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-50">
            <img src={gallery[active]} alt={product.title} className="h-full w-full object-contain" />
          </div>
          <div className="mt-3 flex gap-2">
            {gallery.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-16 w-16 overflow-hidden rounded-md border-2 bg-gray-50 ${
                  active === i ? "border-brand-dark" : "border-transparent"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="pr-8 text-lg font-extrabold uppercase leading-snug md:text-xl">{product.title}</h2>
          <div className="flex gap-2">
            {product.colors.map((c) => (
              <span key={c} className="h-4 w-4 rounded-full border border-brand-dark/30" style={{ backgroundColor: c }} />
            ))}
          </div>
          <p className="text-sm text-brand-dark/80">
            Плотная ткань, свободный крой и аккуратная строчка. Подходит для нанесения логотипа любым способом.
          </p>
          <p className="text-xl font-bold">From Price ${product.price.toFixed(2)}</p>

          <div>
            <p className="mb-2 text-sm font-bold">Размер</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`h-9 min-w-9 rounded-md border px-2 text-sm transition ${
                    size === s ? "border-brand-dark bg-brand-dark text-white" : "border-brand-dark/30 hover:bg-brand-light"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Заказать
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-sm font-bold uppercase">Таблица размеров</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-center text-xs">
            <thead>
              <tr>
                <th className="py-1 text-left">Размер</th>
                {sizes.map((s) => (
                  <th key={s} className="py-1">{s}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-brand-dark/15">
                <td className="py-1 text-left">Грудь, см</td>
                {chest.map((c) => (
                  <td key={c} className="py-1">{c}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
}
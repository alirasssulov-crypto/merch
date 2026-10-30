import { useState } from "react";
import { images } from "../shared/assets";
import { products } from "../shared/data/products";
import PageHero from "../shared/ui/PageHero";
import ProductCard from "../shared/ui/ProductCard";
import Reveal from "../shared/ui/Reveal";
import Steps from "../shared/ui/Steps";
import InfoBlocks from "../shared/ui/InfoBlocks";
import IdeaSection from "../shared/ui/IdeaSection";
import ProductModal from "../widgets/product-modal/ProductModal";

const tabs = ["Все", "Толстовки", "Свитшоты", "Футболки", "Шапки", "Кружки", "Шопперы"];

export default function CatalogPage() {
  const [tab, setTab] = useState(tabs[0]);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <PageHero
        title="Купить чашку с логотипом"
        text="Готовые товары с нанесением логотипа вашей компании. Выберите модель и оформите заказ онлайн."
        image={images.hoodieBig}
        imageAlt="Худи"
      />

      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-24">
        <div className="flex gap-2 overflow-x-auto pb-3">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold transition md:text-sm ${
                tab === t ? "bg-brand-dark text-white" : "hover:bg-brand-light"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 100}>
              <ProductCard product={p} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </section>

      <Steps title="Как заказать товар" />
      <InfoBlocks />
      <IdeaSection />

      <ProductModal key={selected?.id ?? "none"} product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
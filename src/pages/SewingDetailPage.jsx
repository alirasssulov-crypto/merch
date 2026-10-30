import { useState } from "react";
import { images } from "../shared/assets";
import PageHero from "../shared/ui/PageHero";
import Accordion from "../shared/ui/Accordion";
import Steps from "../shared/ui/Steps";
import InfoBlocks from "../shared/ui/InfoBlocks";
import IdeaSection from "../shared/ui/IdeaSection";
import Reveal from "../shared/ui/Reveal";

const faq = [
  { title: "Материал", content: "Хлопок 100%, футер трехнитка с начесом или без. Плотность подбираем под задачу." },
  { title: "Как заказать", content: "Оставьте заявку, мы согласуем макет, тираж и сроки, затем запускаем пошив." },
  { title: "Виды нанесения", content: "Шелкография, вышивка, термотрансфер, DTG-печать." },
  { title: "Уход за товаром", content: "Стирка при 30°C, без отбеливателей. Гладить с изнаночной стороны." },
];

const sizes = ["S", "M", "L", "XL"];

export default function SewingDetailPage() {
  const [size, setSize] = useState("M");

  return (
    <>
      <PageHero
        title="Худи классическое"
        text="Стоимость производства фирменной толстовки зависит от материала, тиража и способа нанесения."
        image={images.hoodieBig}
        imageAlt="Худи классическое"
      >
        <div className="mt-6 flex items-center gap-2">
          <span className="text-sm font-semibold">Размер:</span>
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`h-9 min-w-9 rounded-md border px-2 text-xs transition ${
                size === s ? "border-brand-dark bg-brand-dark text-white" : "border-brand-dark/40 bg-white/60"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="mt-8 rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Заказать пошив
        </button>
      </PageHero>

      <section className="mx-auto grid max-w-[1440px] items-start gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-24">
        <Reveal>
          <Accordion items={faq} />
        </Reveal>
        <Reveal delay={200}>
          <img
            src={images.youngMan}
            alt="Модель"
            className="w-full max-w-sm rounded-2xl object-cover shadow-lg md:justify-self-end"
          />
        </Reveal>
      </section>

      <section className="bg-brand-light/30">
        <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-24">
          <Reveal>
            <h2 className="text-2xl font-bold md:text-4xl">Доступные цвета</h2>
            <p className="mt-2 text-sm text-brand-dark/70 md:text-base">
              Любой цвет можно подобрать под фирменный стиль компании
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {images.hoodies.slice(0, 4).map((src, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white p-3 shadow-sm transition hover:shadow-lg">
                  <img src={src} alt="Худи" className="h-full w-full object-contain" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Steps title="Этапы пошива" />
      <InfoBlocks />
      <IdeaSection />
    </>
  );
}
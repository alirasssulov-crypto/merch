import { Link } from "react-router-dom";
import { images } from "../shared/assets";
import PageHero from "../shared/ui/PageHero";
import ItemGrid from "../shared/ui/ItemGrid";
import Steps from "../shared/ui/Steps";
import InfoBlocks from "../shared/ui/InfoBlocks";
import Stats from "../shared/ui/Stats";
import IdeaSection from "../shared/ui/IdeaSection";
import Reveal from "../shared/ui/Reveal";

const features = [
  "Собственное швейное производство",
  "Тиражи от 10 до 10 000 штук",
  "Любое нанесение логотипа",
  "Образец перед запуском тиража",
];

export default function SewingPage() {
  return (
    <>
      <PageHero
        title="Современный мерч создает современные бренды"
        text="Мы шьем одежду и аксессуары под ваш бренд: от идеи и макета до готового тиража."
        image={images.hoodieBig}
        imageAlt="Худи"
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/sewing/hoodie"
            className="rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Оставить заявку
          </Link>
          <Link to="/catalog" className="text-sm font-semibold hover:underline">
            Смотреть каталог
          </Link>
        </div>
      </PageHero>

      <ItemGrid title="Мы можем пошить" subtitle="Товары, которые изготовим под ваш фирменный стиль" />

      <section className="bg-brand-light/30">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-8 md:py-24">
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <img src={images.sweaters} alt="Свитшоты" className="w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="text-2xl font-bold md:text-4xl">Почему шьют у нас</h2>
            <ul className="mt-6 space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm md:text-base">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs text-white">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Steps title="Как проходит пошив" />
      <InfoBlocks />
      <Stats />
      <IdeaSection />
    </>
  );
}
import { Link } from "react-router-dom";
import { images } from "../shared/assets";
import PageHero from "../shared/ui/PageHero";
import ItemGrid from "../shared/ui/ItemGrid";
import Steps from "../shared/ui/Steps";
import InfoBlocks from "../shared/ui/InfoBlocks";
import Stats from "../shared/ui/Stats";
import IdeaSection from "../shared/ui/IdeaSection";
import Reveal from "../shared/ui/Reveal";

export default function ProductionPage() {
  return (
    <>
      <PageHero
        title="Нужно создать уникальный продукт для вашей компании?"
        text="Расскажите о задаче, а мы подберем материалы и запустим производство."
        image={images.woman}
        imageAlt="Производство"
      >
        <Link
          to="/info"
          className="mt-8 inline-block rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Просчитать стоимость
        </Link>
      </PageHero>

      <ItemGrid title="Мы можем создать" subtitle="Товары, которые изготовим под ваш фирменный стиль" to="/sewing" />

      <section className="bg-brand-light/30">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-8 md:py-24">
          <Reveal>
            <h2 className="text-2xl font-bold md:text-4xl">Производство под ключ</h2>
            <p className="mt-4 text-sm text-brand-dark/80 md:text-base">
              От разработки дизайна и подбора материалов до упаковки и доставки. Один менеджер ведет ваш заказ на каждом этапе.
            </p>
            <p className="mt-3 text-sm text-brand-dark/80 md:text-base">
              Работаем с одеждой, аксессуарами, подарочными боксами и даже со съедобными подарками.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <img src={images.giftBoxBig} alt="Производство" className="w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <Steps title="Этапы производства" />
      <InfoBlocks />
      <Stats />
      <IdeaSection />
    </>
  );
}
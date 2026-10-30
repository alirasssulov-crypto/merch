import { images } from "../shared/assets";
import { giftSets } from "../shared/data/products";
import PageHero from "../shared/ui/PageHero";
import ProductCard from "../shared/ui/ProductCard";
import Reveal from "../shared/ui/Reveal";
import Steps from "../shared/ui/Steps";
import InfoBlocks from "../shared/ui/InfoBlocks";
import Stats from "../shared/ui/Stats";
import IdeaForm from "../shared/ui/IdeaForm";

const boxSteps = [
  { title: "Идея", text: "Вы рассказываете, кому и по какому поводу нужны подарки." },
  { title: "Подбор", text: "Мы предлагаем состав набора под ваш бюджет." },
  { title: "Брендирование", text: "Наносим логотип на товары и упаковку." },
  { title: "Сборка", text: "Собираем боксы и доставляем в нужный день." },
];

export default function SetsPage() {
  return (
    <>
      <PageHero
        title="Подарочные наборы это необычные......"
        text="Готовые решения для корпоративных подарков и возможность собрать набор под вашу идею."
        image={images.giftBoxBig}
        imageAlt="Подарочный набор"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#sets"
            className="rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Выбрать готовый набор
          </a>
          <a href="#create" className="rounded-full px-6 py-3 text-sm font-semibold hover:underline">
            Создать свой
          </a>
        </div>
      </PageHero>

      <section id="sets" className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-24">
        <Reveal>
          <h2 className="text-2xl font-bold md:text-4xl">Готовые наборы</h2>
          <p className="mt-2 text-sm text-brand-dark/70 md:text-base">
            Подарки, которые уже собраны и готовы к отправке
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
          {giftSets.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <InfoBlocks />
      <Steps title="Как собрать свой бокс" items={boxSteps} />

      <section id="create" className="bg-brand-light/30">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-8 md:py-24">
          <Reveal>
            <p className="text-3xl font-extrabold tracking-widest text-brand md:text-5xl">CREATIVE</p>
            <h2 className="mb-8 mt-3 text-2xl font-bold md:text-4xl">Как создать бокс по Вашей идее?</h2>
            <IdeaForm />
          </Reveal>
          <Reveal delay={200}>
            <div className="mx-auto w-full max-w-sm rotate-3 rounded-3xl bg-gradient-to-br from-brand-light to-brand p-5 shadow-xl transition duration-500 hover:rotate-0 md:max-w-md">
              <img src={images.giftBox} alt="Подарочный бокс" className="w-full object-contain" />
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />
    </>
  );
}
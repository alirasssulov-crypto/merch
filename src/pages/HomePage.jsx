import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../shared/assets";
import { products } from "../shared/data/products";
import Reveal from "../shared/ui/Reveal";
import IdeaSection from "../shared/ui/IdeaSection";
import ProductCard from "../shared/ui/ProductCard";
import { Wave } from "../shared/ui/icons";
import ProductModal from "../widgets/product-modal/ProductModal";

const advantages = [
  "Высокое качество ONLY",
  "Поддержка менеджера 24/7",
  "Выполнение заказа в TURBO-режиме",
];

const steps = [
  { title: "Заявка", text: "Оставляете заявку на сайте или звоните менеджеру." },
  { title: "Макет", text: "Мы подбираем материалы и согласовываем макет с логотипом." },
  { title: "Производство", text: "Запускаем пошив и нанесение на собственном производстве." },
  { title: "Доставка", text: "Привозим готовый тираж в офис в оговоренный срок." },
];

const stats = [
  { value: "500+", label: "довольных клиентов" },
  { value: "10 лет", label: "на рынке мерча" },
  { value: "24/7", label: "поддержка менеджера" },
  { value: "15 мин", label: "на ответ по заявке" },
];

const circles = [images.circle, images.sweaters, images.box1, images.box2];

const partners = [
  { src: images.cocaCola, alt: "Coca-Cola" },
  { src: images.atlas, alt: "Atlas Weekend" },
  { src: images.crazyBox, alt: "Crazybox" },
];

export default function HomePage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-light via-brand/60 to-brand">
        <div className="mx-auto grid min-h-[480px] max-w-[1440px] items-center gap-8 px-4 pb-24 pt-10 md:min-h-[620px] md:grid-cols-2 md:px-8 md:pb-40 md:pt-16 lg:min-h-[740px]">
          <div className="motion-safe:animate-fade-up">
            <h1 className="text-3xl font-extrabold uppercase leading-tight md:text-5xl lg:text-6xl">
              Свежее дыхание в корпоративной жизни
            </h1>
            <p className="mt-5 max-w-lg text-sm md:text-lg">
              Мы производим и поставляем корпоративный мерч и подарки: от одной футболки до тиража в тысячи штук.
            </p>
            <ul className="mt-8 grid grid-cols-3 gap-3 md:gap-6">
              {advantages.map((a) => (
                <li
                  key={a}
                  className="flex flex-col items-center gap-3 text-center text-[11px] font-semibold md:text-sm"
                >
                  <span className="h-14 w-14 rounded-full bg-brand-light shadow-md md:h-20 md:w-20" />
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/catalog"
                className="rounded-full bg-brand-dark px-8 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                Смотреть товары
              </Link>
              <Link
                to="/sewing"
                className="rounded-full border-2 border-brand-dark px-8 py-3 text-center text-sm font-semibold transition hover:bg-white/40"
              >
                Заказать пошив
              </Link>
            </div>
          </div>
          <img
            src={images.hero}
            alt="Gifts & Merch"
            className="mx-auto max-h-[320px] w-auto object-contain motion-safe:animate-float md:max-h-[560px] md:justify-self-end"
          />
        </div>
        <Wave />
      </section>

      {/* САМОЕ ПОПУЛЯРНОЕ */}
      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-24">
        <Reveal className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold md:text-4xl">Самое популярное</h2>
            <p className="mt-2 text-sm text-brand-dark/70 md:text-base">
              Товары, которые компании чаще всего заказывают для своих клиентов
            </p>
          </div>
          <Link to="/catalog" className="shrink-0 text-sm font-semibold hover:underline">
            Все товары →
          </Link>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-[2fr_1fr] md:gap-6">
          <Reveal>
            <Link
              to="/catalog"
              className="group block h-full min-h-[260px] overflow-hidden rounded-2xl bg-gray-100"
            >
              <img
                src={images.tote}
                alt="Шопперы"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <Reveal className="col-span-2" delay={100}>
              <Link to="/catalog" className="group block overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={images.mugs}
                  alt="Кружки"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/catalog"
                className="group block h-full overflow-hidden rounded-2xl bg-gray-100"
              >
                <img
                  src={images.hoodieSmall}
                  alt="Худи"
                  className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                />
              </Link>
            </Reveal>
            <Reveal delay={300}>
              <Link
                to="/catalog"
                className="group block h-full overflow-hidden rounded-2xl bg-gray-100"
              >
                <img
                  src={images.youngMan}
                  alt="Куртка"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ТОВАРЫ */}
      <section className="bg-brand-light/30">
        <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-24">
          <Reveal className="mb-8">
            <h2 className="text-2xl font-bold md:text-4xl">Готовые товары</h2>
            <p className="mt-2 text-sm text-brand-dark/70 md:text-base">
              Нажмите на карточку, чтобы выбрать размер и оформить заказ
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
            {products.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <ProductCard product={p} onOpen={setSelected} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/catalog"
              className="inline-block rounded-full bg-brand-dark px-10 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Смотреть весь каталог
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ПОДАРКИ */}
      <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-8 md:py-24">
        <Reveal>
          <p className="text-3xl font-extrabold tracking-widest text-brand md:text-5xl">CREATIVE</p>
          <h2 className="mt-3 max-w-lg text-2xl font-bold md:text-4xl">
            Хотите удивить ваших коллег/партнеров необычными подарками?
          </h2>
          <p className="mt-4 max-w-lg text-sm text-brand-dark/70 md:text-base">
            Выберите готовые подарочные наборы или укажите критерии, по которым мы соберем для вас уникальный бокс.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/sets"
              className="rounded-full bg-brand-dark px-8 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              Перейти к наборам
            </Link>
            <Link
              to="/sets"
              className="rounded-full px-8 py-3 text-center text-sm font-semibold hover:underline"
            >
              Создать свой
            </Link>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mx-auto w-full max-w-sm rotate-3 rounded-3xl bg-gradient-to-br from-brand-light to-brand p-5 shadow-xl transition duration-500 hover:rotate-0 md:max-w-md">
            <img src={images.giftBox} alt="Подарочный набор" className="w-full object-contain" />
          </div>
        </Reveal>
      </section>

      {/* ПОШИВ */}
      <section className="bg-gradient-to-b from-white to-brand-light/40">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-8 md:py-24">
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <img src={images.sweaters} alt="Свитшоты" className="w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="text-xl font-bold md:text-3xl">
              Помимо готовой продукции высокого качества, мы можем для Вас произвести одежду, аксессуары, вкусности и другое под заказ.
            </h2>
            <p className="mt-4 text-sm text-brand-dark/70 md:text-base">
              Благодаря своему производству мы изготавливаем большие тиражи в короткие сроки, а также можем выполнить нестандартные задачи.
            </p>
            <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
              {circles.map((src, i) => (
                <Link
                  key={i}
                  to="/sewing"
                  className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-brand-light shadow transition hover:scale-110 md:h-24 md:w-24"
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </Link>
              ))}
            </div>
            <Link
              to="/sewing"
              className="mt-8 inline-block rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Подробнее о пошиве
            </Link>
          </Reveal>
        </div>
      </section>

      {/* КАК МЫ РАБОТАЕМ */}
      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-24">
        <Reveal>
          <h2 className="text-2xl font-bold md:text-4xl">Как мы работаем</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="h-full rounded-2xl bg-brand-light/50 p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-dark text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-dark/80">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ЦИФРЫ */}
      <section className="bg-brand-dark text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120} className="text-center">
              <p className="text-3xl font-extrabold md:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs text-white/80 md:text-sm">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ФОРМА */}
      <IdeaSection />

      {/* ПАРТНЁРЫ */}
      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-24">
        <Reveal>
          <h2 className="mb-10 text-xl font-bold md:text-3xl">С нами сотрудничают</h2>
        </Reveal>
        <Reveal delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-10 md:justify-between">
            {partners.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                className="h-10 w-auto opacity-80 transition hover:opacity-100 md:h-14"
              />
            ))}
          </div>
        </Reveal>
      </section>

      <ProductModal key={selected?.id ?? "none"} product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
    
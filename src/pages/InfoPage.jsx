import PageHero from "../shared/ui/PageHero";
import Accordion from "../shared/ui/Accordion";
import InfoBlocks from "../shared/ui/InfoBlocks";
import Steps from "../shared/ui/Steps";
import Stats from "../shared/ui/Stats";
import IdeaForm from "../shared/ui/IdeaForm";
import Reveal from "../shared/ui/Reveal";

const faq = [
  { title: "Материал", content: "Работаем с хлопком, футером, флисом, нейлоном и экокожей." },
  { title: "Как заказать", content: "Оставьте заявку на сайте или позвоните менеджеру, дальше мы все согласуем." },
  { title: "Оплата и доставка", content: "Безналичная оплата, доставка по стране и за рубеж." },
  { title: "Свежее дыхание в корпоративной жизни", content: "Мы делаем корпоративный мерч, который хочется носить и дарить." },
];

export default function InfoPage() {
  return (
    <>
      <PageHero
        title="Кто такие Gifst & Merch?"
        text="Мы команда, которая делает корпоративный мерч и подарки под ключ: от идеи до доставки."
      />

      <section className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 md:grid-cols-2 md:px-8 md:py-24">
        <Reveal>
          <h2 className="text-2xl font-bold md:text-3xl">Свежее дыхание в корпоративной жизни</h2>
          <p className="mt-4 text-sm text-brand-dark/80 md:text-base">
            Мы создаем мерч и подарки, которые помогают компаниям радовать сотрудников, клиентов и партнеров.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <h2 className="text-2xl font-bold md:text-3xl">Снимаем головную боль</h2>
          <p className="mt-4 text-sm text-brand-dark/80 md:text-base">
            Берем на себя дизайн, производство, упаковку и доставку. Вам остается только выбрать и утвердить макет.
          </p>
        </Reveal>
      </section>

      <InfoBlocks />
      <Stats />

      <section className="mx-auto grid max-w-[1440px] items-start gap-10 px-4 py-14 md:grid-cols-2 md:px-8 md:py-24">
        <Reveal>
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Часто задаваемые вопросы</h2>
          <Accordion items={faq} />
        </Reveal>
        <Reveal delay={200} className="hidden md:flex md:justify-center md:self-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-full border-8 border-brand-light text-9xl font-bold text-brand-light">
            i
          </div>
        </Reveal>
      </section>

      <Steps title="Как с нами работать" />

      <section className="bg-brand-light/30">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 md:grid-cols-[1fr_2fr] md:px-8 md:py-24">
          <Reveal>
            <h2 className="text-2xl font-bold">Контакты</h2>
            <a href="mailto:example@gmail.com" className="mt-4 block text-sm md:text-base">
              example@gmail.com
            </a>
            <a href="tel:+380630130103" className="mt-2 block text-sm font-semibold md:text-base">
              +380 630 130 103
            </a>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="mb-6 text-2xl font-bold">Свяжитесь с нами</h2>
            <IdeaForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
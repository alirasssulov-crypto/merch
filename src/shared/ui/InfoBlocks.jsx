import Reveal from "./Reveal";

const blocks = [
  {
    title: "Сроки изготовления",
    text: "Срок изготовления зависит от тиража и сложности нанесения. Как правило, это 10–15 рабочих дней с момента утверждения макета. Срочные заказы выполняем в TURBO-режиме.",
  },
  {
    title: "Стоимость",
    text: "Стоимость рассчитывается индивидуально: она зависит от материала, тиража и способа нанесения. Чем больше тираж, тем выгоднее цена за единицу.",
  },
  {
    title: "Брендирование",
    text: "Мы наносим логотип любым удобным способом: шелкография, вышивка, термотрансфер. Макет согласовываем с вами до запуска в производство.",
  },
];

export default function InfoBlocks() {
  return (
    <section className="mx-auto grid max-w-[1440px] gap-8 px-4 py-14 md:grid-cols-3 md:gap-12 md:px-8 md:py-24">
      {blocks.map((b, i) => (
        <Reveal key={b.title} delay={i * 150}>
          <h3 className="text-xl font-bold md:text-2xl">{b.title}</h3>
          <p className="mt-3 text-sm text-brand-dark/80 md:text-base">{b.text}</p>
        </Reveal>
      ))}
    </section>
  );
}
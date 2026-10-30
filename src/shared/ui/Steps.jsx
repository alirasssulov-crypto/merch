import Reveal from "./Reveal";

const defaultSteps = [
  { title: "Заявка", text: "Оставляете заявку на сайте или звоните менеджеру." },
  { title: "Макет", text: "Мы подбираем материалы и согласовываем макет с логотипом." },
  { title: "Производство", text: "Запускаем пошив и нанесение на собственном производстве." },
  { title: "Доставка", text: "Привозим готовый тираж в офис в оговоренный срок." },
];

export default function Steps({ title = "Как мы работаем", items = defaultSteps }) {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-24">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
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
  );
}
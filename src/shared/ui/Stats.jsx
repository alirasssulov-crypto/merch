import Reveal from "./Reveal";

const defaultStats = [
  { value: "500+", label: "довольных клиентов" },
  { value: "10 лет", label: "на рынке мерча" },
  { value: "24/7", label: "поддержка менеджера" },
  { value: "15 мин", label: "на ответ по заявке" },
];

export default function Stats({ items = defaultStats }) {
  return (
    <section className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-4">
        {items.map((s, i) => (
          <Reveal key={s.label} delay={i * 120} className="text-center">
            <p className="text-3xl font-extrabold md:text-5xl">{s.value}</p>
            <p className="mt-2 text-xs text-white/80 md:text-sm">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
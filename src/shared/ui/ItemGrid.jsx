import { Link } from "react-router-dom";
import { images } from "../assets";
import Reveal from "./Reveal";

const items = [
  { label: "Шапки", image: images.circle },
  { label: "Худи", image: images.hoodieSmall },
  { label: "Свитшоты", image: images.sweaters },
  { label: "Футболки", image: images.youngMan },
  { label: "Шопперы", image: images.tote },
  { label: "Кружки", image: images.mugs },
  { label: "Рюкзаки", image: images.box },
  { label: "Бейсболки", image: images.box1 },
];

export default function ItemGrid({ title, subtitle, to = "/sewing/hoodie" }) {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-24">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-brand-dark/70 md:text-base">{subtitle}</p>}
      </Reveal>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={(i % 4) * 100}>
            <Link to={to} className="group block text-center">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                />
              </div>
              <span className="mt-3 block text-sm font-semibold md:text-base">{item.label}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
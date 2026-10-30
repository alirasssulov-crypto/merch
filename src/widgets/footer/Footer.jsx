import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeSchema } from "../../shared/lib/schemas";

const categories = [
  { to: "/sewing", label: "Пошив" },
  { to: "/catalog", label: "Все товары" },
  { to: "/sets", label: "Наборы" },
  { to: "/production", label: "Производство" },
];
const info = [
  { to: "/info", label: "О нас" },
  { to: "/info", label: "Чайк" },
  { to: "/info", label: "Контакты" },
];

export default function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { phone: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <footer className="bg-gradient-to-b from-white to-brand-light/60">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-10 sm:grid-cols-2 md:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <Link to="/" className="text-2xl font-extrabold tracking-[0.2em]">
            GIFTS &amp; MERCH
          </Link>
          <p className="mt-3 max-w-xs text-xs text-brand-dark/70">
            Свежее дыхание в корпоративной жизни и жизни корпоративного дыхания свежее
          </p>
          <a href="tel:+380630130103" className="mt-3 block text-sm font-semibold">
            +380 630 130 103
          </a>
          <a href="mailto:example@gmail.com" className="block text-sm">
            example@gmail.com
          </a>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold">Категории</h4>
          <ul className="space-y-2 text-sm">
            {categories.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold">Информация</h4>
          <ul className="space-y-2 text-sm">
            {info.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="sm:col-span-2 lg:col-span-1">
          <h4 className="mb-3 text-sm font-bold">Связаться с менеджером</h4>
          <div className="flex items-center rounded-full border border-brand-dark px-4 py-1.5">
            <input
              {...register("phone")}
              type="tel"
              placeholder="Номер телефона"
              className="w-full bg-transparent text-sm outline-none"
            />
            <button
              type="submit"
              aria-label="Отправить"
              className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-dark text-white"
            >
              →
            </button>
          </div>
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </form>
      </div>
    </footer>
  );
}
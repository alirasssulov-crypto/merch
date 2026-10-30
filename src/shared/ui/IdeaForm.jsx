import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ideaSchema } from "../lib/schemas";

const fieldClass =
  "w-full border-b border-brand-dark/40 bg-transparent py-2 text-sm outline-none focus:border-brand-dark";

export default function IdeaForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(ideaSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((r) => setTimeout(r, 500));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex w-full flex-col gap-4">
      <p className="text-sm font-bold">
        Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 15 минут
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <input {...register("name")} placeholder="Ваше имя" className={fieldClass} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <input {...register("email")} type="email" placeholder="Ваш e-mail" className={fieldClass} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <input {...register("phone")} type="tel" placeholder="Ваш номер телефона" className={fieldClass} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full self-start rounded-full bg-accent px-10 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50 sm:w-auto md:self-end"
      >
        {isSubmitting ? "Отправка..." : "Заказать"}
      </button>

      {isSubmitSuccessful && <p className="text-sm text-accent">Заявка отправлена!</p>}
    </form>
  );
}
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "../../shared/ui/Modal";
import { useCart } from "../../shared/lib/cart";
import { orderSchema } from "../../shared/lib/schemas";

const fieldClass =
  "w-full border-b border-brand-dark/40 bg-transparent py-2 text-sm outline-none focus:border-brand-dark";

export default function CartModal() {
  const { items, changeQty, remove, clear, total, isOpen, closeCart } = useCart();
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: { name: "", phone: "", comment: "" },
  });

  const onSubmit = async (data) => {
    console.log({ customer: data, items, total });
    await new Promise((r) => setTimeout(r, 500));
    clear();
    reset();
    setDone(true);
  };

  const handleClose = () => {
    setDone(false);
    closeCart();
  };

  return (
    <Modal open={isOpen} onClose={handleClose} className="max-w-4xl">
      {done ? (
        <div className="py-16 text-center">
          <h2 className="text-2xl font-bold">Спасибо за заказ!</h2>
          <p className="mt-2 text-sm">Наш менеджер свяжется с вами в течение 15 минут.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Оформить заказ</h2>
            <p className="text-xs text-brand-dark/70">
              Введите контактные данные, и менеджер свяжется с вами для подтверждения заказа.
            </p>
            <div>
              <input {...register("name")} placeholder="Имя" className={fieldClass} />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <input {...register("phone")} type="tel" placeholder="Номер телефона" className={fieldClass} />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
            </div>
            <div>
              <input {...register("comment")} placeholder="Комментарий" className={fieldClass} />
              {errors.comment && <p className="mt-1 text-xs text-red-600">{errors.comment.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting || items.length === 0}
              className="rounded-full bg-accent px-10 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Отправка..." : "Заказать"}
            </button>
          </form>

          <div className="md:border-l md:border-brand-dark/15 md:pl-8">
            <h2 className="text-xl font-bold">Корзина</h2>
            {items.length === 0 ? (
              <p className="mt-4 text-sm text-brand-dark/70">Корзина пуста</p>
            ) : (
              <ul className="mt-4 space-y-4">
                {items.map((item) => (
                  <li key={item.key} className="flex items-center gap-3">
                    <img src={item.image} alt="" className="h-14 w-14 rounded-md bg-gray-50 object-contain" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold">{item.title}</p>
                      <p className="text-[11px] text-brand-dark/60">Размер: {item.size}</p>
                      <div className="mt-1 flex items-center gap-2 text-sm">
                        <button type="button" onClick={() => changeQty(item.key, -1)} className="h-6 w-6 rounded-full border border-brand-dark/30">
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button type="button" onClick={() => changeQty(item.key, 1)} className="h-6 w-6 rounded-full border border-brand-dark/30">
                            +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">${(item.price * item.qty).toFixed(2)}</p>
                      <button type="button" onClick={() => remove(item.key)} className="text-[11px] text-red-600 hover:underline">
                        Удалить
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-6 text-right text-lg font-bold">Всего: ${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </Modal>
  );
}
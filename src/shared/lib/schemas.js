import { z } from "zod";

const phoneRegex = /^\+?[0-9\s()-]{7,20}$/;

export const ideaSchema = z.object({
  name: z.string().trim().min(2, "Минимум 2 символа"),
  email: z.string().trim().email("Некорректный email"),
  phone: z.string().trim().regex(phoneRegex, "Некорректный телефон"),
});

export const subscribeSchema = z.object({
  phone: z.string().trim().regex(phoneRegex, "Некорректный телефон"),
});

export const orderSchema = z.object({
  name: z.string().trim().min(2, "Минимум 2 символа"),
  phone: z.string().trim().regex(phoneRegex, "Некорректный телефон"),
  comment: z.string().trim().max(300, "Максимум 300 символов"),
});
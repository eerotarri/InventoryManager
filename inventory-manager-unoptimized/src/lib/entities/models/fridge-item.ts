import { z } from "zod";

export const fridgeItemSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Nimen täytyy olla vähintään 1 merkkiä pitkä"),
  quantity: z
    .number({ message: "Odotettiin numeroa, saatiin jotain muuta" })
    .min(0, "Määrän täytyy olla vähintään 0"),
  suffix: z.union([z.literal("kpl"), z.literal("l"), z.literal("kg")]),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type FridgeItem = z.infer<typeof fridgeItemSchema>;

export const insertFridgeItemSchema = fridgeItemSchema.pick({
  name: true,
  quantity: true,
  suffix: true,
});

export type InsertFridgeItem = z.infer<typeof insertFridgeItemSchema>;

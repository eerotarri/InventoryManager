import { z } from "zod";

const fridgeItemSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  quantity: z.number().min(0),
  suffix: z.union([z.literal("kpl"), z.literal("l"), z.literal("kg")]),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type FridgeItem = z.infer<typeof fridgeItemSchema>;

const insertFridgeItemSchema = fridgeItemSchema.pick({
  name: true,
  quantity: true,
  suffix: true,
});

export type InsertFridgeItem = z.infer<typeof insertFridgeItemSchema>;
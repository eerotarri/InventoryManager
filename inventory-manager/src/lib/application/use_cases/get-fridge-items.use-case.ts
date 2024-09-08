import type { FridgeItem } from "@/lib/entities/models/fridge-item";
import { FridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository";
import { MockFridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository.mock";

const fridgeItemRepository =
  process.env.NODE_ENV == "development"
    ? MockFridgeItemRepository.getInstance()
    : FridgeItemRepository.getInstance();

export async function getFridgeItemsUseCase(): Promise<
  FridgeItem[] | undefined
> {
  return await fridgeItemRepository.getFridgeItems();
}

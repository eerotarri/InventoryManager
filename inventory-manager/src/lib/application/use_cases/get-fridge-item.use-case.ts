import type { FridgeItem } from "@/lib/entities/models/fridge-item";
import { FridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository";
import { MockFridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository.mock";

const fridgeItemRepository =
  process.env.NODE_ENV !== "production" ||
  process.env.RUNNING_IN_DOCKER !== "true"
    ? MockFridgeItemRepository.getInstance()
    : FridgeItemRepository.getInstance();

export async function getFridgeItemUseCase(
  id: string
): Promise<FridgeItem | undefined> {
  return await fridgeItemRepository.getFridgeItem(id);
}

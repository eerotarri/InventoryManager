import type { FridgeItem } from "../../entities/models/fridge-item";
import { FridgeItemRepository } from "../../infrastructure/repositories/fridge-items.repository";

export async function getFridgeItemUseCase(
  id: string
): Promise<FridgeItem | undefined> {
  return await FridgeItemRepository.getInstance().getFridgeItem(id);
}

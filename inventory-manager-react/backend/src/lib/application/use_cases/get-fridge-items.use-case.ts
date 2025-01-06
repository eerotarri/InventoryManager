import type { FridgeItem } from "../../entities/models/fridge-item.ts";
import { FridgeItemRepository } from "../../../lib/infrastructure/repositories/fridge-items.repository";

export async function getFridgeItemsUseCase(): Promise<
  FridgeItem[] | undefined
> {
  return await FridgeItemRepository.getInstance().getFridgeItems();
}

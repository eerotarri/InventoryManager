import {
  FridgeItem,
  InsertFridgeItem,
} from "../../entities/models/fridge-item";
import { FridgeItemRepository } from "../../infrastructure/repositories/fridge-items.repository";

export async function updateFridgeItemUseCase(
  id: string,
  data: InsertFridgeItem
) {
  // This is a use case function
  // It can be used to implement the business logic
  const newFridgeItem =
    await FridgeItemRepository.getInstance().updateFridgeItem(id, data);

  return newFridgeItem;
}

import { InsertFridgeItem } from "../../entities/models/fridge-item";
import { FridgeItemRepository } from "../../../lib/infrastructure/repositories/fridge-items.repository";

export async function createFridgeItemUseCase(data: InsertFridgeItem) {
  // This is a use case function
  // It can be used to implement the business logic
  const newFridgeItem = await FridgeItemRepository.getInstance().addFridgeItem(
    data
  );

  return newFridgeItem;
}

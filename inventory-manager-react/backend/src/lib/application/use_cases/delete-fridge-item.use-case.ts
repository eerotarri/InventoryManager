import { FridgeItemRepository } from "../../../lib/infrastructure/repositories/fridge-items.repository";

export async function deleteFridgeItemUseCase(id: string) {
  // This is a use case function
  // It can be used to implement the business logic
  const newFridgeItem =
    await FridgeItemRepository.getInstance().deleteFridgeItem(id);

  return newFridgeItem;
}

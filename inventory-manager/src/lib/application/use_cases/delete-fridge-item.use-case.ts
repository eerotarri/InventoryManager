import {
  FridgeItem,
  InsertFridgeItem,
} from "@/lib/entities/models/fridge-item";
import { IFridgeItemRepository } from "@/lib/application/repositories/fridge-items.repository.interface";
import { MockFridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository.mock";
import { FridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository";

const fridgeItemRepository =
  process.env.NODE_ENV !== "production"
    ? MockFridgeItemRepository.getInstance()
    : FridgeItemRepository.getInstance();

export async function deleteFridgeItemUseCase(id: string) {
  // This is a use case function
  // It can be used to implement the business logic
  const newFridgeItem = await fridgeItemRepository.deleteFridgeItem(id);

  return newFridgeItem;
}

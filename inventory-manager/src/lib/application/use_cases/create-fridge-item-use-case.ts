import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";
import { IFridgeItemRepository } from "../repositories/fridge-items.repository.interface";
import { MockFridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository.mock";
import { FridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository";

let fridgeItemRepository: IFridgeItemRepository;

if (process.env.NODE_ENV === "development" || process.env.DATABASE_URL === undefined) {
  fridgeItemRepository = new MockFridgeItemRepository();
} else {
  fridgeItemRepository = new FridgeItemRepository(process.env.DATABASE_URL as string);
}


export async function createFridgeItemUseCase(data: InsertFridgeItem) {
    // This is a use case function
    // It can be used to implement the business logic

    const newFridgeItem = await fridgeItemRepository.addFridgeItem(data);

    // TODO: return the new fridge item but that requires changing the return type of the function

    return data;
}
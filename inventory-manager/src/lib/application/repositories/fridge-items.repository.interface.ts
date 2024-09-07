import { FridgeItem, InsertFridgeItem } from "@/lib/entities/models/fridge-item";

export interface IFridgeItemRepository {
  createFridgeItemTable(): Promise<void>;
  getFridgeItems(): Promise<FridgeItem[] | undefined>;
  addFridgeItem(fridgeItem: InsertFridgeItem): Promise<FridgeItem>;
  updateFridgeItem(fridgeItem: FridgeItem): Promise<void>;
  deleteFridgeItem(id: string): Promise<void>;
}

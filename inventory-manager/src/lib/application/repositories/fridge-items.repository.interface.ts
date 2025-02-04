import {
  FridgeItem,
  InsertFridgeItem,
} from "@/lib/entities/models/fridge-item";

export interface IFridgeItemRepository {
  createFridgeItemTable(): Promise<void>;
  getFridgeItems(): Promise<FridgeItem[] | undefined>;
  getFridgeItem(id: string): Promise<FridgeItem | undefined>;
  addFridgeItem(fridgeItem: InsertFridgeItem): Promise<FridgeItem | undefined>;
  updateFridgeItem(
    id: string,
    fridgeItem: InsertFridgeItem
  ): Promise<FridgeItem | undefined>;
  deleteFridgeItem(id: string): Promise<void>;
}

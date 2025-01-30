import {
  FridgeItem,
  InsertFridgeItem,
} from "../../entities/models/fridge-item";

export interface IFridgeItemRepository {
  createFridgeItemTable(): Promise<void>;
  getFridgeItems(): Promise<FridgeItem[] | undefined>;
  getFridgeItem(id: string): Promise<FridgeItem | undefined>;
  addFridgeItem(fridgeItem: InsertFridgeItem): Promise<boolean>;
  updateFridgeItem(
    id: string,
    fridgeItem: InsertFridgeItem
  ): Promise<FridgeItem | undefined>;
  deleteFridgeItem(id: string): Promise<void>;
}

export interface IFridgeItemRepository {
  createFridgeItemTable(): Promise<void>;
  getFridgeItems(): Promise<FridgeItem[] | undefined>;
  addFridgeItem(fridgeItem: FridgeItem): Promise<void>;
  updateFridgeItem(fridgeItem: FridgeItem): Promise<void>;
  deleteFridgeItem(id: string): Promise<void>;
}

export interface IFridgeItemRepository {
  getFridgeItems(): Promise<FridgeItem | undefined>;
  addFridgeItem(fridgeItem: FridgeItem): Promise<void>;
  deleteFridgeItem(id: string): Promise<void>;
}

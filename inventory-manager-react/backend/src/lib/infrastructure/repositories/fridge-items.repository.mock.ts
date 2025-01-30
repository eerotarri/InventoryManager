import { IFridgeItemRepository } from "../../..//lib/application/repositories/fridge-items.repository.interface";
import {
  FridgeItem,
  InsertFridgeItem,
} from "../../entities/models/fridge-item";

export class MockFridgeItemRepository implements IFridgeItemRepository {
  private fridgeItems: FridgeItem[] = [];

  // Static instance property to hold the singleton instance
  private static instance: MockFridgeItemRepository;

  // Private constructor to prevent direct instantiation
  private constructor() {}

  // Public static method to provide access to the singleton instance
  public static getInstance(): MockFridgeItemRepository {
    if (!MockFridgeItemRepository.instance) {
      MockFridgeItemRepository.instance = new MockFridgeItemRepository();
      MockFridgeItemRepository.instance.createFridgeItemTable(); // Initialize with mock data
    }
    return MockFridgeItemRepository.instance;
  }

  async createFridgeItemTable(): Promise<void> {
    // In a mock implementation, you don't need to actually create a tableß
    // but you can use this method to initialize any data if needed.
    this.fridgeItems = [
      {
        id: "1",
        name: "Milk",
        quantity: 1,
        suffix: "l",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "Eggs",
        quantity: 10,
        suffix: "kpl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]; // Initialize with an empty array or with mock data
  }

  async getFridgeItems(): Promise<FridgeItem[] | undefined> {
    return this.fridgeItems;
  }

  async getFridgeItem(id: string): Promise<FridgeItem | undefined> {
    return this.fridgeItems.find((item) => item.id === id);
  }

  async addFridgeItem(fridgeItem: InsertFridgeItem): Promise<boolean> {
    const newFridgeItem: FridgeItem = {
      id: (this.fridgeItems.length + 1).toString(),
      ...fridgeItem,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.fridgeItems.push(newFridgeItem);

    return true;
  }

  async updateFridgeItem(
    id: string,
    fridgeItem: InsertFridgeItem
  ): Promise<FridgeItem | undefined> {
    const index = this.fridgeItems.findIndex((item) => item.id === id);

    if (index !== -1) {
      this.fridgeItems[index] = {
        ...this.fridgeItems[index],
        ...fridgeItem,
        updatedAt: new Date(),
      };
    }

    return this.fridgeItems[index];
  }

  async deleteFridgeItem(id: string): Promise<void> {
    this.fridgeItems = this.fridgeItems.filter((item) => item.id !== id);
  }
}

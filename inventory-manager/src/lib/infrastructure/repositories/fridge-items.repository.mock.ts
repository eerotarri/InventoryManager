import { IFridgeItemRepository } from '@/lib/application/repositories/fridge-items.repository.interface';
import { FridgeItem } from '@/lib/entities/models/fridge-item';

export class MockFridgeItemRepository implements IFridgeItemRepository {
    private fridgeItems: FridgeItem[] = [];

    async createFridgeItemTable(): Promise<void> {
        // In a mock implementation, you don't need to actually create a tableß
        // but you can use this method to initialize any data if needed.
        this.fridgeItems = [
            {
                id: '1',
                name: 'Milk',
                quantity: 1,
                suffix: 'l',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: '2',
                name: 'Eggs',
                quantity: 10,
                suffix: 'kpl',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]; // Initialize with an empty array or with mock data
    }

    async getFridgeItems(): Promise<FridgeItem[] | undefined> {
        return this.fridgeItems;
    }

    async addFridgeItem(fridgeItem: FridgeItem): Promise<FridgeItem> {
        this.fridgeItems.push(fridgeItem);
        return fridgeItem;
    }

    async updateFridgeItem(updatedFridgeItem: FridgeItem): Promise<void> {
        const index = this.fridgeItems.findIndex(item => item.id === updatedFridgeItem.id);
        if (index !== -1) {
            this.fridgeItems[index] = updatedFridgeItem;
        }
    }

    async deleteFridgeItem(id: string): Promise<void> {
        this.fridgeItems = this.fridgeItems.filter(item => item.id !== id);
    }
}

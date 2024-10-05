import mysql from "mysql2/promise";
import { IFridgeItemRepository } from "@/lib/application/repositories/fridge-items.repository.interface";
import {
  FridgeItem,
  InsertFridgeItem,
} from "@/lib/entities/models/fridge-item";

export class FridgeItemRepository implements IFridgeItemRepository {
  private databaseUrl: string = process.env.DATABASE_URL as string;

  // Static instance property to hold the singleton instance
  private static instance: FridgeItemRepository;

  // Private constructor to prevent direct instantiation
  private constructor() {}

  // Public static method to provide access to the singleton instance
  public static getInstance(): FridgeItemRepository {
    if (!FridgeItemRepository.instance) {
      FridgeItemRepository.instance = new FridgeItemRepository();
      FridgeItemRepository.instance.createFridgeItemTable(); // Initialize with mock data
    }
    return FridgeItemRepository.instance;
  }

  private async getConnection() {
    return mysql.createConnection(this.databaseUrl);
  }

  async createFridgeItemTable(): Promise<void> {
    const connection = await this.getConnection();

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        quantity FLOAT NOT NULL,
        suffix ENUM('kpl', 'l', 'kg') NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `;

    try {
      await connection.query(createTableQuery);
      console.log('Table "items" created or already exists.');
    } catch (error) {
      console.error("Error creating table:", error);
    } finally {
      await connection.end();
    }
  }

  async getFridgeItems(): Promise<FridgeItem[] | undefined> {
    const connection = await this.getConnection();

    const getItemsQuery = `
      SELECT * FROM items;
    `;

    try {
      const [rows] = await connection.query(getItemsQuery);
      console.log("Items fetched successfully.");
      return rows as FridgeItem[];
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      await connection.end();
    }

    return undefined;
  }

  async addFridgeItem(
    fridgeItem: InsertFridgeItem
  ): Promise<FridgeItem | undefined> {
    const connection = await this.getConnection();

    const insertItemQuery = `
      INSERT INTO items (name, quantity, suffix)
      VALUES (?, ?, ?);
    `;

    try {
      const item = await connection.query(insertItemQuery, [
        fridgeItem.name,
        fridgeItem.quantity,
        fridgeItem.suffix,
      ]);
    } catch (error) {
      console.error("Error inserting item:", error);
    } finally {
      await connection.end();
    }
    return undefined;
  }

  async updateFridgeItem(fridgeItem: FridgeItem): Promise<void> {
    const connection = await this.getConnection();

    const updateItemQuery = `
      UPDATE items
      SET name = ?, quantity = ?, suffix = ?
      WHERE id = ?;
    `;

    try {
      await connection.query(updateItemQuery, [
        fridgeItem.name,
        fridgeItem.quantity,
        fridgeItem.suffix,
        fridgeItem.id,
      ]);
      console.log("Item updated successfully.");
    } catch (error) {
      console.error("Error updating item:", error);
    } finally {
      await connection.end();
    }
  }

  async deleteFridgeItem(id: string): Promise<void> {
    const connection = await this.getConnection();

    const deleteItemQuery = `
      DELETE FROM items WHERE id = ?;
    `;

    try {
      await connection.query(deleteItemQuery, [id]);
      console.log("Deleting item with ID:", id);
    } catch (error) {
      console.error("Error deleting item:", error);
    } finally {
      await connection.end();
    }
  }
}

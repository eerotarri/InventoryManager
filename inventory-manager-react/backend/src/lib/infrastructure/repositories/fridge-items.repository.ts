import mysql from "mysql2/promise";
import { ResultSetHeader } from "mysql2/promise";
import { IFridgeItemRepository } from "../../../lib/application/repositories/fridge-items.repository.interface";
import {
  FridgeItem,
  InsertFridgeItem,
} from "../../entities/models/fridge-item";
import { config } from "dotenv";

config();

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
      FridgeItemRepository.instance.createFridgeItemTable();
    }
    return FridgeItemRepository.instance;
  }

  private async getConnection() {
    const pool = mysql.createPool(this.databaseUrl);
    return pool.getConnection();
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
      connection.release();
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
      connection.release();
    }

    return undefined;
  }

  async getFridgeItem(id: string): Promise<FridgeItem | undefined> {
    const connection = await this.getConnection();

    const getItemQuery = `
      SELECT * FROM items WHERE id = ?;
    `;

    try {
      const [rows] = await connection.query(getItemQuery, [id]);
      console.log(`Item ${id} fetched successfully.`);
      return (rows as FridgeItem[])[0] as FridgeItem;
    } catch (error) {
      console.error("Error fetching item:", error);
    } finally {
      connection.release();
    }

    return undefined;
  }

  async addFridgeItem(fridgeItem: InsertFridgeItem): Promise<boolean> {
    const connection = await this.getConnection();

    const insertItemQuery = `
      INSERT INTO items (name, quantity, suffix)
      VALUES (?, ?, ?);
    `;

    try {
      const [data, _] = (await connection.query(insertItemQuery, [
        fridgeItem.name,
        fridgeItem.quantity,
        fridgeItem.suffix,
      ])) as [ResultSetHeader, unknown];

      return data.affectedRows > 0;
    } catch (error) {
      console.error("Error inserting item:", error);
    } finally {
      connection.release();
    }
    return false;
  }

  async updateFridgeItem(
    id: string,
    fridgeItem: InsertFridgeItem
  ): Promise<FridgeItem | undefined> {
    const connection = await this.getConnection();

    const updateItemQuery = `
      UPDATE items
      SET name = ?, quantity = ?, suffix = ?
      WHERE id = ?;
    `;

    console.log("Updating item with ID:", id);
    console.log("New item data:", fridgeItem);

    try {
      const result = await connection.query(updateItemQuery, [
        fridgeItem.name,
        fridgeItem.quantity,
        fridgeItem.suffix,
        id,
      ]);
      console.log("Item updated successfully.");
      return await this.getFridgeItem(id);
    } catch (error) {
      console.error("Error updating item:", error);
    } finally {
      connection.release();
      return undefined;
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
      connection.release();
    }
  }
}

import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { IFridgeItemRepository } from "@/lib/application/repositories/fridge-items.repository.interface";

dotenv.config();

export const fridgeItemRepository: IFridgeItemRepository = {
  createFridgeItemTable: async function (): Promise<void> {
    const connection = await mysql.createConnection(
      process.env.DATABASE_URL ?? ""
    );

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS items (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          quantity INT NOT NULL,
          suffix ENUM('kpl', 'l', 'kg') NOT NULL,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
      `;

    try {
      connection.query(createTableQuery);
      connection.end();
      console.log('Table "items" created or already exists.');
    } catch (error) {
      console.error("Error creating table:", error);
    } finally {
      connection.end();
    }
  },
  getFridgeItems: async function (): Promise<FridgeItem[] | undefined> {
    const connection = await mysql.createConnection(
      process.env.DATABASE_URL ?? ""
    );

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
      connection.end();
    }

    return undefined;
  },
  addFridgeItem: async function (fridgeItem: FridgeItem): Promise<void> {
    const connection = await mysql.createConnection(
      process.env.DATABASE_URL ?? ""
    );

    const insertItemQuery = `
            INSERT INTO items (name, quantity, suffix)
            VALUES (?, ?, ?);
        `;

    try {
      await connection.query(insertItemQuery, [
        fridgeItem.name,
        fridgeItem.quantity,
        fridgeItem.suffix,
      ]);
      console.log("Item inserted successfully.");
    } catch (error) {
      console.error("Error inserting item:", error);
    } finally {
      connection.end();
    }
  },
  updateFridgeItem: async function (fridgeItem: FridgeItem): Promise<void> {
    const connection = await mysql.createConnection(
      process.env.DATABASE_URL ?? ""
    );

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
      connection.end();
    }
  },
  deleteFridgeItem: async function (id: string): Promise<void> {
    const connection = await mysql.createConnection(
      process.env.DATABASE_URL ?? ""
    );

    const deleteItemQuery = `
            DELETE FROM items WHERE id = ?;
        `;

    try {
      await connection.query(deleteItemQuery, [id]);
      console.log("Deleting item with ID:", id);
    } catch (error) {
      console.error("Error deleting item:", error);
    } finally {
      connection.end();
    }
  },
};

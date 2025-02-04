import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";

// TODO: Move this to a config file
const BACKEND_URL = "192.168.0.8:8000"

export type ErrorMessage = {
  [key: string]: {
    _errors: string[];
  } | string[]; // Dictated by the zod error format
};

export async function getFridgeItemsAction() {
  const response = await fetch(`http://${BACKEND_URL}/api/fridge-items`);
  return response.json();
}

export async function createFridgeItemAction(newItem: InsertFridgeItem) {
  try {
    const response = await fetch(`http://${BACKEND_URL}/api/fridge-items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function updateFridgeItemAction({
  id,
  updateItem,
}: {
  id: string;
  updateItem: InsertFridgeItem;
}) {
  try {
    const response = await fetch(
      `http://${BACKEND_URL}/api/fridge-items/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateItem),
      }
    );

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deleteFridgeItemAction(id: string) {
  try {
    const response = await fetch(
      `http://${BACKEND_URL}/api/fridge-items/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";

export async function getFridgeItemsAction() {
  const response = await fetch("http://localhost:8000/api/fridge-items");
  return response.json();
}

export async function createFridgeItemAction(newItem: InsertFridgeItem) {
  try {
    const response = await fetch("http://localhost:8000/api/fridge-items", {
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
      `http://localhost:8000/api/fridge-items/${id}`,
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
      `http://localhost:8000/api/fridge-items/${id}`,
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

"use server";

import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";
import { insertFridgeItemSchema } from "@/lib/entities/models/fridge-item";

export async function createFridgeItemAction(formData: FormData) {

    try {
        // Construct and validate the new item
        const data = Object.fromEntries(formData.entries());
        const newItem = {
            name: formData.get("name") as string,
            quantity: parseFloat(formData.get("quantity") as string),
            suffix: formData.get("suffix") as InsertFridgeItem["suffix"],
        };

        // Call the controller instead of fetch although fetch works too
        const response = await fetch("/api/items", {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                "Content-Type": "application/json",
            },
        });

        // TODO: controller call here
        
    } catch (error) {
        console.error(error);
    }
};
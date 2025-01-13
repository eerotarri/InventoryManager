import express from "express";
import cors from "cors";
import { getFridgeItemsController } from "./lib/interface-adapters/controllers/fridge-items/get-fridge-items.controller";
import { deleteFridgeItemController } from "./lib/interface-adapters/controllers/fridge-items/delete-fridge-item.controller";
import { createFridgeItemController } from "./lib/interface-adapters/controllers/fridge-items/create-fridge-item.controller";
import { InsertFridgeItem } from "./lib/entities/models/fridge-item";

const app = express();
const port = 8000;

app.use(cors(), express.json());

app.get("/api/fridge-items", async (req, res) => {
  const fridgeItems = await getFridgeItemsController();
  res.status(200).send(fridgeItems);
});

app.post("/api/fridge-items", (req, res) => {
  const newItem: InsertFridgeItem = req.body;
  try {
    createFridgeItemController(newItem);
    res.status(200).send(`Item ${newItem.name} created`);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

app.delete("/api/fridge-items/:id", (req, res) => {
  const id = req.params.id;
  deleteFridgeItemController(id);
  res.status(200).send(`Item with id ${id} deleted`);
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});

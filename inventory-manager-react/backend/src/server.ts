import express from "express";
import cors from "cors";
import { getFridgeItemsController } from "./lib/interface-adapters/controllers/fridge-items/get-fridge-items.controller";
import { getFridgeItemController } from "./lib/interface-adapters/controllers/fridge-items/get-fridge-item.controller";
import { deleteFridgeItemController } from "./lib/interface-adapters/controllers/fridge-items/delete-fridge-item.controller";
import { createFridgeItemsController } from "./lib/interface-adapters/controllers/fridge-items/create-fridge-item.controller";
import { updateFridgeItemController } from "./lib/interface-adapters/controllers/fridge-items/update-fridge-item.controller";
import { InsertFridgeItem } from "./lib/entities/models/fridge-item";
import { InputParseError } from "./lib/entities/errors/common";

const app = express();
const port = 8000;

app.use(cors(), express.json());

app.get("/api/fridge-items", async (req, res) => {
  const fridgeItems = await getFridgeItemsController();
  res.status(200).send(fridgeItems);
});

app.post("/api/fridge-items", async (req, res) => {
  const newItem: InsertFridgeItem = req.body;
  try {
    await createFridgeItemsController(newItem);
    res.status(200).send({message: `Item ${newItem.name} created`});
  } catch (error) {
    console.error(error);
    if (error instanceof InputParseError)
      res.status(400).send({ error: error.message });
    else
      res.status(500).send({ error: "An error occurred" });
  }
});

app.get("/api/fridge-items/:id", async (req, res) => {
  const id = req.params.id;
  const fridgeItems = await getFridgeItemController(id);
  res.status(200).send(fridgeItems);
});

app.put("/api/fridge-items/:id", async (req, res) => {
  const id = req.params.id;
  const newItem: InsertFridgeItem = req.body;
  try {
    await updateFridgeItemController(id, newItem);
    res.status(200).send(`Item with id ${id} updated`);
  } catch (error) {
    console.error(error);
    if (error instanceof InputParseError)
      res.status(400).send({ error: error.message });
    else
      res.status(500).send({ error: "An error occurred" });
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

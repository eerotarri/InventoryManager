import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors({ origin: "http://frontend:3002" }));

app.get("/api/fridge-items", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});

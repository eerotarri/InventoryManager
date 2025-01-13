import "./App.css";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import Form from "./components/form";
import { useQuery } from "@tanstack/react-query";
import { FridgeItem } from "./lib/entities/models/fridge-item";

// Create a client

function App() {
  const { data: items } = useQuery<FridgeItem[]>({
    queryKey: ["fridgeItems"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/fridge-items");
      return response.json();
    },
    placeholderData: [
      {
        id: "1",
        name: "Milk",
        quantity: 1,
        suffix: "l",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "Eggs",
        quantity: 6,
        suffix: "kpl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  });

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center px-3 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form />
        <DataTable columns={columns} data={items ?? []} />
      </div>
    </div>
  );
}

export default App;

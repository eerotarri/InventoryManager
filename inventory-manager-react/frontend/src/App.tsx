import "./App.css";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import Form from "./components/form";
import { useQuery, QueryClient, useQueryClient } from "@tanstack/react-query";

// Create a client

function App() {
  const { data: items } = useQuery({
    queryKey: ["fridgeItems"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/fridge-items");
      return response.json();
    },
    placeholderData: [],
  });

  return (
    <>
      <Form />
      <DataTable columns={columns} data={items} />
    </>
  );
}

export default App;

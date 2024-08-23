"use client";

// import { ArticleForm } from "@/components/ui/article-form";
import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

// const testItems = [
//   {
//     id: "1",
//     name: "Apple",
//     quantity: 0,
//     suffix: "kpl",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: "2",
//     name: "Banana",
//     quantity: 1,
//     suffix: "kpl",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: "3",
//     name: "Orange",
//     quantity: 8,
//     suffix: "kpl",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: "4",
//     name: "Grapes",
//     quantity: 5,
//     suffix: "kpl",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
// ];

export default function Home() {
  const [items, setItems] = useState<FridgeItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/items");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); // Handle the data as needed

        setItems(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchData();
  }, []);

  function handleSubmit(e: FormData) {
    const newItem = {
      id: (items.length + 1).toString(),
      name: e.get("name") as string,
      quantity: parseFloat(e.get("quantity") as string),
      suffix: e.get("unit") as "l" | "kpl" | "kg",
      createdAt: new Date(),
      updatedAt: new Date(), // Kind of a hack, but it works for now
    };

    const response = fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    setItems([...items, newItem]);
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen py-3 px-3 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form action={handleSubmit} className="[&>*]:mt-2">
          <Input name="name" placeholder="Artikkelin nimi" />
          <div className="flex">
            <Input name="quantity" placeholder="Määrä" />
            <Select name="unit">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Yksikkö" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kpl">Kappale</SelectItem>
                <SelectItem value="kg">Kilogramma</SelectItem>
                <SelectItem value="l">Litra</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Lisää</Button>
        </form>

        {items.length > 0 ? (
          <DataTable columns={columns} data={items} />
        ) : (
          <p>Mitään ei löytynyt :&#40;</p>
        )}
      </main>
    </div>
  );
}

"use client";

// import { ArticleForm } from "@/components/ui/article-form";
import { Button } from "@/components/ui/button";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { FridgeItem } from "@/lib/entities/models/fridge-item";
import { createFridgeItemAction } from "./actions";


export default function Home() {
  const [items, setItems] = useState<FridgeItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/items");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = (await response.json()) as FridgeItem[];

        setItems(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
    console.log(process.env.NODE_ENV);
    fetchData();
  }, []);


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center py-3 px-3 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form action={createFridgeItemAction} className="[&>*]:mt-2">
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

        <DataTable columns={columns} data={items} />
      </main>
    </div>
  );
}

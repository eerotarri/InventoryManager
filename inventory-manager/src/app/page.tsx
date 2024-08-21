"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArticleForm } from "@/components/ui/article-form";
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
import { useState } from "react";

const sampleItems: FridgeItem[] = [
  {
    id: "1",
    name: "Maito",
    quantity: 2,
    suffix: "l",
    expirationDate: new Date("2024-08-25"),
  },
  { id: "2", name: "Kananmuna", quantity: 12, suffix: "kpl" },
  {
    id: "3",
    name: "Juusto",
    quantity: 1,
    suffix: "kpl",
    expirationDate: new Date("2024-09-01"),
  },
];

export default function Home() {
  const [items, setItems] = useState<FridgeItem[]>(sampleItems);

  function handleSubmit(e: FormData) {
    setItems([
      ...items,
      {
        id: (items.length + 1).toString(),
        name: e.get("name") as string,
        quantity: parseFloat(e.get("quantity") as string),
        suffix: e.get("unit") as string,
      },
    ]);
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

        <DataTable columns={columns} data={items} />
      </main>
    </div>
  );
}

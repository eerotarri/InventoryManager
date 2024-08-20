"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "./button";

export function ArticleForm() {
  function handleSubmit(e: FormData) {
    console.log(e.get("name"), e.get("quantity"), e.get("unit"));
  }

  return (
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
  );
}

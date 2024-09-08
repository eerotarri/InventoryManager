"use client";

import { Input } from "@/components/ui/input";
import { createFridgeItemAction } from "../actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Form() {
  return (
    <form action={createFridgeItemAction} className="[&>*]:mt-2">
      <Input name="name" placeholder="Artikkelin nimi" />
      <div className="flex">
        <Input name="quantity" placeholder="Määrä" />
        <Select name="suffix">
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

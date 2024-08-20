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
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Lisää artikkeli</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Täytä alla oleva lomake</DialogTitle>
              <DialogDescription>
                <ArticleForm />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <DataTable columns={columns} data={sampleItems} />
      </main>
    </div>
  );
}

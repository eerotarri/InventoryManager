import { FormSubmitButton } from "./form-submit-button";
import { FormInput } from "./form-input";
import FormSelect from "./form-select";
import { useMutation, useQueryClient } from "@tanstack/react-query"; // This import is not used in this file. It can be removed.
import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";
import { createFridgeItemAction } from "@/actions";

export default function Form() {
  const queryClient = useQueryClient(); // This line is not used in this file. It can be removed.

  // Refactor to use React Query's useMutation hook
  const mutate = useMutation({
    mutationFn: async (newItem: InsertFridgeItem) =>
      createFridgeItemAction(newItem),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["fridgeItems"] });
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const newItem: InsertFridgeItem = {
      name: formData.get("name") as string,
      quantity: parseFloat(formData.get("quantity") as string),
      suffix: formData.get("suffix") as InsertFridgeItem["suffix"],
    };

    console.log("newItem:", newItem); // Debugging to ensure it has the expected data

    mutate.mutate(newItem);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="z-0 space-y-4 p-4 bg-primary shadow-md rounded-md w-full"
      >
        <FormInput name="name" placeholder="Artikkelin nimi" />
        <FormInput name="quantity" placeholder="Määrä" />
        <FormSelect name="suffix" defaultValue="kpl" />
        <FormSubmitButton
          type="submit"
          className="w-full p-2 text-white rounded-md"
        />
      </form>
    </>
  );
}

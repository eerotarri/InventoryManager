import { FormSubmitButton } from "./form-submit-button";
import { FormInput } from "./form-input";
import FormSelect from "./form-select";
import { useMutation, useQueryClient } from "@tanstack/react-query"; // This import is not used in this file. It can be removed.
import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";
import { createFridgeItemAction, ErrorMessage } from "@/actions";
import { useState } from "react";

export default function Form() {
  const queryClient = useQueryClient(); // This line is not used in this file. It can be removed.

  const [error, setError] = useState<ErrorMessage | undefined>(); // This line is not used in this file. It can be removed.

  // Refactor to use React Query's useMutation hook
  const mutate = useMutation({
    mutationFn: async (newItem: InsertFridgeItem) =>
      createFridgeItemAction(newItem),
    onSettled: (data) => {
      queryClient.invalidateQueries({ queryKey: ["fridgeItems"] });
      if (data.error) {
        setError(JSON.parse(data.error));
        return;
      }

      setError(undefined);
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

    mutate.mutate(newItem);
  };

 return (
    <>
      <form
        onSubmit={handleSubmit}
        className="z-0 space-y-4 p-4 bg-primary shadow-md rounded-md w-full"
      >
        <FormInput name="name" placeholder="Artikkelin nimi" error={error?.name as ErrorMessage}/>
        <FormInput name="quantity" placeholder="Määrä" error={error?.quantity as ErrorMessage} />
        <FormSelect name="suffix" defaultValue="kpl" />
        <FormSubmitButton
          type="submit"
          className="w-full p-2 text-white rounded-md"
        />
      </form>
    </>
  );
}

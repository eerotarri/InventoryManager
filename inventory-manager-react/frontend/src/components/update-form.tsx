// import { updateFridgeItemAction } from "../actions";
// import { useActionState } from "react";
import { FormSubmitButton } from "./form-submit-button";
import { FormInput } from "./form-input";
import FormSelect from "./form-select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  FridgeItem,
  InsertFridgeItem,
} from "@/lib/entities/models/fridge-item";
import { useNavigate } from "react-router-dom";
import { updateFridgeItemAction } from "../actions";

export default function UpdateForm({
  initialData,
}: {
  initialData: FridgeItem;
}) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Refactor to use React Query's useMutation hook
  const mutate = useMutation({
    mutationFn: async ({
      id,
      updateItem,
    }: {
      id: string;
      updateItem: InsertFridgeItem;
    }) => {
      console.log("updating item", id, updateItem);
      const response = await updateFridgeItemAction({
        id,
        updateItem,
      });
      return response;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["fridgeItems"] });
      navigate("/");
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

    mutate.mutate({ id: initialData.id, updateItem: newItem });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="z-0 space-y-4 p-4 bg-primary shadow-md rounded-md w-full"
      >
        <FormInput
          name="name"
          placeholder="Artikkelin nimi"
          defaultValue={initialData.name}
        />
        <FormInput
          name="quantity"
          placeholder="Määrä"
          defaultValue={initialData.quantity.toString()}
        />
        <FormSelect name="suffix" defaultValue={initialData.suffix || "kpl"} />
        <FormSubmitButton
          type="submit"
          className="w-full p-2 text-white rounded-md"
        />
      </form>
    </>
  );
}

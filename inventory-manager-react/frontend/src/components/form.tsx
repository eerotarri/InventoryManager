import { FormSubmitButton } from "./form-submit-button";
import { FormInput } from "./form-input";
import FormSelect from "./form-select";

export default function Form() {
  // const [formState, formAction] = useActionState(createFridgeItemAction, {
  //   message: "",
  //   errors: undefined,
  //   fieldValues: {
  //     name: "",
  //     quantity: "",
  //     suffix: "",
  //   },
  // });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const newItem = {
      name: formData.get("name") as string,
      quantity: parseFloat(formData.get("quantity") as string),
      suffix: formData.get("suffix") as string,
    };

    console.log(newItem);
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

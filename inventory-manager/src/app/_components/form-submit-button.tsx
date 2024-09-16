import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export function FormSubmitButton({ ...props }) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} {...props}>
      {pending ? "Lisätään..." : "Lisää"}
    </Button>
  );
}

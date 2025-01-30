import { FridgeItem } from "@/lib/entities/models/fridge-item";
import UpdateForm from "../components/update-form";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// This is a mock function. Replace it with your actual data fetching logic.
function getFridgeItem(id: string | undefined): FridgeItem | null {
  if (!id) {
    return null;
  }

  const result = useQuery({
    queryKey: ["fridge-item", id],
    queryFn: () =>
      fetch(`http://192.168.0.8:8000/api/fridge-items/${id}`).then((res) =>
        res.json()
      ),
  });

  return result.data as FridgeItem;
}

export default function ProductPage() {
  let { id } = useParams<{ id: string }>();
  const fridgeItem = getFridgeItem(id);

  if (!fridgeItem) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <UpdateForm initialData={fridgeItem} />
    </div>
  );
}

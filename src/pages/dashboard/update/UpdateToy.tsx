import { useParams } from "react-router-dom";
import ToyForm from "../ToyForm";
import useToyBySlug from "@/data/useToyBySlug";
import { Loader2 } from "lucide-react";

const UpdateToy = () => {
  const params = useParams();

  const { data: toy, isLoading, isError } = useToyBySlug(params.slug);

  if (isError) {
    return (
      <p className="my-10 text-center text-destructive">
        Something went wrong, Toy Not Found
      </p>
    );
  }

  if (isLoading) {
    return (
      <Loader2 className="mx-auto mt-10 min-h-[calc(100vh-200px)] animate-spin" />
    );
  }

  if (!toy) {
    return <p className="my-10 text-center text-destructive">Toy Not Found</p>;
  }

  return <ToyForm toy={toy} />;
};

export default UpdateToy;

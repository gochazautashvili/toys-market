import Card from "@/components/Card";
import useStuffedAnimals from "@/data/useStuffedAnimals";
import { Loader2 } from "lucide-react";

const StuffedAnimals = () => {
  const { data: toys, isError, isLoading } = useStuffedAnimals();

  if (isLoading) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (isError) {
    return (
      <p className="text-center text-destructive">
        Something went wrong! try again.
      </p>
    );
  }

  if (toys && toys?.length < 1) {
    return <p className="text-center">Toys not found.</p>;
  }

  return (
    <section className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      {toys?.map((toy) => {
        return <Card key={toy.id} toy={toy} />;
      })}
    </section>
  );
};

export default StuffedAnimals;

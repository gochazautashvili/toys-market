import Card from "@/components/Card";
import useToys from "@/data/useToys";
import { Loader2 } from "lucide-react";

const Toys = () => {
  const { data: toys, isError, isLoading } = useToys();

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
    <section className="my-16 grid grid-cols-2 gap-5 lg:my-[120px] lg:grid-cols-4">
      {toys?.map((toy) => {
        return <Card key={toy.id} toy={toy} />;
      })}
    </section>
  );
};

export default Toys;

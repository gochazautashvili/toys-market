import Card from "@/components/Card";
import useStuffedAnimals from "@/data/useStuffedAnimals";
import { ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const StuffedAnimals = () => {
  const { data: toys, isError, isLoading } = useStuffedAnimals();

  return (
    <section className="container">
      <div className="flex items-center justify-between">
        <h1 className="font-Round text-2xl font-semibold">Wooden Toys</h1>
        <Link
          to="/catalog"
          className="flex items-center gap-2 font-semibold underline hover:text-primary"
        >
          See All Toys <ArrowRight className="size-5" />
        </Link>
      </div>
      <div className="relative mb-10 mt-8 h-[2px] w-full bg-gray-400">
        <span className="absolute h-full w-[170px] bg-primary"></span>
      </div>
      {isError && (
        <p className="text-center text-red-500">Something went wrong!</p>
      )}
      {isLoading && <Loader2 className="mx-auto animate-spin" />}
      {toys && toys.length < 1 && <p>Toys not found</p>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-7 lg:grid-cols-4">
        {toys?.slice(4).map((toy) => {
          return <Card key={toy.id} toy={toy} />;
        })}
      </div>
    </section>
  );
};

export default StuffedAnimals;

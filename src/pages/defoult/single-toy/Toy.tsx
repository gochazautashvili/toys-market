import LoadingButton from "@/components/LoadingButton";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import useToyBySlug from "@/data/useToyBySlug";
import useUser from "@/data/useUser";
import API from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const addToCart = async (toyId: string) => {
  const res = await API.post<number>("/carts", { toyId });

  return res.data;
};

const Toy = () => {
  const [quantity, setQuantity] = useState("1");
  const { user } = useUser();
  const { toast } = useToast();
  const params = useParams();
  const queryClient = useQueryClient();
  const { data: toy, isLoading, isError } = useToyBySlug(params.slug);

  const { mutate, isPending } = useMutation({
    mutationFn: addToCart,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["cart-count", user?.id] });
    },
    onError: () => {
      if (!user) {
        toast({
          variant: "destructive",
          description: "Unauthorized!",
        });
      }
    },
  });

  if (isError) {
    return (
      <p className="my-10 text-center text-destructive">
        Something went wrong, Toy Not Found
      </p>
    );
  }

  if (isLoading) {
    return <Loader2 className="mx-auto mt-10 animate-spin" />;
  }

  if (!toy) {
    return <p className="my-10 text-center text-destructive">Toy Not Found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-between rounded-[16px] bg-white p-8 shadow lg:flex-row-reverse">
      <img
        className="h-auto w-[70%] object-cover lg:w-1/2"
        src={toy.image}
        alt="single page toy"
        loading="eager"
      />
      <div className="w-full pr-10 lg:w-1/2">
        <h1 className="text-3xl font-medium">{toy.name}</h1>
        <p className="mb-7 mt-5 text-sm text-[#999]">{toy.description}</p>
        <p className="font-Round text-3xl text-primary">$ {toy.price}</p>
        <div className="mt-8 flex h-12 items-center gap-4">
          <Input
            className="h-full max-w-[100px] rounded-[16px]"
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            disabled={isPending}
          />
          <LoadingButton
            loading={isPending}
            className="h-full"
            onClick={() => mutate(toy.id)}
          >
            Add to Cart
          </LoadingButton>
        </div>
      </div>
    </div>
  );
};

export default Toy;

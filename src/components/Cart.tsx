import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, X } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import API from "@/lib/api";
import { CartType } from "@/types";
import CartCard from "./CartCard";
import LoadingButton from "./LoadingButton";
import useUser from "@/data/useUser";

export interface Props {
  open: boolean;
  handleOpenCart: () => void;
}

const payment = async () => {
  const res = await API.post("/carts/payment");

  return res.data;
};

const Cart: React.FC<Props> = ({ open, handleOpenCart }) => {
  const { user } = useUser();

  if (!user) {
    return;
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ["user-cart", user.id],
    queryFn: () => API.get<CartType[]>("/carts").then((res) => res.data),
    retry: 0,
  });

  const { data: subtitle } = useQuery({
    queryKey: ["cart-subtitle", user.id],
    queryFn: () => API.get("/carts/subtitle").then((res) => res.data),
    initialData: 0,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: payment,
    onSuccess: (url) => {
      window.location.href = url;
    },
  });

  return (
    <Dialog open={open && !!user} onOpenChange={handleOpenCart}>
      <DialogContent className="w-[95%] gap-0 rounded-2xl p-0 outline-none">
        <DialogHeader className="sticky top-0 border-b border-gray-500 p-5 backdrop-blur-md">
          <DialogTitle className="flex items-center justify-between font-Round text-2xl">
            Your Cart <X className="cursor-pointer" onClick={handleOpenCart} />
          </DialogTitle>
          <DialogDescription className="hidden" />
        </DialogHeader>
        <div className="flex max-h-[300px] flex-col gap-5 overflow-y-auto p-5 pb-5">
          {isError && (
            <p className="text-center text-destructive">
              Something went wrong!
            </p>
          )}
          {isLoading && <Loader2 className="m-auto animate-spin" />}
          {data && data.length < 1 && (
            <p className="py-24 text-center text-sm text-[#111]">
              No items found.
            </p>
          )}
          {data &&
            data.map((cart) => {
              return <CartCard key={cart.id} cart={cart} />;
            })}
        </div>
        <div className="border-t border-black p-5">
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p className="font-semibold">$ {subtitle} USD</p>
          </div>
          <LoadingButton
            disabled={(data && data?.length < 1) || !data}
            loading={isPending}
            onClick={() => mutate()}
            className="mt-5 w-full"
          >
            Continue to Checkout
          </LoadingButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;

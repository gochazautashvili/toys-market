import { CartType, ToyDataType } from "@/types";
import LoadingButton from "./LoadingButton";
import API from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import useUser from "@/data/useUser";

const delete_toy_from_cart = async (cartId: string) => {
  const res = await API.delete(`/carts/remove/${cartId}`);

  return res.data;
};

const handleUpdateCart = async ({
  cartId,
  quantity,
}: {
  cartId: string;
  quantity: number;
}) => {
  const res = await API.patch(`/carts/update/${cartId}`, { quantity });

  return res.data;
};

const CartCard = ({ cart }: { cart: CartType }) => {
  const [quantity, setQuantity] = useState(cart.quantity);
  const queryClient = useQueryClient();

  const { user } = useUser();

  if (!user) {
    return;
  }

  const { mutate, isPending } = useMutation({
    mutationFn: delete_toy_from_cart,
    onSuccess: async (newData) => {
      queryClient.cancelQueries({ queryKey: ["cart-subtitle", user.id] });
      queryClient.cancelQueries({ queryKey: ["cart-count", user.id] });
      queryClient.cancelQueries({ queryKey: ["user-cart", user.id] });

      queryClient.setQueryData<number>(["cart-count", user.id], (oldData) => {
        if (!oldData) return 0;

        return oldData - 1;
      });

      queryClient.setQueryData<ToyDataType[]>(
        ["user-cart", user.id],
        (oldData) => {
          if (!oldData) return;

          return oldData.filter((cart) => cart.id !== newData.cart.id);
        },
      );

      queryClient.setQueryData<number>(["cart-subtitle", user.id], () => {
        return newData.subtitle;
      });
    },
  });

  const mutation = useMutation({
    mutationFn: handleUpdateCart,
    onSuccess: (newData) => {
      queryClient.cancelQueries({ queryKey: ["cart-subtitle", user.id] });

      queryClient.setQueryData<number>(["cart-subtitle", user.id], () => {
        return newData;
      });
    },
  });

  const onChange = (quantity: number) => {
    if (quantity < 1 || isNaN(quantity)) return;

    setQuantity(quantity);

    setTimeout(() => {
      mutation.mutate({
        cartId: cart.id,
        quantity,
      });
    }, 500);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between",
        isPending && "opacity-70",
      )}
      key={cart.id}
    >
      <div className="flex items-center gap-3">
        <img
          width={60}
          height={60}
          loading="eager"
          className="object-cover"
          src={cart.toy.image}
          alt={cart.toy.name}
        />
        <div className="flex flex-col gap-0">
          <p className="text-sm font-semibold">{cart.toy.name}</p>
          <p>$ {cart.toy.price}</p>
          <LoadingButton
            variant="link"
            loading={isPending}
            onClick={() => mutate(cart.id)}
            className="h-fit w-fit cursor-pointer p-0 text-xs text-[#fb416b] underline"
          >
            Remove
          </LoadingButton>
        </div>
      </div>
      <Input
        disabled={isPending || mutation.isPending}
        onChange={(e) => onChange(e.target.valueAsNumber)}
        value={quantity}
        min={1}
        type="number"
        className="h-12 max-w-20 rounded-[16px]"
      />
    </div>
  );
};

export default CartCard;

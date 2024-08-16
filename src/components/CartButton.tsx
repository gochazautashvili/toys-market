import useUser from "@/data/useUser";
import API from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart } from "lucide-react";

interface Props {
  handleOpenCart: () => void;
}

const CartButton = ({ handleOpenCart }: Props) => {
  const { user } = useUser();

  const { data: cartCount } = useQuery({
    queryKey: ["cart-count", user?.id],
    queryFn: () => API.get<number>("/carts/count").then((res) => res.data),
    initialData: 0,
  });

  return (
    <div
      onClick={handleOpenCart}
      className="flex cursor-pointer items-center gap-2"
    >
      <span>Cart</span>
      <ShoppingCart />
      <span className="flex size-5 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
        {cartCount}
      </span>
    </div>
  );
};

export default CartButton;

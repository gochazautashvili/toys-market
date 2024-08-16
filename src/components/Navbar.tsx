import { Link } from "react-router-dom";
import { Loader2, Menu } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { cn } from "@/lib/utils";
import Navigation from "./Navigation";
import useUser from "@/data/useUser";
import SignIn from "./SignIn";
import CartButton from "./CartButton";
const Cart = lazy(() => import("./Cart"));

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const { user } = useUser();

  const handleOpenCart = () => {
    setCart(!cart);
  };

  const onClose = () => {
    setMenu(false);
  };

  return (
    <>
      <header className="relative z-50 flex h-20 w-full items-center justify-center bg-white">
        <nav className="container flex h-full items-center justify-between">
          <div className="flex items-center gap-14">
            <Link onClick={onClose} className="font-Round text-2xl" to="/">
              ToyStore
            </Link>
            <Navigation className="hidden items-center gap-8 lg:flex" />
          </div>
          <div className="flex h-full items-center gap-5">
            {user ? <CartButton handleOpenCart={handleOpenCart} /> : <SignIn />}
            <Menu
              onClick={() => setMenu(!menu)}
              className="size-12 h-full cursor-pointer border-l border-gray-300 pl-5 lg:hidden"
            />
          </div>
        </nav>
      </header>
      <Navigation
        onClose={onClose}
        className={cn(
          "absolute left-0 right-0 z-40 flex flex-col bg-white transition-all duration-700 lg:hidden",
          menu ? "top-20" : "-top-full",
        )}
      />
      {cart && (
        <Suspense fallback={<CartLoading />}>
          <Cart open={cart} handleOpenCart={handleOpenCart} />
        </Suspense>
      )}
    </>
  );
};

export default Navbar;

const CartLoading = () => {
  return (
    <div className="absolute inset-0 z-[999] flex h-screen w-full items-center justify-center bg-black/50">
      <div className="flex h-[300px] w-[95%] max-w-[500px] animate-pulse items-center justify-center rounded-lg bg-gray-300">
        <Loader2 className="animate-spin" />
      </div>
    </div>
  );
};

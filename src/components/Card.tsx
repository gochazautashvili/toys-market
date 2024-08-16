import PopupOnScroll from "@/animations/PopupOnScroll";
import { ToyDataType } from "@/types";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";
const CardAdminButtons = lazy(() => import("./CardAdminButtons"));

const Card = ({ toy }: { toy: ToyDataType }) => {
  return (
    <PopupOnScroll className="flex-1 basis-[180px] cursor-pointer rounded-[16px] bg-white shadow transition-shadow hover:shadow-2xl">
      <Suspense fallback={<Loader2 className="animate-spin" />}>
        <CardAdminButtons toyId={toy.id} toySlug={toy.slug} />
      </Suspense>
      <Link
        target="_top"
        className="flex h-full w-full flex-col items-center p-6 pb-8"
        to={`/single-toy/${toy.slug}`}
      >
        <img
          src={toy.image}
          alt={toy.name}
          width={400}
          height={400}
          className="h-auto w-full p-6"
        />
        <p className="my-3 text-center">{toy.name}</p>
        <span className="rounded-[16px] bg-primary px-3 py-[2px] text-center text-white">
          $ {toy.price} USD
        </span>
      </Link>
    </PopupOnScroll>
  );
};

export default Card;

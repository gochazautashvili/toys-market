import { Button } from "@/components/ui/button";
import Bear from "@/assets/bear.png";
import Flower from "@/assets/flower.png";
import { Link } from "react-router-dom";
import PopupOnScroll from "@/animations/PopupOnScroll";

const Category = () => {
  return (
    <section className="container my-[60px] flex flex-col items-center justify-between gap-10 lg:my-[120px] lg:flex-row">
      <PopupOnScroll className="flex w-full flex-1 flex-col items-center rounded-[16px] bg-[#ffc12c] p-5 md:max-h-[188px] md:w-auto md:flex-row">
        <img
          src={Bear}
          alt="category image bear"
          width={220}
          height={220}
          className="ml-3 size-[220px] -translate-y-10"
        />
        <div className="ml-5 flex flex-col items-center md:block">
          <h1 className="mb-4 font-Round text-3xl text-white">
            Stuffed Animals
          </h1>
          <Button
            asChild
            className="bg-white text-black transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-xl"
          >
            <Link to="/catalog">Shop Now</Link>
          </Button>
        </div>
      </PopupOnScroll>
      <PopupOnScroll className="mt-5 flex w-full flex-1 flex-col-reverse items-center rounded-[16px] bg-[#fb416b] p-5 px-5 md:max-h-[188px] md:w-auto md:flex-row lg:m-0">
        <div className="flex flex-col items-center md:mr-12 md:items-end lg:mr-5">
          <h1 className="mb-4 font-Round text-3xl text-white">Wooden Toys</h1>
          <Button
            asChild
            className="bg-white text-black transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-xl"
          >
            <Link to="/catalog">Shop Now</Link>
          </Button>
        </div>
        <img
          src={Flower}
          alt="category image flower"
          width={220}
          height={220}
          className="mr-3 size-[220px] -translate-y-10"
        />
      </PopupOnScroll>
    </section>
  );
};

export default Category;

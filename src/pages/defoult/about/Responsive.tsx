import PopupOnScroll from "@/animations/PopupOnScroll";
import Responsive_image from "@/assets/responsive.jpeg";
import { Link } from "react-router-dom";

const Responsive = () => {
  return (
    <section className="container mb-[60px] lg:mb-[120px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        <PopupOnScroll className="lg:flex-1">
          <img
            className="mx-auto h-auto w-[85%] rounded-[16px] lg:w-full"
            src={Responsive_image}
            alt="responsive"
          />
        </PopupOnScroll>
        <div className="flex flex-col items-center text-center lg:max-w-[450px] lg:flex-1 lg:items-start lg:text-start">
          <h1 className="text-3xl">100% Responsive</h1>
          <hr className="my-6 h-[2px] w-[130px] bg-primary" />
          <p className="mb-7 text-sm text-[#999]">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy
          </p>
          <Link to="/catalog" className="text-sm font-semibold underline">
            Explore Out Toys
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Responsive;

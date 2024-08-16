import Kids from "@/assets/kids.jpeg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import PopupOnScroll from "@/animations/PopupOnScroll";

const Webflow = () => {
  return (
    <section id="Webflow" className="container my-16">
      <div className="mb-14">
        <p className="mb-4 text-center font-semibold text-primary">
          Made for Webflow
        </p>
        <h1 className="text-center font-Round text-3xl">
          Simple & Colorful Ecommerce <br /> Template for Your Business
        </h1>
      </div>
      <div className="mb-10 flex flex-col items-center rounded-[16px] object-cover lg:flex-row-reverse">
        <PopupOnScroll className="lg:flex-1">
          <img
            className="h-auto w-[85%] rounded-[16px] mx-auto lg:w-full"
            src={Kids}
            alt="webflow kids image"
            width={700}
            height={500}
          />
        </PopupOnScroll>
        <div className="mt-10 flex flex-col items-center lg:items-start lg:flex-1 lg:pr-20">
          <h1 className="font-Round text-3xl">
            Available for FREE!
          </h1>
          <hr className="my-6 h-[2px] w-[100px] rounded bg-primary" />
          <p className="text-center text-[#999] lg:text-start">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy
          </p>
          <Button className="mt-7 h-12 w-[140px]" asChild>
            <Link to="/catalog">GET IT NOW!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Webflow;

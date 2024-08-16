import Popup from "@/animations/Popup";
import HeroImage from "@/assets/hero_image.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex h-auto items-center justify-center px-5 py-28 md:h-[80vh]">
      <img
        src={HeroImage}
        alt="hero-image"
        loading="eager"
        className="absolute left-0 right-0 top-0 -z-10 h-full w-full object-cover"
      />
      <Popup className="flex w-full max-w-[570px] flex-col items-center rounded-[16px] bg-white p-7 sm:px-12 sm:py-14">
        <p className="font-semibold text-primary">Say Hello to ToyStore!</p>
        <h1 className="mb-5 mt-4 text-center font-Round text-2xl sm:text-4xl">
          Free Ecommerce <br /> Template for Webflow
        </h1>
        <Button
          className="h-12 w-[150px] font-semibold shadow-primary transition-shadow hover:shadow-lg"
          asChild
        >
          <Link to="/catalog">Open Catalog</Link>
        </Button>
      </Popup>
    </section>
  );
};

export default Hero;

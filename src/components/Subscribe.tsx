import { FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Send from "@/assets/send.svg";

const Subscribe = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    alert("Successfully subscribed :)");
  };

  return (
    <section className="lg:container">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-[80%] flex-col items-center gap-6 rounded-[16px] bg-white p-8 shadow-sm sm:p-16 md:w-[60%] lg:w-full lg:flex-row lg:p-12"
      >
        <Button
          type="button"
          className="size-16 shrink-0 cursor-default rounded-full bg-primary"
          size="icon"
        >
          <img src={Send} alt="send icon" width={32} height={32} />
        </Button>
        <h1 className="text-center font-Round text-xl lg:text-nowrap lg:text-start lg:text-2xl">
          Subscribe to our newsletter <br /> & get
          <span className="text-primary">10% discount!</span>
        </h1>
        <Input
          className="h-12 w-full rounded-[16px]"
          placeholder="Enter your email address"
        />
        <Button className="h-12 w-full lg:w-auto">Subscribe</Button>
      </form>
    </section>
  );
};

export default Subscribe;

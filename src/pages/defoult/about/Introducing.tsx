import SupperHeros from "@/assets/supperheros.jpeg";

const Introducing = () => {
  return (
    <section className="container mb-[60px] lg:mb-[120px]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 font-semibold text-primary">
            All You Need is Fun!
          </p>
          <h1 className="mb-5 text-3xl">Introducing ToyStore</h1>
          <p className="mb-7 max-w-[600px] text-sm text-[#999]">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
          </p>
          <a href="#Webflow" className="underline hover:text-primary">
            More About Us
          </a>
        </div>
        <img
          className="h-auto w-full rounded-[16px] object-cover"
          src={SupperHeros}
          alt="Introducing ToyStore image"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Introducing;
